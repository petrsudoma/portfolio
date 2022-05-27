import type { NextPage } from 'next';
import styled from 'styled-components';

import Hero from '@sections/Hero';
import Main from '@sections/Skills';
import Experience from '@sections/Experience';
import Contact from '@sections/Contact';

const Home: NextPage = () => {
  return (
    <Wrapper>
      <Hero />

      <Layout>
        <Main />
        <Experience />
        <Contact />
      </Layout>
    </Wrapper>
  );
};

export default Home;

const Layout = styled.div`
  width: 80%;
  margin: 0 auto;
  overflow: hidden;

  @media only screen and (max-width: 1600px) {
    width: 90%;
  }
`;

const Wrapper = styled.div`
  overflow: hidden;
`;
