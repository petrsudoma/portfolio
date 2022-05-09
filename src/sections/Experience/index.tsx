import React from 'react';

import {
  GoldenText,
  LeftFlexbox,
  Flexbox,
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

      <div>
        <ExperienceImage />
      </div>
    </Flexbox>
  );
};

export default Experience;
