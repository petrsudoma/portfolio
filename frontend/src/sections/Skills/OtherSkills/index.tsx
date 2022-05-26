import React from 'react';

import { OtherSkills as OtherSkillsComponent, OtherSkill } from './components';
import { OtherSkillsState } from '..';

type OtherSkillsProps = {
  state: OtherSkillsState;
};
const OtherSkills: React.FC<OtherSkillsProps> = (props) => {
  return (
    <OtherSkillsComponent state={props.state}>
      <OtherSkill>Test</OtherSkill>
      <OtherSkill>Test</OtherSkill>
      <OtherSkill>Test</OtherSkill>
      <OtherSkill>Test</OtherSkill>
    </OtherSkillsComponent>
  );
};

export default OtherSkills;
