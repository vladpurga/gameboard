/**
 * Game Stats Reducer
 */
import Store from './store';

// Set initial state
export const initialState = Store;

export default function recipeReducer(state = initialState, action) {
  switch (action.type) {
    case 'GAME_STATS_SET_GAME': {
      return {
        ...state,
        game: action.data,
      };
    }
    case 'GAME_STATS_UPDATE_PLAYED_GAMES': {
      return {
        ...state,
        playedGames: action.data,
      };
    }
    default:
      return state;
  }
}
