/**
 * What Game View
 *  - Used to select the game which you are tracking a score for.
 */
import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  View,
  TouchableOpacity,
} from 'react-native';

// Components
import {
  Text,
} from '@components/ui/';

import validate from './validate';
import renderInput from './render-input';

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'blue',
    color: 'white',
    height: 30,
    lineHeight: 30,
    marginTop: 10,
    textAlign: 'center',
    width: 250,
  },
  input: {
    borderColor: 'black',
    borderWidth: 1,
    height: 37,
    width: 250,
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
      <View>
        <Text h1>What Game?</Text>
        <Field name="game" component={renderInput} />
        <TouchableOpacity onPress={handleSubmit}>
          <Text style={styles.button}>Next</Text>
        </TouchableOpacity>
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

