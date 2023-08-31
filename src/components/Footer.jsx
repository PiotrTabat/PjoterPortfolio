import React from 'react';
import styled from 'styled-components';
import githubIcon from '../assets/Github-Icon.png';

const FooterContainer = styled.div`
  background-color: #2C2C2C;
  min-height: 10vh;
  color: white; 
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 1rem 2rem; 
`;

const CopyrightText = styled.p`
  margin: 0;
  font-size: 1.2rem;
`;

const GithubIcon = styled.img`
  width: 40px; 
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
