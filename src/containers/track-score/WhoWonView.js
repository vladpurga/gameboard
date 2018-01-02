/**
 * Who Played View
 *  - Used to select who played in the game which you are tracking a score for.
 */
import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { H1 } from 'native-base';
import PropTypes from 'prop-types';

import { GameRankZone, RankedPlayer, Spacer, WizardPage } from '@components/ui/';
import rankings from '@lib/rankings';

import validate from './validate';

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

  createMoveUpHandler = (player, nextAvailableRank, change) => () => {
    if (!Number.isInteger(player.rank)) {
      change(`players[${player.index}].rank`, nextAvailableRank);
    } else {
      change(`players[${player.index}].rank`, player.rank - 1);
    }
  }

  createMoveDownHandler = (player, nextAvailableRank, change) => () => {
    //  Is the player on the space ABOVE the next available rank? If so, then
    //  moving them down is going to skip that rank and make them a loser:
    //     1    - Winner       : Player 1     <--- move down from here goes to losers
    //     2    - Second Place : <empty, i.e. next available rank>
    //     null - Losers       : Player 2
    //  We also make the player a loser if they move down and the next available
    //  rank is ABOVE them, i.e:
    //     1    - Winner       : <empty, i.e. next available rank>
    //     2    - Second Place : Player 1     <--- move down from here goes to losers
    //     null - Losers       : Player 2
    if (player.rank === (nextAvailableRank - 1) || player.rank > nextAvailableRank) {
      change(`players[${player.index}].rank`, null);
    } else {
      change(`players[${player.index}].rank`, player.rank + 1);
    }
  }

  render = () => {
    const {
      handleSubmit,
      previousPage,
      change,
      game,
      players,
    } = this.props;

    //  Get the next available rank from the set of players.
    const nextAvailableRank = rankings.nextFreeRank(players);

    const rankedPlayers = players.reduce((acc, player, index) => {
      acc[player.rank] = acc[player.rank] || [];
      //  keep track of the original index, a fudge so that we can tell redux
      //  form which element we are changing, even when we re-order them
      acc[player.rank].push({ ...player, index });
      return acc;
    }, { [nextAvailableRank]: [] }); // the next available rank is shown

    return (
      <WizardPage
        onNext={handleSubmit}
        onPrevious={previousPage}
      >
        <H1>Who Won {game}?</H1>
        <Spacer size={20} />
        {
          Object.keys(rankedPlayers).map(key => (
            <GameRankZone key={key} rank={rankings.rankName(key)}>
              {rankedPlayers[key].map(player => (
                <RankedPlayer
                  key={player.id}
                  player={player}
                  moveDown={this.createMoveDownHandler(player, nextAvailableRank, change)}
                  moveUp={this.createMoveUpHandler(player, nextAvailableRank, change)}
                />
              ))}
            </GameRankZone>
          ))
        }
      </WizardPage>
    );
  }
}

export default reduxForm({
  form: 'trackScore',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount

  validate,
})(WhoWon);

