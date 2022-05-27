import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import {
  GoldenText,
  LargeText,
  SkillsWrapper,
  Text,
  Flexbox,
  MarginBox,
} from './components';
import OtherSkills from './OtherSkills';
import SkillsComponent from './SkillsComponent';

export type AnimationProps = {
  state: OtherSkillsState;
};

export enum OtherSkillsState {
  HIDDEN,
  SHOW,
  HIDE,
}
const Skills = () => {
  const [otherSkills, setOtherSkills] = useState<OtherSkillsState>(
    OtherSkillsState.HIDDEN
  );
  const [disabledButton, setDisabledButton] = useState<boolean>(false);

  useEffect(() => {
    AOS.init({ duration: 1300, once: true, offset: 100 });
  }, []);

  const disableButtonHandler = () => {
    setDisabledButton(true);
    setTimeout(() => setDisabledButton(false), 2000);
  };

  const setOtherSkillsHandler = () => {
    if (
      otherSkills === OtherSkillsState.HIDDEN ||
      otherSkills === OtherSkillsState.HIDE
    ) {
      disableButtonHandler();
      setOtherSkills(OtherSkillsState.SHOW);
    } else if (otherSkills === OtherSkillsState.SHOW) {
      disableButtonHandler();
      setOtherSkills(OtherSkillsState.HIDE);
    }
  };

  return (
    <MarginBox>
      <div data-aos='slide-right'>
        <LargeText>Hi.</LargeText>
        <Text>My passion is web development</Text>
        <GoldenText>is cloud computing</GoldenText>
      </div>

      <Flexbox>
        <SkillsWrapper state={otherSkills}>
          <div data-aos='slide-left'>
            <SkillsComponent
              disabledButton={disabledButton}
              otherSkillsHandler={setOtherSkillsHandler}
            />
          </div>
        </SkillsWrapper>

        <OtherSkills state={otherSkills} />
      </Flexbox>
    </MarginBox>
  );
};

export default Skills;
