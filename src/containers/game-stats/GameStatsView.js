import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { H1 } from 'native-base';

import { Spacer, WizardPage } from '@components/ui/';

const styles = StyleSheet.create({
  // Tab Styles
  tabContainer: {
    flex: 1,
    marginTop: 30,
  },
  button: {
    backgroundColor: 'blue',
    color: 'white',
    height: 30,
    lineHeight: 30,
    marginTop: 10,
    textAlign: 'center',
    width: 250,
  },
  input: {
    borderColor: 'black',
    borderWidth: 1,
    height: 37,
    width: 250,
  },
});

class GameStats extends Component {
  static componentName = 'GameStats';

  static propTypes = {
    gameStats: PropTypes.shape({}).isRequired,
  }

  static defaultProps = {
  }

  componentWillReceiveProps() {
  }

  render = () => {
    const { gameStats: { game, playedGames } } = this.props;

    return (
      <View style={styles.tabContainer}>
        <WizardPage>
          <H1>{game} Stats</H1>
          <Spacer size={20} />
          <Text>Game stats for {game}</Text>
          {playedGames.map(playedGame => (
            <View key={playedGame.id}>
              <Text>{playedGame.game}</Text>
            </View>
          ))}
        </WizardPage>
      </View>
    );
  }
}

export default GameStats;
