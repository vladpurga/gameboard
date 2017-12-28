import initialState from './store';

export default function loginReducer(state = initialState, action) {
  switch (action.type) {
    case 'LOGIN_BUSY': {
      return {
        ...state,
        busy: action.data,
      };
    }
    default:
      return state;
  }
}
