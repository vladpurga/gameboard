/*
 * Track Score View
 *  - Contains a multi-screen form to let the user track the score for a game.
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { H1 } from 'native-base';
import { Actions } from 'react-native-router-flux';
import { reduxForm, Field } from 'redux-form';

import { Spacer, WizardPage } from '@components/ui/';
import validate from './validate';
import renderInput from './render-input';

class AddFriend extends Component {
  static componentName = 'AddFriend';

  static propTypes = {
    addFriend: PropTypes.func.isRequired,
  }

  submit = (values) => {
    this.props.addFriend(values);
    Actions.pop();
  }

  render = () => (
    <WizardPage
      nextLabel="Add"
      onNext={this.props.handleSubmit(this.submit)}
      previousLabel="Cancel"
      onPrevious={Actions.pop}
    >
      <H1>Add Friend</H1>
      <Spacer size={20} />
      <Field name="name" component={renderInput} autoFocus placeHolder="Name" />
    </WizardPage>
  )
}

export default reduxForm({
  form: 'addFriend',
  validate,
})(AddFriend);
