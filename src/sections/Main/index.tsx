import React from 'react';

import {
  GoldenText,
  LargeText,
  Layout,
  SkillsWrapper,
  Text,
} from './components';
import Skill from './Skill';

const Main = () => {
  return (
    <Layout>
      <LargeText>Hi.</LargeText>
      <Text>My passion is web development</Text>
      <GoldenText>is cloud computing</GoldenText>

      <SkillsWrapper>
        <Skill progress={90}>HTML, CSS, JS</Skill>
        <Skill progress={80}>React</Skill>
        <Skill progress={60}>NestJS</Skill>
        <Skill progress={50}>Express</Skill>
      </SkillsWrapper>
    </Layout>
  );
};

export default Main;
