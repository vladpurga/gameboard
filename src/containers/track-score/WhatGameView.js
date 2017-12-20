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
  ScrollView,
  ListView,
  RefreshControl,
  TextInput,
  TouchableOpacity
} from 'react-native';

// Consts and Libs
import { AppColors, AppStyles } from '@theme/';
import { ErrorMessages } from '@constants/';

// Containers
import RecipeCard from '@containers/recipes/Card/CardContainer';

// Components
import Error from '@components/general/Error';
import {
  Text
} from '@components/ui/';

import validate from './validate';

const renderInput = ({ input: { onChange, ...restInput }}) => {
  return <TextInput style={styles.input} onChangeText={onChange} {...restInput} />
}

class WhatGame extends Component {
  static componentName = 'WhatGame';

  static propTypes = {
  }

  static defaultProps = {
  }

  constructor() {
    super();
  }

  componentWillReceiveProps(props) {
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
  validate
})(WhatGame);

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'blue',
    color: 'white',
    height: 30,
    lineHeight: 30,
    marginTop: 10,
    textAlign: 'center',
    width: 250
  },
  input: {
    borderColor: 'black',
    borderWidth: 1,
    height: 37,
    width: 250
  }
})
