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
    rank: null,
  }];

  return {
    type: 'TRACK_SCORE_START',
    data: {
      game,
      players: initialPlayers,
    },
  };
}

export function submit(gameResult) {
  const playedGame = {
    ...gameResult,
    scorerUid: firebase.auth().currentUser.uid,
    createdAt: firebase.database.ServerValue.TIMESTAMP,
  };
  firebase.database()
    .ref('played-games')
    .push(playedGame);

  return {
    type: 'TRACK_SCORE_SUBMIT',
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
  //  Whenever we add a player, if we don't have an id, set one.
  if (!player.id) player.id = player.email || player.name;
  if (player.rank === undefined) player.rank = null;

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

export function setPlayerRank(id, rank) {
  return {
    type: 'TRACK_SCORE_UPDATE_PLAYER',
    data: { id, changes: { rank } },
  };
}

export function setPlayerScore(id, score) {
  return {
    type: 'TRACK_SCORE_UPDATE_PLAYER',
    data: { id, changes: { score } },
  };
}

