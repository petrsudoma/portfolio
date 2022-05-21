import React, { useEffect } from 'react';
import AOS from 'aos';

import {
  Flexbox,
  SocialBox,
  CrownIcon,
  SocialLinkWrapper,
  GitHubIcon,
  SocialLinkText,
  LinkedinIcon,
  CVIcon,
} from './components';
import Form from './Form';

const Contact = () => {
  useEffect(() => {
    AOS.init({ duration: 1300, once: true });
  }, []);

  return (
    <Flexbox data-aos='fade-up'>
      <SocialBox>
        <CrownIcon />
        <SocialLinkWrapper>
          <GitHubIcon fill='#fae100' />
          <SocialLinkText>Checkout my code</SocialLinkText>
        </SocialLinkWrapper>

        <SocialLinkWrapper>
          <LinkedinIcon fill='#fae100' />
          <SocialLinkText>Look at my profile</SocialLinkText>
        </SocialLinkWrapper>

        <SocialLinkWrapper>
          <CVIcon fill='#fae100' />
          <SocialLinkText>Get my CV</SocialLinkText>
        </SocialLinkWrapper>
      </SocialBox>

      <Form></Form>
    </Flexbox>
  );
};

export default Contact;
