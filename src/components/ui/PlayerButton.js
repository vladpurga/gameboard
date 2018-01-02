import React from 'react';
import { StyleSheet } from 'react-native';
import { Button, Icon } from 'native-base';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  icon: {
    borderRadius: 10,
    fontSize: 32,
    color: 'black',
  },
});

const PlayerButton = ({ iconName, onPress }) => (
  <Button transparent light onPress={onPress}>
    <Icon name={iconName} style={styles.icon} />
  </Button>
);

PlayerButton.propTypes = {
  iconName: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
};

PlayerButton.defaultProps = {
};

export default PlayerButton;

