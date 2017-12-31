import initialState from './store';

export default function loginReducer(state = initialState, action) {
  switch (action.type) {
    case 'LOGIN_BUSY': {
      return {
        ...state,
        busy: action.data,
      };
    }

    case 'LOGIN_FIREBASE': {
      return {
        ...state,
        user: action.data,
      };
    }

    case 'LOGIN_LOGOUT': {
      //  Clear the user from the state.
      return {
        ...state,
        user: null,
      };
    }

    default:
      return state;
  }
}
