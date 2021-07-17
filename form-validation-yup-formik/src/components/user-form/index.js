import React from 'react';

import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import { number, object, string } from 'yup';
import { useFormik } from 'formik';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import useStyle from './style';
import FormikTextField from './formikTextField';

const userSchema = object({
  email: string().email().required('Enter email'),
  password: string().min(6).required('Enter password'),
  age: number().min(1).required('Enter age'),
  professional: string().required('Enter professional'),
  gender: string().required('Select a gender'),
});

const initialUser = {
  email: '',
  password: '',
  professional: '',
  gender: '',
};

function UserForm() {
  const classes = useStyle();
  const formik = useFormik({
    initialValues: initialUser,
    validationSchema: userSchema,
    validationOnChange: true,
    onSubmit: (data) => {
      alert(JSON.stringify(data));
    },
  });

  return (
    <div className={classes.container}>
      <div className={classes.box}>
        <Typography variant="h5" color="secondary">
          FORM VALIDATION
        </Typography>

        <form onSubmit={formik.handleSubmit} className={classes.form}>
          <FormikTextField name="email" type="text" formik={formik} />
          <FormikTextField name="password" type="password" formik={formik} />
          <FormikTextField name="professional" type="text" formik={formik} />
          <FormikTextField name="age" type="number" formik={formik} />
          <FormControl>
            <InputLabel htmlFor="gender">GENDER</InputLabel>
            <Select
              className={classes.formField}
              native
              error={formik.touched.gender && formik.errors.gender}
              value={formik.values.gender}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              inputProps={{
                name: 'gender',
                id: 'gender',
              }}
            >
              <option aria-label="None" value="" />
              <option value="male">Male</option>
              <option value="female">Female</option>
            </Select>
          </FormControl>
          <Button variant="contained" color="primary" type="submit"> Submit </Button>
        </form>
      </div>

    </div>
  );
}

export default UserForm;
