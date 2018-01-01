/**
 * Who Played View
 *  - Used to select who played in the game which you are tracking a score for.
 */
import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import {
  Button,
  Card,
  CardItem,
  Left,
  Body,
  Right,
  H1,
  H2,
  Icon,
  Text,
  Thumbnail,
} from 'native-base';
import PropTypes from 'prop-types';

import { Spacer, WizardPage } from '@components/ui/';

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

  componentWillReceiveProps() {
  }

  renderPlayer = (props) => {
    const {
      id,
      name,
      email,
      imageUri,
      onAdd,
      onRemove,
    } = props;

    return (
      <Card key={id} style={{ borderRadius: 10 }}>
        <CardItem style={{ borderRadius: 10 }}>
          <Left>
            <Thumbnail source={{ uri: imageUri }} />
            <Body>
              <Text>{name}</Text>
              <Text note>{email}</Text>
            </Body>
          </Left>
          <Right>
            { onAdd &&
              <Button
                transparent
                light
                onPress={onAdd}
              >
                <Icon name="add" style={{ fontSize: 32, paddingRight: 10, color: 'black' }} />
              </Button>
            }
            { onRemove &&
              <Button
                transparent
                light
                onPress={onRemove}
              >
                <Icon name="remove" style={{ fontSize: 32, paddingRight: 10, color: 'black' }} />
              </Button>
            }
          </Right>
        </CardItem>
      </Card>
    );
  }

  render = () => {
    const {
      onNext,
      previousPage,
      game,
      friends,
      players,
    } = this.props;

    return (
      <WizardPage
        onPrevious={previousPage}
        onNext={onNext}
      >
        <H1>Who Played {game}?</H1>
        <Spacer size={20} />
        { players.map(player => this.renderPlayer({
            ...player,
            onRemove: () => this.props.trackScoreRemovePlayer(player.id),
          }))
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
        { friends.map(player => this.renderPlayer({
            ...player,
            onAdd: () => this.props.trackScoreAddPlayer(player),
          }))
        }
      </WizardPage>
    );
  }
}

export default WhoPlayed;

