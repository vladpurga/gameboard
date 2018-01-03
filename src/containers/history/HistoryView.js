import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  Text,
} from 'react-native';
import { Body, Button, Content, Icon, Left, List, ListItem, Right, Separator } from 'native-base';
import { Actions } from 'react-native-router-flux';

const styles = StyleSheet.create({
  content: {
    backgroundColor: 'white',
  },

  // Tab Styles
  tabContainer: {
    flex: 1,
    marginTop: 30,
  },
});

class History extends Component {
  static componentName = 'GameStats';

  static propTypes = {
    history: PropTypes.shape({}).isRequired,
  }

  static defaultProps = {
  }

  render = () => {
    const { history } = this.props;
    (() => {})(history);

    return (
      <Content style={styles.content}>
        <List>
          <Separator bordered>
            <Text>TODAY</Text>
          </Separator>
          {history.playedGames.map(pg => (
            <ListItem key={pg.key} icon>
              <Left>
                <Icon name="podium" />
              </Left>
              <Body>
                <Text>{pg.game}</Text>
              </Body>
              <Right>
                <Text>Details</Text>
                <Button
                  onPress={() => Actions.HistoryPlayedGame({ playedGame: pg })}
                >
                  <Icon name="arrow-forward" />
                </Button>
              </Right>
            </ListItem>
          ))
          }
        </List>
      </Content>
    );
  }
}

export default History;
