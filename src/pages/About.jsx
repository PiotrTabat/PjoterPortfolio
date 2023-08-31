import React from 'react';
import styled from 'styled-components';
import Certificate1 from '../assets/Certificate1.jpeg';
import Certificate2 from '../assets/Certificate2.jpeg';
import HtmlIcon from '../assets/HtmlIcon.svg';


const AboutContainer = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 2rem;
  background-color: white;
  box-shadow: 0 -4px 10px rgba(0, 0, 0, 0.2), 0 4px 10px rgba(0, 0, 0, 0.2);
`;

const TextSection = styled.div`
  width: 50%;
  line-height: 1.5;
  margin-top: -2rem;
  `;

const Title = styled.h2`
  font-size: 3.5rem;
    font-weight: 700;
  margin-bottom: 3rem;
  color: #2c2c2c;
  text-align: center;
`;

const Text = styled.p`
  font-size: 18px;
  color: #2C2C2CFF;
`;

const ImageAndSkillsSection = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #ffffff;
  padding: 20px;
`;

const CertificateImage = styled.img`
  width: 100%;
  max-width: 200px;
  transition: transform 0.3s ease;
  margin-bottom: 20px;
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
`;

const SkillRow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;

const About = () => {
    return (
        <AboutContainer>
            <TextSection>
                <Title>About Me</Title>
                <Text>
                    Hi, I'm Piotr! I learned programming at Coders Lab, where I gained solid foundations in a range of different technologies and tools such as HTML, CSS, Gulp, SASS, Responsive Web Design, JavaScript, ECMAScript 6, React, and Node.js. I've worked on asynchronicity, events, file handling, streams, REST communication, ExpressJS, and MongoDB. I also have experience in basic CRUD operations and have worked on a project using the SCRUM methodology with Trello.
                </Text>
                <Text>
                    Outside the world of coding, I've been working for 23 years as a medical rescuer in the National Medical Rescue Team. This role has taught me many valuable skills like teamwork, stress management, and quick decision-making, which also find application in the programming world.
                </Text>
                <Text>
                    Thanks to my medical background and programming education, I am well-prepared for teamwork and working under pressure. Teamwork is not foreign to me; on the contrary, I value the opportunity for collaboration and sharing experiences.
                </Text>
                <Text>
                    I am currently taking a Three.js course and have no intention of stopping. I continually grow and explore different programming techniques to always stay updated with the latest trends and tools.
                </Text>
            </TextSection>
            <ImageAndSkillsSection>
                <SkillRow>
                    <SkillIcon src={HtmlIcon} alt="HTML" />
                    <SkillIcon src={CssIcon} alt="CSS" />
                    <CertificateImage src={Certificate1} alt="Certificate 1" />
                    <SkillIcon src={GulpIcon} alt="Gulp" />
                    <SkillIcon src={SassIcon} alt="SASS" />
                </SkillRow>

                <SkillRow>
                    <SkillIcon src={JavaScriptIcon} alt="JavaScript" />
                    <SkillIcon src={RwdIcon} alt="RwD" />
                    <CertificateImage src={Certificate2} alt="Certificate 2" />
                    <SkillIcon src={ReactIcon} alt="React" />
                    <SkillIcon src={NodeJsIcon} alt="Node.js" />
                </SkillRow>
                <Skills>
                </Skills>
            </ImageAndSkillsSection>
        </AboutContainer>
    );
};

export default About;
