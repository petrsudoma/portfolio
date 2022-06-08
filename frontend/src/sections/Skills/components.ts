import styled from 'styled-components';

import { OtherSkillsState, AnimationProps } from '.';

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

export const SkillsWrapper = styled.div<AnimationProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 150px;
  width: 800px;

  @keyframes skills-animation {
    from {
      transform: translateX(0);
    }

    to {
      transform: translateX(-25%);
    }
  }

  @keyframes skills-animation-reverse {
    from {
      transform: translateX(-25%);
    }

    to {
      transform: translateX(0);
    }
  }

  ${(props) =>
    props.state === OtherSkillsState.SHOW
      ? `
      animation: skills-animation 2s ease-out 0s forwards;
      `
      : props.state === OtherSkillsState.HIDE
      ? `
      animation: skills-animation-reverse 2s ease-out 0s forwards;
      `
      : null};
`;

export const Flexbox = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 1%;
  position: relative;
`;
