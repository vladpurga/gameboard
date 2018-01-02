/**
 * Add Scores View
 *  - Used to add scores (if wanted) to a tracked game.
 */
import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Field, reduxForm } from 'redux-form';
import { H1, Text } from 'native-base';
import PropTypes from 'prop-types';

import { Spacer, WizardPage } from '@components/ui/';
import rankings from '@lib/rankings';

import validate from './validate';
import renderInput from './render-input';

const styles = StyleSheet.create({
  playerContainer: {
    padding: 8,
  },
});

class AddScore extends Component {
  static componentName = 'AddScore';

  static propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    previousPage: PropTypes.func.isRequired,
    game: PropTypes.string.isRequired,
    players: PropTypes.arrayOf(PropTypes.object).isRequired,
  }

  static defaultProps = {
  }

  componentWillReceiveProps() {
  }

  renderPlayer = rankedPlayer => (
    <View style={styles.playerContainer} key={rankedPlayer.id}>
      <View style={{ flexDirection: 'row' }}>
        <View style={{ flex: 1 }}>
          <Text>{rankedPlayer.name}</Text>
        </View>
        <View style={{ flex: 0, width: 80 }}>
          <Field
            name={`players[${rankedPlayer.index}].score`}
            type="number"
            component={renderInput}
            placeholder="Score"
          />
        </View>
      </View>
    </View>
  )

  render = () => {
    const {
      handleSubmit,
      previousPage,
      game,
      players,
    } = this.props;

    //  Rank the players, keeping track of thier index so that we can use a
    //  Field to edit the value.
    const playersWithIndices = players.map((player, index) => ({ ...player, index }));
    const rankedPlayers = rankings.rankPlayers(playersWithIndices);

    return (
      <WizardPage
        nextLabel="Done"
        previousLabel="Back"
        onNext={handleSubmit}
        onPrevious={previousPage}
      >
        <H1>Add Scores for {game}?</H1>
        <Spacer size={20} />
        {rankedPlayers.map(this.renderPlayer)}
      </WizardPage>
    );
  }
}

export default reduxForm({
  form: 'trackScore',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount

  validate,
})(AddScore);

