import styled from 'styled-components';

import Button from '@components/Button';

export const Form = styled.div`
  width: 370px;
  height: 250px;
  box-shadow: 0 12px 56px 9px rgba(0, 0, 0, 0.25);
  padding-top: 1.5%;
`;

export const Input = styled.input`
  border: none;
  border-bottom: 1px solid #fff;
  outline: none;
  margin-top: 7%;
  margin-left: 10%;
  width: 60%;
  display: block;
  font-size: 0.8em;
  font-weight: 100;

  ::placeholder {
    color: #fff;
  }
`;

export const SendButton = styled(Button)`
  width: 120px;
  height: 35px;
  margin-top: 9%;
  margin-left: 10%;
  font-size: 0.8em;
`;
