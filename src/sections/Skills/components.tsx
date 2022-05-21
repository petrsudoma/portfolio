import Button from '@components/Button';

import styled from 'styled-components';

export const MarginBox = styled.div`
  margin-top: 150px;

  @media only screen and (max-width: 600px) {
    margin-top: 50px;
  }
`;

export const LargeText = styled.p`
  font-size: 3.5em;
  line-height: 0.7em;

  @media only screen and (max-width: 800px) {
    font-size: 3em;
  }

  @media only screen and (max-width: 600px) {
    font-size: 2em;
  }
`;

export const Text = styled.p`
  font-size: 1.9em;

  @media only screen and (max-width: 800px) {
    font-size: 1.5em;
  }

  @media only screen and (max-width: 600px) {
    font-size: 1.1em;
  }

  @media only screen and (max-width: 600px) {
    font-size: 1em;
  }
`;

export const GoldenText = styled.p`
  font-size: 1.9em;
  color: ${(props) => props.theme.colors.gold};
  line-height: 0.7em;
  margin-left: 202px;

  @media only screen and (max-width: 800px) {
    font-size: 1.5em;
    margin-left: 160px;
  }

  @media only screen and (max-width: 600px) {
    font-size: 1.1em;
    margin-left: 118px;
  }

  @media only screen and (max-width: 600px) {
    font-size: 1em;
    margin-left: 107px;
  }
`;

export const SkillsWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-top: 150px;
  width: 700px;
`;

export const Flexbox = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 1%;
`;

export const TouchedButton = styled(Button)`
  position: absolute;
  left: 40%;
  bottom: -50px;
  transform: translateX(-40%);

  @media only screen and (max-width: 800px) {
    left: 8%;
    transform: translateX(8%);
    width: 180px;
  }

  @media only screen and (max-width: 600px) {
    bottom: -40px;
    left: 5%;
    transform: translateX(5%);
    width: 140px;
    height: 35px;
    font-size: 0.8em;
  }
`;
