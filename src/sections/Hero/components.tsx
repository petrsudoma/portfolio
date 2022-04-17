import styled from 'styled-components';

export const Layout = styled.div`
  height: 100vh;
  min-height: -webkit-fill-available;
`;

export const HeadingsWrapper = styled.div`
  width: 100%;
  text-align: center;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

export const Heading = styled.h1`
  font-size: 3.7em;

  @media only screen and (max-width: 540px) {
    font-size: 2.5em;
  }
`;

export const SecondHeading = styled.h2`
  font-size: 1.5em;
  color: ${(props) => props.theme.colors.gold};
  position: relative;
  bottom: 15px;

  @media only screen and (max-width: 540px) {
    font-size: 1.2em;
    bottom: 5px;
  }
`;

export const MouseIcon = styled.svg`
  width: 40px;
  height: 40px;
  background-image: url(/scroll-icon.svg);
  position: absolute;
  bottom: 4%;
  left: 50%;
  transform: translate(-50%, 4%) scale(0.8);
  animation-name: animation;
  animation-duration: 4s;
  animation-iteration-count: infinite;

  @keyframes animation {
    50% {
      bottom: 2%;
    }

    100% {
      bottom: 4%;
    }
  }
`;
