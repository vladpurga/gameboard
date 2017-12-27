/**
 * JumboButton
 *
     <JumboButton title="Track Score" subtitle="Record the score for a game!" />

 * JumboButton is a full-width button, useful for when you are offering only a
 * a few options on the screen.
 */
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PropTypes from 'prop-types';
import { Button } from 'native-base';

const styles = StyleSheet.create({
  buttonContentContainer: {
    flexDirection: 'column',
  },

  title: {
    padding: 2,
    textAlign: 'center',
    color: 'white',
    fontSize: 28,
  },

  subtitle: {
    padding: 2,
    textAlign: 'center',
    color: 'white',
    fontSize: 16,
  },
});

const JumboButton = ({ onPress, title, subtitle }) => (
  <Button
    block
    onPress={onPress}
    style={{ height: 72, borderRadius: 16, padding: 8 }}
  >
    <View style={styles.buttonContentContainer}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
    </View>
  </Button>
);

JumboButton.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  onPress: PropTypes.func,
};

JumboButton.defaultProps = {
  subtitle: null,
  onPress: null,
};

export default JumboButton;
