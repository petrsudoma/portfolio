import React from 'react';

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

const Contact = () => {
  return (
    <Flexbox>
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
    </Flexbox>
  );
};

export default Contact;
