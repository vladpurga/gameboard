/**
 * Form Validation Message
 *
     <FormValidationMessage></FormValidationMessage>
 *
 * React Native Starter App
 * https://github.com/mcnamee/react-native-starter-app
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text } from 'native-base';

// Consts and Libs
import { AppFonts } from '@theme/';

/* Component ==================================================================== */
class CustomFormValidationMessage extends Component {
  static propTypes = {
    containerStyle: PropTypes.oneOfType([
      PropTypes.array,
      PropTypes.shape({}),
    ]),
    labelStyle: PropTypes.oneOfType([
      PropTypes.array,
      PropTypes.shape({}),
    ]),
  }

  static defaultProps = {
    containerStyle: [],
    labelStyle: [],
  }

  inputProps = () => {
    // Defaults
    const props = {
      ...this.props,
      containerStyle: [],
      labelStyle: [{
        marginLeft: 0,
        marginRight: 0,
        fontFamily: AppFonts.base.family,
      }],
    };

    if (this.props.containerStyle) {
      props.containerStyle.push(this.props.containerStyle);
    }

    if (this.props.labelStyle) {
      props.labelStyle.push(this.props.labelStyle);
    }

    return props;
  }

  render = () => <Text {...this.inputProps()} />
}

/* Export Component ==================================================================== */
export default CustomFormValidationMessage;
