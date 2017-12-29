import firebase from '@lib/firebase';

//  Sets the game we are currently viewing stats for.
export const setGame = game => (dispatch) => {
  //  Set the current game.
  dispatch({
    type: 'GAME_STATS_SET_GAME',
    data: game,
  });

  //  Remove any existing queries.
  firebase.database()
    .ref('played-games')
    .orderByChild('game')
    .equalTo(game)
    .off();

  //  Now watch all of the played games for that game.
  firebase.database()
    .ref('played-games')
    .orderByChild('game')
    .equalTo(game)
    .on('value', (snapshot) => {
      const playedGames = [];
      snapshot.forEach((child) => {
        const item = child.val();
        item.key = child.key;
        playedGames.push(item);
      });
      dispatch({
        type: 'GAME_STATS_UPDATE_PLAYED_GAMES',
        data: playedGames,
      });
    });
};

export function noop() {}
