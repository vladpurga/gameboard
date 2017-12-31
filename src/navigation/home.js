import React from 'react';
import { Scene, ActionConst } from 'react-native-router-flux';

// Consts and Libs
import { AppConfig } from '@constants/';

// Scenes
import Home from '@containers/home/HomeContainer';

const scenes = (
  <Scene
    {...AppConfig.navbarProps}
    key="home"
    title="Home"
    clone
    component={Home}
    analyticsDesc="Home"
  />
);

export default scenes;
