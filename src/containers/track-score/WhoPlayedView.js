/**
 * Who Played View
 *  - Used to select who played in the game which you are tracking a score for.
 */
import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import {
  Button,
  H1,
  H2,
  Icon,
  Text,
} from 'native-base';
import PropTypes from 'prop-types';

import { Player, Spacer, WizardPage } from '@components/ui/';

class WhoPlayed extends Component {
  static componentName = 'WhoPlayed';

  static propTypes = {
    onNext: PropTypes.func.isRequired,
    previousPage: PropTypes.func.isRequired,
    friends: PropTypes.arrayOf(PropTypes.object).isRequired,
    players: PropTypes.arrayOf(PropTypes.object).isRequired,
    game: PropTypes.string.isRequired,
    trackScoreAddPlayer: PropTypes.func.isRequired,
    trackScoreRemovePlayer: PropTypes.func.isRequired,
  }

  static defaultProps = {
  }

  render = () => {
    const {
      onNext,
      previousPage,
      game,
      friends,
      players,
    } = this.props;

    //  The available players to add to the game are our set of friends who are
    //  not yet already in the player list.
    const playerKeys = players.map(p => p.id);
    const availableFriends = friends.filter(f => playerKeys.indexOf(f.id) === -1);

    return (
      <WizardPage
        onPrevious={previousPage}
        onNext={onNext}
      >
        <H1>Who Played {game}?</H1>
        <Spacer size={20} />
        { players.map(player => (
          <Player
            player={player}
            onRemove={() => this.props.trackScoreRemovePlayer(player.id)}
          />
          ))
        }

        <Button
          onPress={Actions.AddFriend}
          iconLeft
          block
          primary
        >
          <Icon name="add" />
          <Text>Add Friend</Text>
        </Button>
        <H2>Friends</H2>
        { availableFriends.map(player => (
          <Player
            player={player}
            onAdd={() => this.props.trackScoreAddPlayer(player)}
          />
          ))
        }
      </WizardPage>
    );
  }
}

export default WhoPlayed;

