import React from 'react';
import styled from 'styled-components';

type ButtonProps = {
  children: string;
  className?: string;
  type?: 'submit' | 'button' | 'reset';
  disabled?: boolean;
  onClick?: () => void;
};
const Button: React.FC<ButtonProps> = (props) => {
  return (
    <ButtonComponent
      type={props.type}
      className={props.className}
      onClick={props.onClick}
      disabled={props.disabled}
    >
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
  background-color: transparent;
  transition: all 0.3s;
  cursor: pointer;

  :hover {
    background-color: ${(props) => props.theme.colors.gold};
    color: #252525;
  }
`;
