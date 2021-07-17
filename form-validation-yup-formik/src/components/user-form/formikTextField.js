import TextField from '@material-ui/core/TextField';
import React from 'react';
import useStyle from './style';

const FormikTextField = (props) => {
  const { name, type, formik } = props;
  const {
    touched, errors, handleChange, handleBlur, values,
  } = formik;
  const classes = useStyle;
  return (
    <TextField
      type={type}
      name={name}
      className={classes.formField}
      error={touched[name] && errors[name]}
      onChange={handleChange}
      onBlur={handleBlur}
      label={name.toUpperCase()}
      value={values[name]}
      helperText={touched[name] && errors[name]}
    />
  );
};

export default FormikTextField;
