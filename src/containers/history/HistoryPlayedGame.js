import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  View,
} from 'react-native';
import {
  Body,
  Content,
  H1,
  List,
  ListItem,
  Right,
  Text,
} from 'native-base';
import moment from 'moment';

import rankings from '@lib/rankings';
import { Spacer } from '@components/ui/';

const styles = StyleSheet.create({
  content: {
    backgroundColor: 'white',
    padding: 30,
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
    const {
      playedGame: {
        game,
        createdAt,
        players,
      },
    } = this.props;

    //  Before we order by rank, fix any undefined ranks.
    const fixedPlayers = players.map(p => ({
      ...p,
      rank: (p.rank === undefined ? null : p.rank),
    }));

    //  Order the players by rank.
    const rankedPlayers = fixedPlayers.reduce((acc, player) => {
      acc[player.rank] = acc[player.rank] || [];
      acc[player.rank].push({ ...player });
      return acc;
    }, { });

    return (
      <Content style={styles.content}>
        <H1>{game}</H1>
        <Spacer size={10} />
        { createdAt && <Text>{moment.unix(createdAt / 1000).format('LLLL')}</Text>}
        <Spacer size={30} />
        <List>
          { Object.keys(rankedPlayers).map(key => (
            <View key={key}>
              <ListItem itemDivider>
                <Text>{rankings.rankName(key)}</Text>
              </ListItem>
              { rankedPlayers[key].map(player => (
                <ListItem key={player.key}>
                  <Body><Text>{player.name}</Text></Body>
                  <Right><Text>{player.score}</Text></Right>
                </ListItem>
              ))
              }
            </View>
          ))
          }
        </List>
      </Content>
    );
  }
}

export default HistoryPlayedGame;
