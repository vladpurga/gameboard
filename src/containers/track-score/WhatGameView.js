/**
 * What Game View
 *  - Used to select the game which you are tracking a score for.
 */
import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Field, reduxForm } from 'redux-form';
import { Button, H1, Text } from 'native-base';
import PropTypes from 'prop-types';

import { Spacer } from '@components/ui/';

import validate from './validate';
import renderInput from './render-input';

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },

  top: {
    flex: 1,
    // backgroundColor: '#ff0000',
  },

  bottom: {
    flex: 0,
    // backgroundColor: '#0000ff',
  },

  paddedButton: {
    padding: 8,
  },
});

class WhatGame extends Component {
  static componentName = 'WhatGame';

  static propTypes = {
    handleSubmit: PropTypes.func.isRequired,
  }

  static defaultProps = {
  }

  componentWillReceiveProps() {
  }

  render = () => {
    const { handleSubmit } = this.props;

    return (
      <View style={styles.container}>
        <View style={styles.top}>
          <H1>What Game?</H1>
          <Spacer size={20} />
          <Field name="game" component={renderInput} autoFocus placeHolder="Game Name" />
        </View>
        <View style={styles.bottom}>
          <Button block primary onPress={handleSubmit} style={{ padding: 8 }}>
            <Text>Next</Text>
          </Button>
        </View>
      </View>
    );
  }
}

export default reduxForm({
  form: 'trackScore',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate,
})(WhatGame);

