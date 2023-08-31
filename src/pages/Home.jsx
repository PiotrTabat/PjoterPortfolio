import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapPin } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import homeImage from '../assets/HomeImage.jpeg';


const HomeContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem;
  height: 100vh; 

  @media (max-width: 768px) {
    flex-direction: column;
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
  box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);  
`;


const TextContainer = styled.div`
  flex: 1;
  padding: 1rem;
`;

const Title = styled.h1`
  font-size: 4rem;
  font-weight: bold;
  margin-bottom: 4rem;
  text-align: center;
`;

const SubTitle = styled.p`
  font-size: 1.5rem;
  margin-left: 1.5rem;
  
`;

const PinIcon = styled(FontAwesomeIcon)`
  cursor: pointer;
  margin-left: 0.5rem;
  color: #cb1515;
`;

const GithubIcon = styled(FontAwesomeIcon)`
  cursor: pointer;
  margin-left: 1.5rem;
  font-size: 2.5rem;  
  margin-top: 2rem;
`;

const openGithub = () => {
    window.open('https://github.com/PiotrTabat', '_blank');  // Zamień 'your_username' na twoją nazwę użytkownika na GitHub
};



const openMap = () => {
    window.open('https://www.google.com/maps?q=Radzymin,+Poland', '_blank');
};

const Home = () => {
    return (
        <HomeContainer>
            <ImageContainer>
                <Image src={homeImage} alt="Home" />
            </ImageContainer>
            <TextContainer>
                <Title>Full-Stack Developer</Title>
                <SubTitle>
                    Hi, I'm Piotr Tabat. I'm a Full-Stack Developer living in Radzymin, Poland.
                    <PinIcon icon={faMapPin} onClick={openMap} />
                </SubTitle>
                <GithubIcon icon={faGithub} onClick={openGithub} />
            </TextContainer>
        </HomeContainer>
    );
};

export default Home;
