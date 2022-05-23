import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import {
  GoldenText,
  LargeText,
  SkillsWrapper,
  Text,
  Flexbox,
  TouchedButton,
  MarginBox,
  ButtonWrapper,
} from './components';
import Skill from './Skill';

const Main = () => {
  useEffect(() => {
    AOS.init({ duration: 1300, once: true, offset: 100 });
  }, []);

  return (
    <MarginBox>
      <div data-aos='slide-right'>
        <LargeText>Hi.</LargeText>
        <Text>My passion is web development</Text>
        <GoldenText>is cloud computing</GoldenText>
      </div>

      <Flexbox data-aos='slide-left'>
        <SkillsWrapper>
          <Skill progress={80}>React</Skill>
          <Skill progress={70}>Express</Skill>
          <Skill progress={60}>NestJS</Skill>
          <Skill progress={50}>Docker</Skill>
          <ButtonWrapper>
            <TouchedButton>Other skills</TouchedButton>
          </ButtonWrapper>
        </SkillsWrapper>
      </Flexbox>
    </MarginBox>
  );
};

export default Main;
