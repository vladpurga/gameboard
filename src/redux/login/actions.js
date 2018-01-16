import { AsyncStorage } from 'react-native';
import { GoogleSignin } from 'react-native-google-signin';
import { Actions } from 'react-native-router-flux';
import firebase from 'react-native-firebase';
import { setGame } from '../game-stats/actions';
import * as FriendsActions from '../friends/actions';
import * as HistoryActions from '../history/actions';

export const login = () => (dispatch) => {
  //  Start logging in - we're busy.
  dispatch({
    type: 'LOGIN_BUSY',
    data: true,
  });

  //  Connect to Firebase.
  firebase.auth()
    .signInAnonymously()
    .then(() => {
      //  We're no longer busy!
      dispatch({
        type: 'LOGIN_BUSY',
        data: false,
      });

      //  Load stats for Grifters for now...
      //  Also start watching online data.
      setGame('Grifters')(dispatch);
      FriendsActions.watchFriends()(dispatch);
    });
};

export const googleLogin = idToken => async (dispatch) => {
  //  Create a google credential from the id token.
  const credential = firebase.auth.GoogleAuthProvider.credential(idToken);

  //  Now sign in with the google credential.
  try {
    await firebase.auth().signInWithCredential(credential);
  } catch (error) {
    const {
      errorCode,
    } = error;
    if (errorCode === 'auth/account-exists-with-different-credential') {
      // Email already associated with another account.
    }
    console.error('Firebase login error', error);
  }

  //  Awesome, we've logged in with Google + Firebase. Store the token for
  //  auto-login next time and dispatch success.
  await AsyncStorage.setItem('login/credentials', JSON.stringify({
    type: 'google',
    token: idToken,
  }));
  dispatch({
    type: 'LOGIN_FIREBASE',
    data: firebase.auth().currentUser,
  });

  //  Load stats for Grifters for now...
  //  Also start watching online data.
  setGame('Grifters')(dispatch);
  FriendsActions.watchFriends()(dispatch);
  HistoryActions.watchHistory()(dispatch);
};

export const resume = () => async (dispatch) => {
  //  First attempt to get the token from storage.
  const rawCredentials = await AsyncStorage.getItem('login/credentials');
  const credentials = JSON.parse(rawCredentials);


  //  TODO: fake no persistent login
  //  If we have no credentials in storage, we cannot resume and we are done.
  return false;
  if (!credentials) {
    return false;
  }

  //  We've got credentials, so depending on the credential type, login.
  switch (credentials.type) {
    case 'google': {
      await googleLogin(credentials.token)(dispatch);
      return true;
    }

    default: throw new Error(`Credential type '${credentials.type}' is not recognised.`);
  }
};

export const logout = () => async (dispatch) => {
  await AsyncStorage.removeItem('login/credentials');
  await firebase.auth().signOut();
  await GoogleSignin.signOut();
  Actions.launch({ type: 'reset' });
  dispatch({
    type: 'LOGIN_LOGOUT',
  });
};
