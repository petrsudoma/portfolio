import React from 'react';

import {
  Skill as SkillComponent,
  SkillLine,
  SkillText,
  ButtonWrapper,
  TouchedButton,
} from './components';

type SkillProps = {
  progress: number;
  children: string;
};
const Skill: React.FC<SkillProps> = (props) => {
  return (
    <SkillComponent>
      <SkillLine progress={props.progress} />
      <SkillText>{props.children}</SkillText>
    </SkillComponent>
  );
};

type SkillsProps = {
  otherSkillsHandler: () => void;
  disabledButton: boolean;
};
const SkillsComponent: React.FC<SkillsProps> = (props) => {
  return (
    <>
      <Skill progress={80}>React</Skill>
      <Skill progress={70}>Express</Skill>
      <Skill progress={60}>Python</Skill>
      <Skill progress={50}>Docker</Skill>
      <ButtonWrapper>
        <TouchedButton
          onClick={props.otherSkillsHandler}
          disabled={props.disabledButton}
        >
          Other skills
        </TouchedButton>
      </ButtonWrapper>
    </>
  );
};

export default SkillsComponent;
