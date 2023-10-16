import React from 'react';
import styled from 'styled-components';
import mapIcon from '../assets/Map-Icon.png';
import mailIcon from '../assets/Email-Icon.png';

const ContactContainer = styled.div`
  min-height: 75vh;
  width: 100%;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  box-shadow: 0 -4px 10px rgba(0, 0, 0, 0.2), 0 4px 10px rgba(0, 0, 0, 0.2);
`;

const Title = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  color: #4040f5;
  margin-top: 2rem;
  text-shadow: 0 3px 10px rgba(0, 0, 0, 0.3);

  @media (min-width: 768px) {
    font-size: 3rem;
    margin-top: 5rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1rem;
  width: 90%;
  color: #2C2C2CFF;
  margin-bottom: 1rem;

  @media (min-width: 768px) {
    font-size: 1.2rem;
    width: 60%;
  }
`;

const IconContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  width: 100%;
  margin-bottom: 2rem;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
    gap: 15rem;
    margin-bottom: 5rem;
  }
`;

const IconInfo = styled.div`
  display: flex;
  align-items: center;
`;

const Icon = styled.img`
  width: 50px;
  height: 50px;
  margin-right: 10px;

  &:hover {
    transform: scale(1.1);
  }

  @media (min-width: 768px) {
    width: 70px;
    height: 70px;
    margin-right: 20px;
  }
`;

const VisuallyHidden = styled.span`
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
`;

const ContactText = styled.p`
  font-size: 1rem;
  text-shadow: 0 3px 10px rgba(0, 0, 0, 0.3);
`;

const Contact = () => {
    return (
        <ContactContainer>
            <Title>Contact</Title>
            <Subtitle> Interested in collaborating, have questions, or simply want to learn more about my skills and experience?
                Get in touch! I value open communication and believe that together, we can achieve something great.</Subtitle>
            <IconContainer>
                <IconInfo>
                    <a href="https://www.google.com/maps/search/?api=1&query=Radzymin,Polska" target="_blank" rel="noopener noreferrer">
                        <Icon src={mapIcon} alt="Map Icon" />
                        <VisuallyHidden>Open Radzymin, Polska on Google Maps</VisuallyHidden>
                    </a>
                    <ContactText>Radzymin, Polska</ContactText>
                </IconInfo>
                <IconInfo>
                    <a href="mailto:piotr.tabat1@gmail.com" target="_blank" rel="noopener noreferrer">
                        <Icon src={mailIcon} alt="Mail Icon" />
                        <VisuallyHidden>Email Piotr Tabat</VisuallyHidden>
                    </a>
                    <ContactText>piotr.tabat1@gmail.com</ContactText>
                </IconInfo>
            </IconContainer>
        </ContactContainer>
    );
};

export default Contact;
