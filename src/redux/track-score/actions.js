import firebase from '@lib/firebase';

export function start(game) {
  //  When we start tracking the score for a game, we'll create an initial set
  //  of players which include the current user.
  const {
    uid,
    displayName,
    email,
    photoURL,
  } = firebase.auth().currentUser;
  const initialPlayers = [{
    id: uid,
    name: displayName,
    email,
    imageUri: photoURL,
  }];

  return {
    type: 'TRACK_SCORE_START',
    data: {
      game,
      players: initialPlayers,
    },
  };
}

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

export function setGame(game) {
  return {
    type: 'TRACK_SCORE_SET_GAME',
    data: game,
  };
}

export function addPlayer(player) {
  return {
    type: 'TRACK_SCORE_ADD_PLAYER',
    data: player,
  };
}

export function removePlayer(playerId) {
  return {
    type: 'TRACK_SCORE_REMOVE_PLAYER',
    data: playerId,
  };
}
