import React from 'react';
import { StyleSheet } from 'react-native';
import { Body, Button, Card, CardItem, Icon, Left, Right, Text, Thumbnail } from 'native-base';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  playerCard: {
    borderRadius: 10,
  },

  playerCardItem: {
    borderRadius: 10,
  },
});

const Player = ({ player, onAdd, onRemove }) => (
  <Card key={player.id} style={styles.playerCard}>
    <CardItem style={styles.playerCardItem}>
      <Left>
        <Thumbnail source={{ uri: player.imageUri }} />
        <Body>
          <Text>{player.name}</Text>
          <Text note>{player.email}</Text>
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

Player.propTypes = {
  player: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    imageUri: PropTypes.string.isRequired,
  }).isRequired,
  onAdd: PropTypes.func,
  onRemove: PropTypes.func,
};

Player.defaultProps = {
  onAdd: null,
  onRemove: null,
};

export default Player;

