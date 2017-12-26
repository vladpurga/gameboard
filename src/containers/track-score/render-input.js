import React from 'react';
import { Item, Label, Input, Text } from 'native-base';

// eslint-disable-next-line react/prop-types
export default function renderInput({ input, autoFocus, placeHolder, label, meta: { touched, error } }) { // eslint-disable-line max-len
  const showError = touched && !!error;

  return (
    <Item error={showError} regular>
      {label ? <Label>{label}</Label> : null}
      <Input {...input} placeHolder={placeHolder} autoFocus={autoFocus} />
      {showError ? <Text>{error}</Text> : <Text />}
    </Item>
  );
}
