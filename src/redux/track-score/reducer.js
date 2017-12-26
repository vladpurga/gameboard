/**
 * Track Score Reducer
 */
import Store from './store';

// Set initial state
export const initialState = Store;

export default function trackScoreReducer(state = initialState, action) {
  switch (action.type) {
    case 'TRACK_SCORE': {
      return {
        ...state,
      };
    }
    default:
      return state;
  }
}
