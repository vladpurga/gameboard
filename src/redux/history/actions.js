import firebase from 'react-native-firebase';

export const updateHistory = playedGames => ({
  type: 'HISTORY_UPDATE_PLAYED_GAMES',
  data: playedGames,
});

export const deleteGame = (key) => {
  //  Now watch all of the played games for that game.
  firebase.database()
    .ref('played-games')
    .child(key)
    .remove();

  return {
    type: 'HISTORY_DELETE_GAME',
    data: key,
  };
};
