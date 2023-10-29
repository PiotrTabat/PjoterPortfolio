import React from 'react';
import styled, { keyframes } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapPin } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import homeImage from '../assets/HomeImage.jpeg';

const tiltAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  25% {
    transform: rotate(10deg);
  }
  75% {
    transform: rotate(-10deg);
  }
  100% {
    transform: rotate(0deg);
  }
`;

const bounceAnimation = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-2px);
  }
`;

const HomeContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem;
  min-height: 100vh;

  @media (max-width: 768px) {
    flex-direction: column;
    margin-top: 4rem;
  }
`;

const ImageContainer = styled.div`
  flex: 1;
  padding: 1rem;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  border-radius: 20px;
  box-shadow: 0 3px 15px 7px rgba(0, 0, 0, 0.3);
`;

const TextContainer = styled.div`
  flex: 1;
  padding: 1rem;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  color: #cb1515;
  margin-bottom: 4rem;
  text-align: center;
  text-shadow: 0 3px 10px rgba(0, 0, 0, 0.3);
`;

const SubTitle = styled.div`
  font-size: 1.2rem;
  text-align: center;
`;

const SubTitle2 = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 2rem;
  text-align: center;
`;

const PinIcon = styled(FontAwesomeIcon)`
  cursor: pointer;
  margin-left: 1rem;
  color: #cb1515;
  animation: ${bounceAnimation} 0.6s infinite;

  &:hover {
    transform: scale(1.5);
  }
`;

const SocialIconBase = styled(FontAwesomeIcon)`
  width: 30px;
  height: auto;
  cursor: pointer;
  margin-top: 2rem;
  margin-left: 1rem;
  transform: scale(0.9);

  &:hover {
    transform: scale(2);
    animation: ${tiltAnimation} 2s infinite;
  }

  @media (min-width: 769px) {
    width: 40px;
    height: auto;
  }
`;

const GithubIcon = styled(SocialIconBase)`
  @media (min-width: 769px) {
    margin-left: 5rem;
    margin-bottom: 0.2rem;
  }
`;

const LinkedinIcon = styled(SocialIconBase)``;

const openURLInNewTab = (url) => {
    window.open(url, '_blank');
};

const Home = () => {
    return (
        <HomeContainer>
            <ImageContainer>
                <Image src={homeImage} loading={"lazy"} alt="Piotr Tabat, Full-Stack Developer"/>
            </ImageContainer>
            <TextContainer>
                <Title>Full-Stack Developer</Title>
                <SubTitle>
                    <SubTitle2>
                        Hi, I'm Piotr Tabat.
                    </SubTitle2>
                    I'm a Full-Stack Developer living in Radzymin, Poland.
                    <PinIcon icon={faMapPin} onClick={() => openURLInNewTab('https://www.google.com/maps?q=Radzymin,+Poland')}/>
                </SubTitle>
                <GithubIcon icon={faGithub} onClick={() => openURLInNewTab('https://github.com/PiotrTabat')}/>
                <LinkedinIcon icon={faLinkedin} onClick={() => openURLInNewTab('https://www.linkedin.com/in/piotr-tabat-6b8b0428b/')}/>
            </TextContainer>
        </HomeContainer>
    );
};

export default Home;
