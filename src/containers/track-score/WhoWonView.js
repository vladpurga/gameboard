/**
 * Who Played View
 *  - Used to select who played in the game which you are tracking a score for.
 */
import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { reduxForm } from 'redux-form';
import { Button, H1, Text } from 'native-base';
import PropTypes from 'prop-types';

import { GameRankZone, RankedPlayer, Spacer } from '@components/ui/';
import rankings from '@lib/rankings';

import validate from './validate';

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },

  top: {
    flex: 1,
  },

  bottom: {
    flex: 0,
    flexDirection: 'row',
  },

  buttonContainer: {
    flex: 1,
    padding: 8,
  },

  playerContainer: {
    backgroundColor: '#dedede',
    borderWidth: 1,
    borderColor: '#232323',
    borderRadius: 10,
    padding: 8,
  },

});

class WhoWon extends Component {
  static componentName = 'WhoWon';

  static propTypes = {
    //  Props from redux-form...
    handleSubmit: PropTypes.func.isRequired,
    previousPage: PropTypes.func.isRequired,
    change: PropTypes.func.isRequired,
    //  Props from our form...
    game: PropTypes.string.isRequired,
    players: PropTypes.arrayOf(PropTypes.object).isRequired,
  }

  static defaultProps = {
  }

  componentWillReceiveProps() {
  }

  renderPlayers = players => (
    <View>
      {players.map(player => (
        <RankedPlayer
          player={player}
          moveDown={player.moveDown}
          moveUp={player.moveUp}
        />
      ),
      )}
    </View>
  );

  render = () => {
    const { handleSubmit, previousPage, change, game, players } = this.props;

    //  Get the next available rank from the set of players.
    const nextAvailableRank = rankings.nextFreeRank(players);

    //  Create the moveUp/moveDown functions for each player.
    players.forEach((player, index) => {
      const moveUp = () => {
        const newRank = Number.isInteger(player.rank) ? player.rank - 1 : nextAvailableRank;
        change(`players[${index}].rank`, newRank);
      };
      const moveDown = () => {
        const newRank = player.rank === (nextAvailableRank - 1) ? null : nextAvailableRank;
        change(`players[${index}].rank`, newRank);
      };
      Object.assign(player, {
        moveUp: player.rank !== 1 ? moveUp : null,
        moveDown: player.rank !== null ? moveDown : null,
      });
    });

    const rankedPlayers = players.reduce((acc, player) => {
      acc[player.rank] = acc[player.rank] || [];
      acc[player.rank].push(player);
      return acc;
    }, { [nextAvailableRank]: [] }); // the next avaiable rank is shown

    return (
      <View style={styles.container}>
        <View style={styles.top}>
          <H1>Who Won {game}?</H1>
          <Spacer size={20} />
          {
            Object.keys(rankedPlayers).map(key => (
              <GameRankZone rank={rankings.rankName(key)}>
                {this.renderPlayers(rankedPlayers[key])}
              </GameRankZone>
            ))
          }
        </View>
        <View style={styles.bottom}>
          <View style={styles.buttonContainer}>
            <Button block light onPress={previousPage}>
              <Text style={{ color: 'black' }}>Back</Text>
            </Button>
          </View>
          <View style={styles.buttonContainer}>
            <Button block primary onPress={handleSubmit}>
              <Text>Next</Text>
            </Button>
          </View>
        </View>
      </View>
    );
  }
}

export default reduxForm({
  form: 'trackScore',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount

  validate,
})(WhoWon);

