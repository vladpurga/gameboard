/**
 * Track Score Scenes
 *
 * React Native Starter App
 * https://github.com/mcnamee/react-native-starter-app
 */
import React from 'react';
import { Scene } from 'react-native-router-flux';

// Consts and Libs
import { AppConfig } from '@constants/';

// Scenes
import TrackScore from '@containers/track-score/TrackScoreContainer';

const scenes = (
  <Scene key="track-score">
    <Scene
      {...AppConfig.navbarProps}
      key="trackScore"
      title="Track Score"
      clone
      component={TrackScore}
      analyticsDesc="Track Score"
    />
  </Scene>
);

export default scenes;
