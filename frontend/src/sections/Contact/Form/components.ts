import styled from 'styled-components';

import Button from '@components/Button';

export const Form = styled.form`
  width: 370px;
  height: 250px;
  box-shadow: 0 12px 56px 9px rgba(0, 0, 0, 0.25);
  padding-top: 1.5%;
  position: relative;

  @media only screen and (max-width: 500px) {
    width: 100%;
    min-width: 220px;
    height: 30%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
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
  background-color: transparent;
  color: #fff;

  ::placeholder {
    color: #fff;
  }

  @media only screen and (max-width: 500px) {
    margin-left: 0;
    font-size: 0.6em;
  }
`;

export const InputWrapper = styled.div`
  width: 100%;
  position: relative;

  @media only screen and (max-width: 500px) {
    display: flex;
    justify-content: center;
  }
`;

export const ErrorText = styled.p`
  font-size: 0.7em;
  color: #d63131;
  position: absolute;
  left: 10%;

  @media only screen and (max-width: 500px) {
    font-size: 0.6em;
    left: 20%;
    top: 100%;
  }
`;

export const LoadingCircle = styled.div`
  background-color: transparent;
  border-radius: 50%;
  height: 40px;
  width: 40px;
  border: 5px solid rgba(255, 255, 255, 0.2);
  border-top: 5px solid ${(props) => props.theme.colors.gold};
  animation: rotate 2s linear 0s infinite;
  position: absolute;
  left: 45%;
  top: 40%;
  transform: translate(-45%, -40%);

  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }

    to {
      transform: rotate(360deg);
    }
  }
`;

export const SendButton = styled(Button)`
  width: 120px;
  height: 35px;
  margin-top: 9%;
  margin-left: 10%;
  font-size: 0.8em;

  @media only screen and (max-width: 500px) {
    margin-left: 0;
    width: 100px;
    height: 30px;
    font-size: 0.6em;
    margin-bottom: 20px;
  }
`;
