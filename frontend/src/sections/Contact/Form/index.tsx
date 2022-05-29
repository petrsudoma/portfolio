import React, { useState } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useSnackbar } from 'notistack';

import {
  ErrorText,
  Form as FormComponent,
  Input,
  InputWrapper,
  LoadingCircle,
  SendButton,
} from './components';

const validationSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  message: Yup.string().min(5, 'Too short').required('Required'),
});

const Form = () => {
  const [sendingMessage, setSendingMessage] = useState<boolean>(false);
  const { enqueueSnackbar } = useSnackbar();

  return (
    <Formik
      initialValues={{ email: '', message: '' }}
      onSubmit={(values, { resetForm }) => {
        setSendingMessage(true);

        fetch(process.env.NEXT_PUBLIC_BACKEND_URL + '/message', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(values),
        })
          .then(() => {
            enqueueSnackbar('Message sent', { variant: 'success' });
          })
          .catch(() => {
            enqueueSnackbar('Failed. Try again', { variant: 'error' });
          })
          .finally(() => setSendingMessage(false));

        resetForm();
      }}
      validationSchema={validationSchema}
    >
      {({ values, errors, touched, handleChange, handleSubmit }) => (
        <FormComponent onSubmit={handleSubmit}>
          {sendingMessage && <LoadingCircle />}
          <InputWrapper>
            <Input
              placeholder='Your email'
              name='email'
              value={values.email}
              onChange={handleChange}
            />
            {errors.email && touched.email && (
              <ErrorText>{errors.email}</ErrorText>
            )}
          </InputWrapper>

          <InputWrapper>
            <Input
              placeholder='Your message'
              name='message'
              value={values.message}
              onChange={handleChange}
            />
            {errors.message && touched.message && (
              <ErrorText>{errors.message}</ErrorText>
            )}
          </InputWrapper>
          <SendButton type='submit'>Send</SendButton>
        </FormComponent>
      )}
    </Formik>
  );
};

export default Form;
