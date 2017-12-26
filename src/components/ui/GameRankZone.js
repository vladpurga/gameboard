/**
 * GameRankZone
 *   Shows a section for a rank, such as 'Winner', 'Second', 'Losers'.
 *
     <GameRankZone rank="Winner"></GameRankZone>
 */
import React from 'react';
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

const GameRankZone = ({ rank, children }) => {
  const count = React.Children.count(children);
  const showHint = count === 0;

  const contents = showHint ?
    (<View style={styles.hintContainer}><Text style={{ textAlign: 'center' }}>Drag the {rank} here!</Text></View>) :
    children;

  return (
    <View>
      <Text style={{ textAlign: 'right', fontWeight: 'bold' }}>{rank}</Text>
      <View style={styles.zoneContainer}>
        {contents}
      </View>
    </View>
  );
};


GameRankZone.propTypes = {
  rank: PropTypes.string.isRequired,
  children: PropTypes.node,
};

GameRankZone.defaultProps = {
  children: null,
};

export default GameRankZone;
