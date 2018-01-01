const validate = (values) => {
  const errors = {};
  if (!values.game) {
    errors.game = 'Required';
  }
  return errors;
};

export default validate;
