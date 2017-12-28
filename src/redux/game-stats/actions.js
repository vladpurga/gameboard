import firebase from '@lib/firebase';

export function setGame(game) {
  return {
    type: 'GAME_STATS_SET_GAME',
    data: {
      game,
    },
  };
}

export const updatePlayedGames = () => (dispatch) => {
  firebase.database()
    .ref('played-games')
    .orderByChild('game')
    .equalTo('Caverna')
    .on('value', (snapshot) => {
      // const playedGames = snapshot.val() || [];
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
