import Store from './store';

// Set initial state
export const initialState = Store;

export default function gamesReducer(state = initialState, action) {
  switch (action.type) {
    case 'GAMES_UPDATE': {
      return {
        ...state,
        games: action.data,
      };
    }
    default:
      return state;
  }
}
