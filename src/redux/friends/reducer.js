/**
 * Track Score Reducer
 */
import Store from './store';

// Set initial state
export const initialState = Store;

export default function friendsReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_FRIEND': {
      return {
        ...state,
        friends: [...state.friends, action.data],
      };
    }
    default:
      return state;
  }
}
