/**
 * Combine All Reducers
 *
 * React Native Starter App
 * https://github.com/mcnamee/react-native-starter-app
 */

import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

// Our custom reducers
import login from '@redux/login/reducer';
import gameStats from '@redux/game-stats/reducer';
import router from '@redux/router/reducer';
import sideMenu from '@redux/sidemenu/reducer';
import user from '@redux/user/reducer';
import recipe from '@redux/recipes/reducer';
import trackScore from '@redux/track-score/reducer';

// Combine all
const appReducer = combineReducers({
  login,
  gameStats,
  router,
  sideMenu,
  user,
  recipe,
  form: formReducer,
  trackScore,
});

// Setup root reducer
const rootReducer = (state, action) => {
  const newState = (action.type === 'RESET') ? undefined : state;
  return appReducer(newState, action);
};

export default rootReducer;
