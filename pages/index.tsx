import type { NextPage } from 'next';
import styled from 'styled-components';

import Hero from '@sections/Hero';
import Main from '@sections/Main';
import Experience from '@sections/Experience';

const Home: NextPage = () => {
  return (
    <>
      <Hero />

      <Layout>
        <Main />
        <Experience />
      </Layout>
    </>
  );
};

export default Home;

export const Layout = styled.div`
  width: 80%;
  margin: 0 auto;
`;
