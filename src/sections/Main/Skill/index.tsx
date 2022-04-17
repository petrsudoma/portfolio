import React from 'react';

import { Skill as SkillComponent, SkillLine, SkillText } from './components';

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

export default Skill;
