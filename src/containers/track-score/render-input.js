import React from 'react';
import { Item, Label, Input, Text } from 'native-base';

export default function renderInput({ input, autoFocus, placeHolder, label, type, meta: { touched, error, warning } }) {
  const showError = touched && !!error;

  return (
    <Item error={showError} regular>
      {label ? <Label>{label}</Label> : null}
      <Input {...input} placeHolder={placeHolder} autoFocus={autoFocus} />
      {showError ? <Text>{error}</Text> : <Text />}
    </Item>
  );
}
