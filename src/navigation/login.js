import React from 'react';
import { Scene, ActionConst } from 'react-native-router-flux';

// Scenes
import Login from '@containers/login/LoginContainer';

/* Routes ==================================================================== */
const scenes = (
  <Scene
    hideNavBar
    key="login"
    component={Login}
    type={ActionConst.RESET}
    analyticsDesc="Authentication"
  />
);

export default scenes;
