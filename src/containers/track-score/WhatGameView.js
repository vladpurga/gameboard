/**
 * What Game View
 *  - Used to select the game which you are tracking a score for.
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { H1 } from 'native-base';
import PropTypes from 'prop-types';

import { Spacer, WizardPage } from '@components/ui/';

import renderInput from './render-input';

class WhatGame extends Component {
  static componentName = 'WhatGame';

  static propTypes = {
    game: PropTypes.string.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    onNext: PropTypes.func.isRequired,
  }

  static defaultProps = {
  }

  componentWillReceiveProps() {
  }

  submit = (values) => {
    //  Do whatever we've been told to do on next, passing in the game.
    this.props.onNext(values.game);
  }

  render = () => {
    const { handleSubmit } = this.props;

    return (
      <WizardPage
        nextLabel="Next"
        onNext={handleSubmit(this.submit)}
      >
        <H1>What Game?</H1>
        <Spacer size={20} />
        <Field name="game" component={renderInput} autoFocus placeHolder="Game Name" />
      </WizardPage>
    );
  }
}

const validate = (values) => {
  const errors = {};
  if (!values.game) {
    errors.game = 'Required';
  }
  return errors;
};

function mapStateToProps(state, ownProps) {
  return {
    initialValues: {
      game: ownProps.game,
    },
  };
}

const WhatGameForm = reduxForm({
  form: 'trackScoreWhatGame',
  validate,
})(WhatGame);

export default connect(mapStateToProps)(WhatGameForm);

