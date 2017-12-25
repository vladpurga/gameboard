/**
 * What Game View
 *  - Used to select the game which you are tracking a score for.
 */
import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { H1 } from 'native-base';
import PropTypes from 'prop-types';

import { Spacer, WizardPage } from '@components/ui/';

import validate from './validate';
import renderInput from './render-input';

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
      <WizardPage
        nextLabel="Next"
        onNext={handleSubmit}
      >
        <H1>What Game?</H1>
        <Spacer size={20} />
        <Field name="game" component={renderInput} autoFocus placeHolder="Game Name" />
      </WizardPage>
    );
  }
}

export default reduxForm({
  form: 'trackScore',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate,
})(WhatGame);

