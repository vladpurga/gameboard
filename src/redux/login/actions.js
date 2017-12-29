import firebase from '@lib/firebase';
import { setGame } from '../game-stats/actions';

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
      setGame('Grifters')(dispatch);
    });
};

export function noop() {}
