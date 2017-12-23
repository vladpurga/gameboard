/**
 * Who Played View
 *  - Used to select who played in the game which you are tracking a score for.
 */
import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Field, reduxForm } from 'redux-form';
import { Button, H1, Icon, Text } from 'native-base';
import PropTypes from 'prop-types';

import { GameRankZone, Spacer } from '@components/ui/';

import validate from './validate';
import renderInput from './render-input';

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
    handleSubmit: PropTypes.func.isRequired,
    previousPage: PropTypes.func.isRequired,
    game: PropTypes.string.isRequired,
    players: PropTypes.array.isRequired,
  }

  static defaultProps = {
  }

  componentWillReceiveProps() {
  }

  renderPlayers = (players) => {
    return (
      <View>
        {players.map((player, index) =>
          (
            <View style={styles.playerContainer} key={player.id}>
              <View style={{ flexDirection: 'row' }}>
                <View style={{ flex: 1 }}>
                  <Text>{player.name}</Text>
                </View>
                <View style={{ flex: 0 }}>
                  <Button
                    transparent
                    light
                    onPress={() => players.remove(index)}
                  >
                    <Icon name="arrow-dropdown" style={{ fontSize: 32, color: 'black' }} />
                  </Button>
                </View>
                <View style={{ flex: 0 }}>
                  <Button
                    transparent
                    light
                    onPress={() => players.remove(index)}
                  >
                    <Icon name="arrow-dropup" style={{ fontSize: 32, color: 'black' }} />
                  </Button>
                </View>
              </View>
            </View>
          ),
        )}
      </View>
    );
  }

  render = () => {
    const { handleSubmit, previousPage, game, players } = this.props;

    const winners = players.filter(p => p.rank === 1);
    const losers = players.filter(p => !p.rank);

    return (
      <View style={styles.container}>
        <View style={styles.top}>
          <H1>Who Won {game}?</H1>
          <Spacer size={20} />
          <GameRankZone rank="Winner">
            {this.renderPlayers(winners)}
          </GameRankZone>
          <GameRankZone rank="Losers">
            {this.renderPlayers(losers)}
          </GameRankZone>
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

