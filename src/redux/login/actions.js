import firebase from '@lib/firebase';
import { updatePlayedGames } from '@redux/game-stats/actions';

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

      //  Kick off any post-login actions.
      dispatch(updatePlayedGames());
    });
};

export function noop() {}
