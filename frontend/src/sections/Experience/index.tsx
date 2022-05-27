import React, { useEffect } from 'react';
import AOS from 'aos';

import {
  GoldenText,
  LeftFlexbox,
  Flexbox,
  WhiteText,
  ExperienceImage,
} from './components';

const Experience = () => {
  useEffect(() => {
    AOS.init({ duration: 2000, once: true });
  }, []);

  return (
    <Flexbox>
      <LeftFlexbox data-aos='fade'>
        <GoldenText>Currently studying secondary school</GoldenText>
        <WhiteText>Going to study business management at university</WhiteText>
      </LeftFlexbox>

      <div data-aos='fade'>
        <ExperienceImage />
      </div>
    </Flexbox>
  );
};

export default Experience;
