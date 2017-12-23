/**
 * GameRankZone
 *   Shows a section for a rank, such as 'Winner', 'Second', 'Losers'.
 *
     <GameRankZone rank="Winner"></GameRankZone>
 */
import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Text } from 'native-base';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  zoneContainer: {
    backgroundColor: '#dedede',
    padding: 20,
  },
  hintContainer: {
    backgroundColor: '#efefef',
    borderStyle: 'dashed',
    borderWidth: 2,
    borderColor: '#232323',
    borderRadius: 10,
    padding: 20,
  },
});

class GameRankZone extends Component {
  static propTypes = {
    rank: PropTypes.string.isRequired,
    children: PropTypes.node,
  }

  static defaultProps = {
    children: null,
  }

  render = () => {
    const { rank, children } = this.props;

    const hideHint = children && children.length > 0;

    const contents = !hideHint ?
      (<View style={styles.hintContainer}><Text style={{ textAlign: 'center' }}>Drag the winner here!</Text></View>) :
      children;

    return (
      <View>
        <Text style={{ textAlign: 'right', fontWeight: 'bold' }}>{rank}</Text>
        <View style={styles.zoneContainer}>
          {contents}
        </View>
      </View>
    );
  }
}

export default GameRankZone;
