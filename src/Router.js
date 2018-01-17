import React from 'react';
import { Router, Scene, Stack } from 'react-native-router-flux';
import { Icon } from 'native-base';

import { AppConfig } from '@constants/';

// Scenes
import AddFriend from '@containers/add-friend/AddFriendContainer';
import Launch from '@containers/launch/LaunchView';
import Login from '@containers/login/LoginContainer';
import History from '@containers/history/HistoryContainer';
import HistoryPlayedGame from '@containers/history/HistoryPlayedGame';
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

      <Scene
        key="trackScore"
        title="TRACK SCORE"
        component={TrackScore}
        icon={() => <Icon name="podium" {...AppConfig.icons} />}
        {...AppConfig.navbarProps}
      />

      <Scene
        key="gameStats"
        title="GAME STATS"
        component={GameStats}
        icon={() => <Icon name="stats" {...AppConfig.icons} />}
        {...AppConfig.navbarProps}
      />

      <Scene
        key="History"
        title="HISTORY"
        component={History}
        icon={() => <Icon name="stats" {...AppConfig.icons} />}
        {...AppConfig.navbarProps}
      />

      <Scene
        key="HistoryPlayedGame"
        title="HISTORY"
        component={HistoryPlayedGame}
        icon={() => <Icon name="stats" {...AppConfig.icons} />}
        {...AppConfig.navbarProps}
        clone
      />

      <Scene
        key="AddFriend"
        title="ADD FRIEND"
        component={AddFriend}
        icon={() => <Icon name="add" {...AppConfig.icons} />}
        {...AppConfig.navbarProps}
      />
    </Stack>
  </Router>
);

export default Index;
