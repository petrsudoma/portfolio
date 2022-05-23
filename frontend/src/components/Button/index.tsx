import React from 'react';
import styled from 'styled-components';

type ButtonProps = {
  children: string;
  className?: string;
};
const Button: React.FC<ButtonProps> = (props) => {
  return (
    <ButtonComponent className={props.className}>
      {props.children}
    </ButtonComponent>
  );
};

export default Button;

const ButtonComponent = styled.button`
  border: 1px solid ${(props) => props.theme.colors.gold};
  width: 180px;
  height: 45px;
  border-radius: 30px;
  color: ${(props) => props.theme.colors.gold};
  font-weight: 200;
  font-size: 0.9em;
`;
