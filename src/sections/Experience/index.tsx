import React from 'react';

import {
  GoldenText,
  LeftFlexbox,
  Flexbox,
  RightFlexbox,
  WhiteText,
  ExperienceImage,
} from './components';

const Experience = () => {
  return (
    <Flexbox>
      <LeftFlexbox>
        <GoldenText>Currently studying secondary school</GoldenText>
        <WhiteText>Going to study business management at university</WhiteText>
      </LeftFlexbox>

      <RightFlexbox>
        <ExperienceImage />
      </RightFlexbox>
    </Flexbox>
  );
};

export default Experience;
