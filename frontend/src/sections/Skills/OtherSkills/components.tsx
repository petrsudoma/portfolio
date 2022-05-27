import styled from 'styled-components';

import { OtherSkillsState, AnimationProps } from '..';

export const OtherSkills = styled.ul<AnimationProps>`
  position: absolute;
  top: 70%;
  transform: translateY(-70%);
  list-style: none;
  right: -60%;

  @media only screen and (max-width: 800px) {
    top: 75%;
    transform: translateY(-75%);
  }

  @media only screen and (max-width: 600px) {
    top: 80%;
    transform: translateY(-80%);
  }

  @keyframes other-skills-animation {
    from {
      right: -60%;
    }

    to {
      right: 10%;
    }
  }

  @keyframes other-skills-animation-reverse {
    from {
      right: 10%;
    }

    to {
      right: -60%;
    }
  }

  ${(props) =>
    props.state === OtherSkillsState.SHOW
      ? `
      animation-name: other-skills-animation;
      animation-duration: 2s;
      animation-fill-mode: forwards;
      animation-timing-function: ease-out;
      `
      : props.state === OtherSkillsState.HIDE
      ? `
      animation-name: other-skills-animation-reverse;
      animation-duration: 2s;
      animation-fill-mode: forwards;
      animation-timing-function: ease-out;
      `
      : null};
`;

export const OtherSkill = styled.li`
  color: #fff;
  font-size: 1.1em;
  margin-bottom: 15px;

  @media only screen and (max-width: 800px) {
    font-size: 1em;
  }

  @media only screen and (max-width: 600px) {
    font-size: 0.6em;
    bottom: 6px;
  }
`;
