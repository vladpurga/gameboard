import React from 'react';
import { Scene } from 'react-native-router-flux';

// Consts and Libs
import { AppConfig } from '@constants/';

// Scenes
import GameStats from '@containers/game-stats/GameStatsContainer';

const scenes = (
  <Scene key="game-stats">
    <Scene
      {...AppConfig.navbarProps}
      key="gameStats"
      title="Game Stats"
      clone
      component={GameStats}
      analyticsDesc="Game Stats"
    />
  </Scene>
);

export default scenes;
