import styled from 'styled-components';
import {
  AiOutlineGithub,
  AiOutlineLinkedin,
  AiOutlineSolution,
} from 'react-icons/ai';

export const Flexbox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 15%;
  margin-bottom: 6%;
  padding: 0 8%;

  @media only screen and (max-width: 1020px) {
    flex-direction: column;
    margin-bottom: 15%;
  }
`;

export const SocialBox = styled.div`
  width: 350px;
  height: 450px;
  box-shadow: 0 12px 56px 9px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  align-items: center;

  @media only screen and (max-width: 1020px) {
    margin-bottom: 10%;
  }

  @media only screen and (max-width: 500px) {
    width: 70%;
    min-width: 220px;
    height: 300px;
  }
`;

export const CrownIcon = styled.svg`
  width: 120px;
  height: 120px;
  transform: scale(0.7);
  background-image: url('/crown-icon.svg');
  margin-top: 5%;

  @media only screen and (max-width: 500px) {
    transform: scale(0.5);
    margin-top: 2%;
  }
`;

export const SocialLinkWrapper = styled.div`
  width: 250px;
  margin-top: 10%;

  @media only screen and (max-width: 500px) {
    width: 100%;
    margin-top: 5%;
  }
`;

export const GitHubIcon = styled(AiOutlineGithub)`
  font-size: 2em;
  float: left;
  margin-right: 10%;

  @media only screen and (max-width: 500px) {
    font-size: 1.5em;
    margin-left: 10%;
  }
`;

export const LinkedinIcon = styled(AiOutlineLinkedin)`
  font-size: 2em;
  float: left;
  margin-right: 10%;

  @media only screen and (max-width: 500px) {
    font-size: 1.5em;
    margin-left: 10%;
  }
`;

export const CVIcon = styled(AiOutlineSolution)`
  font-size: 2em;
  float: left;
  margin-right: 10%;

  @media only screen and (max-width: 500px) {
    font-size: 1.5em;
    margin-left: 10%;
  }
`;

export const SocialLinkText = styled.p`
  float: left;
  margin-top: 7px;
  font-weight: 200;
  font-size: 0.9em;
  color: ${(props) => props.theme.colors.gold};

  @media only screen and (max-width: 500px) {
    font-size: 0.6em;
  }
`;
