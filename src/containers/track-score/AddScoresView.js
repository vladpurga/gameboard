/**
 * Add Scores View
 *  - Used to add scores (if wanted) to a tracked game.
 */
import React, { Component } from 'react';
import { View } from 'react-native';
import { H1, Input } from 'native-base';
import PropTypes from 'prop-types';

import { Player, Spacer, WizardPage } from '@components/ui/';
import rankings from '@lib/rankings';

class AddScore extends Component {
  static componentName = 'AddScore';

  static propTypes = {
    onNext: PropTypes.func.isRequired,
    previousPage: PropTypes.func.isRequired,
    game: PropTypes.string.isRequired,
    players: PropTypes.arrayOf(PropTypes.object).isRequired,
    trackScoreSetPlayerScore: PropTypes.func.isRequired,
  }

  static defaultProps = {
  }

  componentWillReceiveProps() {
  }

  renderPlayer = rankedPlayer => (
    <Player key={rankedPlayer.id} player={rankedPlayer} hideIcon>
      <View style={{ flex: 0, width: 80 }}>
        <Input
          regular
          keyboardType="numeric"
          placeholder="Score"
          onChangeText={text => this.props.trackScoreSetPlayerScore(rankedPlayer.id, text)}
        />
      </View>
    </Player>
  )

  render = () => {
    const {
      onNext,
      previousPage,
      game,
      players,
    } = this.props;

    const rankedPlayers = rankings.rankPlayers(players);

    return (
      <WizardPage
        nextLabel="Done"
        previousLabel="Back"
        onNext={onNext}
        onPrevious={previousPage}
      >
        <H1>Add Scores for {game}?</H1>
        <Spacer size={20} />
        {rankedPlayers.map(this.renderPlayer)}
      </WizardPage>
    );
  }
}

export default AddScore;

