import type { NextPage } from 'next';

import {
  Heading,
  Layout,
  SecondHeading,
  MouseIcon,
  HeadingsWrapper,
} from './components';

const Hero: NextPage = () => {
  return (
    <Layout>
      <HeadingsWrapper>
        <Heading>Petr Šudoma</Heading>
        <SecondHeading>Fullstack Developer</SecondHeading>
      </HeadingsWrapper>
      <MouseIcon />
    </Layout>
  );
};

export default Hero;
