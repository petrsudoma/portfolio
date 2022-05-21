import React from 'react';

import {
  GoldenText,
  LargeText,
  SkillsWrapper,
  Text,
  Flexbox,
  TouchedButton,
  MarginBox,
} from './components';
import Skill from './Skill';

const Main = () => {
  return (
    <MarginBox>
      <LargeText>Hi.</LargeText>
      <Text>My passion is web development</Text>
      <GoldenText>is cloud computing</GoldenText>

      <Flexbox>
        <SkillsWrapper>
          <Skill progress={80}>React</Skill>
          <Skill progress={70}>Express</Skill>
          <Skill progress={60}>NestJS</Skill>
          <Skill progress={50}>Docker</Skill>
          <TouchedButton>Other skills</TouchedButton>
        </SkillsWrapper>
      </Flexbox>
    </MarginBox>
  );
};

export default Main;
