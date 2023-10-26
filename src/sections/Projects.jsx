import React from 'react';
import styled, { keyframes } from 'styled-components';
import kalkulatorImage from '../assets/Kalkulator.png'
import bestShopImage from '../assets/BestShop.png'
import oddamWDobreReceImage from '../assets/Oddam_w_Dobre_Rece.png'
import wycieczkiImage from '../assets/WycieczkiKosmiczne.png'

const gradientAnimation = keyframes`
  0% {
    background-position: 0 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0 50%;
  }
`;

const ProductsContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 4rem;
`;

const Title = styled.h2`
  font-size: 3rem;
  font-weight: 700;
  color: #CC1111FF;
  text-align: center;
  margin-bottom: 1rem;
  text-shadow: 0 3px 10px rgba(0, 0, 0, 0.3);

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  color: #2C2C2CFF;
  text-align: center;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const TilesContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  flex-wrap: nowrap;
  text-align: center;

  @media (max-width: 768px) {
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: center;
  }
`;

const ProjectTile = styled.div`
  flex: 1;
  height: 60vh;
  background-color: white;
  border-radius: 20px;
  box-shadow: 0 10px 30px -5px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  margin: 0 1rem;
  overflow: hidden;

  @media (max-width: 768px) {
    width: 100%;
    margin: 1rem 0;
    height: auto;
  }
`;

const ImageContainer = styled.div`
  flex: 2;
  overflow-y: hidden;
  transition: overflow-y 0.3s;
  img {
    width: 100%;
    height: auto;
    transform: scale(1);
    transition: transform 2s;
  }

  &:hover {
    overflow-y: scroll;
    img {
      transform: scale(1.1);  
    }
  }
`;


const DescriptionContainer = styled.div`
  flex: 1;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Description = styled.p`
  margin-bottom: 1rem;
`;

const LiveDemoButton = styled.button`
  position: relative;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 20px;
  background: linear-gradient(45deg, #0479fd, #f85806);
  background-size: 200% 200%;
  color: white;
  font-weight: bold;
  cursor: pointer;
  text-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease, transform 0.3s ease;
  overflow: hidden;

  animation: ${gradientAnimation} 3s linear infinite;

  &:hover {
    box-shadow: 0 8px 12px rgba(0, 0, 0, 0.1);
    transform: translateY(-2px);
  }

  &:active {
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transform: translateY(1px);
  }
`;

const projectData = [
    {
        image: kalkulatorImage,
        alt: "Project Kalkulator",
        description: "Just first application. Used technologies HTML, CSS, JavaScript.",
        link: "http://www.t-bat.pl/kalkulator"
    },
    {
        image: bestShopImage,
        alt: "Project BestShop",
        description: "My first workshop at school. Used technologies HTML, CSS, SCSS.",
        link: "#"
    },
    {
        image: oddamWDobreReceImage,
        alt: "Project Oddam w Dobre Rece",
        description: "My first React workshop. Used technologies React, React-Router.",
        link: "#"
    },
    {
        image: wycieczkiImage,
        alt: "Project Wycieczki Kosmiczne",
        description: "My first ever application made from scratch including both frontend and backend.",
        link: "#"
    },
];

const Products = () => {
    return (
        <ProductsContainer>
            <Title>Projects</Title>
            <Subtitle>Each project is another element of my education and development.</Subtitle>
            <TilesContainer>
                {projectData.map((project, index) => (
                    <ProjectTile key={index}>
                        <ImageContainer>
                            <img src={project.image} alt={project.alt} />
                        </ImageContainer>
                        <DescriptionContainer>
                            <Description>{project.description}</Description>
                            <LiveDemoButton
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={() => window.open(project.link, '_blank')}
                            >
                                Live Demo
                            </LiveDemoButton>
                        </DescriptionContainer>
                    </ProjectTile>
                ))}
            </TilesContainer>
        </ProductsContainer>
    );
};

export default Products;
