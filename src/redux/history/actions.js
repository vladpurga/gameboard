import firebase from '@lib/firebase';

export const watchHistory = () => (dispatch) => {
  //  Remove any existing queries.
  firebase.database()
    .ref('played-games')
    .orderByChild('createdAt')
    .off();

  //  Now watch all of the played games for that game.
  firebase.database()
    .ref('played-games')
    .orderByChild('createdAt')
    .on('value', (snapshot) => {
      const playedGames = [];
      snapshot.forEach((child) => {
        const item = child.val();
        item.key = child.key;
        playedGames.splice(0, 0, item);
      });
      dispatch({
        type: 'HISTORY_UPDATE_PLAYED_GAMES',
        data: playedGames,
      });
    });
};

export function noop() {}
