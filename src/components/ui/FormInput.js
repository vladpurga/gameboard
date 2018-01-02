import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { Icon, Item, Label, Input, Text } from 'native-base';

const FormInput = (props) => {
  const {
    input,
    autoFocus,
    placeHolder,
    label,
    meta: {
      touched,
      error,
    },
  } = props;
  const showError = touched && !!error;

  const renderError = () => (
    <View>
      <Text>{error}</Text>
      <Icon name="close-circle" />
    </View>
  );

  return (
    <View>
      {label ? <Label>{label}</Label> : null}
      <Item error={showError} regular>
        <Input {...input} placeHolder={placeHolder} autoFocus={autoFocus} />
        {showError && renderError()}
      </Item>
    </View>
  );
};

FormInput.propTypes = {
  input: PropTypes.string.isRequired,
  autoFocus: PropTypes.string.isRequired,
  placeHolder: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  meta: PropTypes.shape({
    touched: PropTypes.boolean.isRequired,
    error: PropTypes.error.isRequired,
  }).isRequired,
};

export default FormInput;
