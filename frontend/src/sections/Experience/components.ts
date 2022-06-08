import styled from 'styled-components';

export const Flexbox = styled.div`
  margin-top: 200px;
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 1120px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;

export const LeftFlexbox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const GoldenText = styled.p`
  font-size: 1.5em;
  color: ${(props) => props.theme.colors.gold};
  line-height: 1em;

  @media only screen and (max-width: 620px) {
    font-size: 1.2em;
  }

  @media only screen and (max-width: 500px) {
    font-size: 0.9em;
  }
`;

export const WhiteText = styled.p`
  font-size: 1.3em;

  @media only screen and (max-width: 620px) {
    font-size: 1em;
  }

  @media only screen and (max-width: 500px) {
    font-size: 0.8em;
  }
`;

export const ExperienceImage = styled.svg`
  width: 560px;
  height: 230px;
  background-image: url(/experience.svg);
  transform: scale(0.8);

  @media only screen and (max-width: 1120px) {
    margin-top: 100px;
  }

  @media only screen and (max-width: 600px) {
    transform: scale(0.6);
  }

  @media only screen and (max-width: 500px) {
    transform: scale(0.5);
  }
`;
