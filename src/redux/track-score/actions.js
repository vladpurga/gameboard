import firebase from '@lib/firebase';

export function trackScore(gameResult) {
  const playedGame = {
    ...gameResult,
    scorerUid: firebase.auth().currentUser.uid,
    createdAt: firebase.database.ServerValue.TIMESTAMP,
  };
  firebase.database()
    .ref('played-games')
    .push(playedGame);

  return {
    type: 'TRACK_SCORE',
    playedGame,
  };
}

export function noop() { }
