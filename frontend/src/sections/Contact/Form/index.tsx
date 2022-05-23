import React from 'react';

import { Form as FormComponent, Input, SendButton } from './components';

const Form = () => {
  return (
    <FormComponent>
      <Input placeholder='Your email' />
      <Input placeholder='Your message' />
      <SendButton>Send</SendButton>
    </FormComponent>
  );
};

export default Form;
