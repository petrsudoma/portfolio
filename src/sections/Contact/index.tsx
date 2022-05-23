import React, { useEffect } from 'react';
import AOS from 'aos';
import Link from 'next/link';

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
          <Link href='https://github.com/petrsudoma'>
            <a target='_blank'>
              <GitHubIcon fill='#fae100' />
              <SocialLinkText>Checkout my code</SocialLinkText>
            </a>
          </Link>
        </SocialLinkWrapper>

        <SocialLinkWrapper>
          <Link href='https://www.linkedin.com/in/petr-sudoma/'>
            <a target='_blank'>
              <LinkedinIcon fill='#fae100' />
              <SocialLinkText>Look at my profile</SocialLinkText>
            </a>
          </Link>
        </SocialLinkWrapper>

        <SocialLinkWrapper>
          <Link href='/cv'>
            <a target='_blank'>
              <CVIcon fill='#fae100' />
              <SocialLinkText>Get my CV</SocialLinkText>
            </a>
          </Link>
        </SocialLinkWrapper>
      </SocialBox>

      <Form></Form>
    </Flexbox>
  );
};

export default Contact;
