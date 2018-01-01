import React from 'react';
import { Router, Scene, Tabs, Stack } from 'react-native-router-flux';
import { Icon } from 'native-base';

import { AppConfig } from '@constants/';


// Scenes
import Launch from '@containers/launch/LaunchContainer';
import Login from '@containers/login/LoginContainer';
import Home from '@containers/home/HomeContainer';
import TrackScore from '@containers/track-score/TrackScoreContainer';
import GameStats from '@containers/game-stats/GameStatsContainer';

const Index = (
  <Router>
    <Stack key="root">
      <Scene key="launch" component={Launch} hideNavBar initial />
      <Scene key="login" component={Login} hideNavBar />

      <Scene
        key="home"
        title={AppConfig.appName.toUpperCase()}
        component={Home}
        icon={() => <Icon name="home" {...AppConfig.icons} />}
        {...AppConfig.navbarProps}
      />

      <Stack>
        <Scene hideNavBar>
          <Tabs
            key="tabbar"
            swipeEnabled
            type="replace"
            showLabel={false}
            {...AppConfig.tabProps}
          >
            <Stack
              key="trackScore"
              title="TRACK SCORE"
              icon={() => <Icon name="book" {...AppConfig.icons} />}
              {...AppConfig.navbarProps}
            >
              <Scene key="trackScore" component={TrackScore} />
            </Stack>

            <Stack
              key="gameStats"
              title="GAME STATS"
              icon={() => <Icon name="book" {...AppConfig.icons} />}
              {...AppConfig.navbarProps}
            >
              <Scene key="gameStats" component={GameStats} />
            </Stack>

          </Tabs>
        </Scene>
      </Stack>
    </Stack>
  </Router>
);

export default Index;
