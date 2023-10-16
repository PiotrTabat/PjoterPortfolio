import React from 'react';
import styled from 'styled-components';
import githubIconImage from '../assets/Github-Icon.png';
import linkedInIconImage from '../assets/LinkedIn-Icon.png';

const FooterContainer = styled.div`
  min-height: 10vh;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  box-shadow: 0 -5px 15px rgba(0, 0, 0, 0.3);
  background: linear-gradient(to bottom, #333, #2C2C2C);
  border-top: 1px solid #555;
  border-bottom: 1px solid #111;
`;

const CopyrightText = styled.p`
  margin-left: 1rem;
  font-size: 1rem;
  flex-shrink: 0;

  @media (min-width: 769px) {
    margin-left: 6rem;
  }
`;

const IconsContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right: 1rem;
  flex-shrink: 0;

  @media (min-width: 769px) {
    margin-right: 6rem;
  }
`;

const IconBase = styled.img`
  width: 35px;
  height: auto;
  margin-right: 1rem;
`;

const GithubIcon = styled(IconBase)`
  border-radius: 25px;
`;

const LinkedInIcon = styled(IconBase)`
    background-color: white;
    border-radius: 5px;
`;


const Footer = () => {
    return (
        <FooterContainer>
            <CopyrightText>Copyright © 2023 by Piotr Tabat</CopyrightText>
            <IconsContainer>
                <a href="https://github.com/PiotrTabat"
                   target="_blank"
                   rel="noopener noreferrer"
                   aria-label="Link to Piotr Tabat's Github profile">
                    <GithubIcon src={githubIconImage} alt="Github Icon"/>
                </a>
                <a href="https://www.linkedin.com/in/piotr-tabat-6b8b0428b/"
                   target="_blank"
                   rel="noopener noreferrer"
                   aria-label="Link to Piotr Tabat's LinkedIn profile">
                    <LinkedInIcon src={linkedInIconImage} alt="LinkedIn Icon"/>
                </a>
            </IconsContainer>
        </FooterContainer>
    );
};

export default Footer;
