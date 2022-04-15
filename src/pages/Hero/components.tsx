import styled from 'styled-components';

export const Layout = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Heading = styled.h1`
  font-size: 3.7em;
`;

export const SecondHeading = styled.h2`
  font-size: 1.5em;
  color: ${(props) => props.theme.colors.gold};
  position: relative;
  bottom: 15px;
`;

export const MouseIcon = styled.svg`
  width: 40px;
  height: 40px;
  background-image: url(/scroll-icon.svg);
  transform: scale(0.8);
  position: absolute;
  bottom: 4%;
`;
