import type { NextPage } from 'next';

import { Heading, Layout, SecondHeading, MouseIcon } from './components';

const Hero: NextPage = () => {
  return (
    <Layout>
      <Heading>Petr Šudoma</Heading>
      <SecondHeading>Fullstack Developer</SecondHeading>
      <MouseIcon />
    </Layout>
  );
};

export default Hero;
