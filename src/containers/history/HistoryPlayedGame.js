import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  Text,
} from 'react-native';
import { Body, Content, Icon, Left, List, ListItem, Right, Separator } from 'native-base';

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
