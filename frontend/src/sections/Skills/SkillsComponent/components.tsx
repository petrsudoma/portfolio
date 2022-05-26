import styled from 'styled-components';

import Button from '@components/Button';

export const Skill = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 15px;
  position: relative;
  width: 100%;
`;

type SkillLineProps = {
  progress: number;
};
export const SkillLine = styled.div<SkillLineProps>`
  height: 5px;
  width: 400px;
  background-color: #beab00;

  &:before {
    content: '';
    display: block;
    width: ${(props) => props.progress}%;
    height: 5px;
    background-color: ${(props) => props.theme.colors.gold};
  }

  @media only screen and (max-width: 800px) {
    width: 300px;
  }

  @media only screen and (max-width: 600px) {
    width: 250px;
  }

  @media only screen and (max-width: 400px) {
    width: 200px;
  }
`;

export const SkillText = styled.p`
  color: ${(props) => props.theme.colors.gold};
  font-size: 1.1em;
  position: relative;
  bottom: 13px;
  left: 50px;
  width: 100px;

  @media only screen and (max-width: 800px) {
    font-size: 1em;
  }

  @media only screen and (max-width: 600px) {
    font-size: 0.8em;
  }

  @media only screen and (max-width: 600px) {
    font-size: 0.6em;
    bottom: 6px;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;

export const TouchedButton = styled(Button)`
  margin-right: 70px;

  @media only screen and (max-width: 800px) {
    width: 130px;
    height: 35px;
    font-size: 0.8em;
  }

  @media only screen and (max-width: 600px) {
    width: 100px;
    height: 30px;
    font-size: 0.6em;
  }
`;
