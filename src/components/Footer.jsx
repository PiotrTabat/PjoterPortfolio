import React from 'react';
import styled from 'styled-components';
import githubIcon from '../assets/Github-Icon.png';

const FooterContainer = styled.div`;
  min-height: 10vh;
  color: white;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 1rem 2rem;
  box-shadow: 0 -5px 15px rgba(0, 0, 0, 0.3);
  background: linear-gradient(to bottom, #333, #2C2C2C);
  border-top: 1px solid #555;
  border-bottom: 1px solid #111;
`;

const CopyrightText = styled.p`
  margin: 0;
  font-size: 1rem;
  
    @media (max-width: 768px) {
        font-size: 1rem;
    }
`;

const GithubIcon = styled.img`
  width: 35px; 
  height: auto;
  border-radius: 25px;
`;

const Footer = () => {
    return (
        <FooterContainer>
            <CopyrightText>Copyright © 2023 by Piotr Tabat</CopyrightText>
            <a href="https://github.com/PiotrTabat" target="_blank" rel="noopener noreferrer">
                <GithubIcon src={githubIcon} alt="Github Icon" />
            </a>
        </FooterContainer>
    );
};

export default Footer;
