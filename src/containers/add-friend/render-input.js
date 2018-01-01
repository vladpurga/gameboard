import React from 'react';
import { View } from 'react-native';
import { Icon, Item, Label, Input, Text } from 'native-base';

// eslint-disable-next-line react/prop-types
export default function renderInput({ input, autoFocus, placeHolder, label, meta: { touched, error } }) { // eslint-disable-line max-len
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
}
