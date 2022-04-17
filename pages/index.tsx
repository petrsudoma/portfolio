import type { NextPage } from 'next';

import Hero from '@sections/Hero';
import Main from '@sections/Main';

const Home: NextPage = () => {
  return (
    <>
      <Hero />
      <Main />
    </>
  );
};

export default Home;
