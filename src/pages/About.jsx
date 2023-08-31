import React from 'react';
import styled from 'styled-components';
import Certificate1 from '../assets/Certificate1.jpeg';
import Certificate2 from '../assets/Certificate2.jpeg';
import HtmlIcon from '../assets/HTML-Logo.svg';
import GulpIcon from '../assets/Gulp-Logo.svg';
import SassIcon from '../assets/Sass-Logo.svg';
import JavaScriptIcon from '../assets/JavaScript-Logo.svg';
import ReactIcon from '../assets/React-Logo.svg';
import NodeJsIcon from '../assets/NodeJS-Logo.svg';
import MongoDbIcon from '../assets/MongoDB-Logo.svg';
import ES6Icon from '../assets/ES6-Logo.svg';
import ExpressIcon from '../assets/ExpressJS-Logo.svg';

const AboutContainer = styled.div`
  min-height: 100vh;  
  display: flex;
  flex-direction: column; 
  align-items: center;
  justify-content: space-around;
  padding: 2rem;
  background-color: white;
  box-shadow: 0 -4px 10px rgba(0, 0, 0, 0.2), 0 4px 10px rgba(0, 0, 0, 0.2);
  overflow: auto;  

  @media (min-width: 768px) {
    flex-direction: row; 
  }
`;

const TextSection = styled.div`
  width: 90%;
  line-height: 1.5;
  margin-top: -2rem;

  @media (min-width: 768px) {
    width: 50%;
    margin-top: 0;
  }
`;

const Title = styled.h2`
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 2rem;
  color: #2c2c2c;
  text-align: center;
`;

const Text = styled.p`
  font-size: 18px;
  color: #2C2C2CFF;
  word-wrap: break-word;
`;

const ImageAndSkillsSection = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #ffffff;
  padding: 20px;
  margin-top: 1rem;

  @media (min-width: 768px) {
    width: 40%;
    margin-top: 0;
  }
`;

const CertificateImage = styled.img`
  width: 100%;
  max-width: 200px;
  transition: transform 0.3s ease;
  border-radius: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);

  &:hover {
    transform: scale(2.2);
  }
`;

const Skills = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 20px;
`;

const SkillIcon = styled.img`
  width: 24px;
  height: 24px;
  margin: 0 5px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
`;

const SkillRow = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  margin-bottom: 20px;
`;


const About = () => {
    return (
        <AboutContainer>
            <TextSection>
                <Title>About Me</Title>
                <Text>
                    Hi, I'm Piotr! I learned programming at Coders Lab, where I gained solid foundations in a range of
                    different technologies and tools such as HTML, CSS, Gulp, SASS, Responsive Web Design, JavaScript,
                    ECMAScript 6, React, and Node.js. I've worked on asynchronicity, events, file handling, streams,
                    REST communication, ExpressJS, and MongoDB. I also have experience in basic CRUD operations and have
                    worked on a project using the SCRUM methodology with Trello.
                </Text>
                <Text>
                    Outside the world of coding, I've been working a medical rescuer in the National
                    Medical Rescue Team. This role has taught me many valuable skills like teamwork, stress management,
                    and quick decision-making, which also find application in the programming world.
                </Text>
                <Text>
                    Thanks to my medical background and programming education, I am well-prepared for teamwork and
                    working under pressure. Teamwork is not foreign to me; on the contrary, I value the opportunity for
                    collaboration and sharing experiences.
                </Text>
                <Text>
                    I am currently taking a Three.js course and have no intention of stopping. I continually grow and
                    explore different programming techniques to always stay updated with the latest trends and tools.
                </Text>
            </TextSection>
            <ImageAndSkillsSection>
                <SkillRow>
                    <CertificateImage src={Certificate1} alt="Certificate 1"/>
                    <SkillIcon src={HtmlIcon} alt="HTML"/>
                    <SkillIcon src={SassIcon} alt="SASS"/>
                    <SkillIcon src={ES6Icon} alt="ES6"/>
                    <SkillIcon src={JavaScriptIcon} alt="JavaScript"/>
                    <SkillIcon src={ReactIcon} alt="React"/>
                    <SkillIcon src={GulpIcon} alt="Gulp"/>

                </SkillRow>
                <SkillRow>
                    <SkillIcon src={NodeJsIcon} alt="Node.js"/>
                    <SkillIcon src={MongoDbIcon} alt="MongoDB"/>
                    <SkillIcon src={ExpressIcon} alt="Express"/>
                    <CertificateImage src={Certificate2} alt="Certificate 2"/>
                </SkillRow>
                <Skills>
                </Skills>
            </ImageAndSkillsSection>
        </AboutContainer>
    );
};

export default About;
