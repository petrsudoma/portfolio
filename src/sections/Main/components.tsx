import styled from 'styled-components';

export const Layout = styled.div`
  width: 80%;
  margin: 0 auto;
  margin-top: 150px;
`;

export const LargeText = styled.p`
  font-size: 3.5em;
  line-height: 0.7em;

  @media only screen and (max-width: 800px) {
    font-size: 3em;
  }

  @media only screen and (max-width: 600px) {
    font-size: 2em;
  }
`;

export const Text = styled.p`
  font-size: 1.9em;

  @media only screen and (max-width: 800px) {
    font-size: 1.5em;
  }

  @media only screen and (max-width: 600px) {
    font-size: 1.1em;
  }

  @media only screen and (max-width: 600px) {
    font-size: 1em;
  }
`;

export const GoldenText = styled.p`
  font-size: 1.9em;
  color: ${(props) => props.theme.colors.gold};
  line-height: 0.7em;
  margin-left: 202px;

  @media only screen and (max-width: 800px) {
    font-size: 1.5em;
    margin-left: 160px;
  }

  @media only screen and (max-width: 600px) {
    font-size: 1.1em;
    margin-left: 118px;
  }

  @media only screen and (max-width: 600px) {
    font-size: 1em;
    margin-left: 107px;
  }
`;

export const SkillsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-top: 150px;
`;
