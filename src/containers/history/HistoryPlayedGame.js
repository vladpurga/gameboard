import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
} from 'react-native';
import { Content, H1 } from 'native-base';

const styles = StyleSheet.create({
  content: {
    backgroundColor: 'white',
  },

  // Tab Styles
  tabContainer: {
    flex: 1,
    marginTop: 30,
  },
});

class HistoryPlayedGame extends Component {
  static componentName = 'HistoryPlayedGame';

  static propTypes = {
    playedGame: PropTypes.shape({}).isRequired,
  }

  static defaultProps = {
  }

  render = () => {
    const { playedGame } = this.props;

    return (
      <Content style={styles.content}>
        <H1>{playedGame.game}</H1>
      </Content>
    );
  }
}

export default HistoryPlayedGame;
