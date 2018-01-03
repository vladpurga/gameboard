/**
 * Game Stats Reducer
 */
import Store from './store';

// Set initial state
export const initialState = Store;

export default function historyReducer(state = initialState, action) {
  switch (action.type) {
    case 'HISTORY_UPDATE_PLAYED_GAMES': {
      return {
        ...state,
        playedGames: action.data,
      };
    }
    default:
      return state;
  }
}
