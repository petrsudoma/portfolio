import React from 'react';

import { OtherSkills as OtherSkillsComponent, OtherSkill } from './components';
import { OtherSkillsState } from '..';

type OtherSkillsProps = {
  state: OtherSkillsState;
};
const OtherSkills: React.FC<OtherSkillsProps> = (props) => {
  return (
    <OtherSkillsComponent state={props.state}>
      <OtherSkill>AWS</OtherSkill>
      <OtherSkill>NestJS</OtherSkill>
      <OtherSkill>PostgreSQL</OtherSkill>
      <OtherSkill>Linux</OtherSkill>
    </OtherSkillsComponent>
  );
};

export default OtherSkills;
