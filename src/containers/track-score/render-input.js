import React from 'react';
import {
  PropTypes,
  StyleSheet,
  TextInput,
} from 'react-native';

const styles = StyleSheet.create({
  input: {
    borderColor: 'black',
    borderWidth: 1,
    height: 37,
    width: 250,
  },
});

const renderInput = ({ input: { onChange, ...restInput } }) => {
  return <TextInput style={styles.input} onChangeText={onChange} {...restInput} />;
};

renderInput.propTypes = {
  // input: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};

export default renderInput;
