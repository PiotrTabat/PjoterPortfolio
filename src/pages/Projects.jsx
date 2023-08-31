import React from 'react';
import styled from 'styled-components';

const ProductsContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding: 4rem;
`;

const Title = styled.h2`
  font-size: 3rem;
  font-weight: 700;
  color: #CC1111FF;
  text-align: center;
  margin-bottom: 1rem;
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  color: #2C2C2CFF;
  text-align: center;
  margin-bottom: 2rem;
`;

const ProjectTile = styled.div`
  height: 60vh;
  width: 80%;
  background-color: white;
  border-radius: 20px;
  box-shadow: 0 10px 30px -5px rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 2rem 0;

  &:nth-child(3) {
    align-self: flex-start;
  }

  &:nth-child(4) {
    align-self: flex-end;
  }

  &:nth-child(5) {
    align-self: flex-start;
  }

  &:nth-child(6) {
    align-self: flex-end;
  }
`;

const Products = () => {
    return (
        <ProductsContainer>
            <Title>Projects</Title>
            <Subtitle>Each project is another element of my education and development.</Subtitle>
            <ProjectTile>Kalkulator</ProjectTile>
            <ProjectTile>Best Shop</ProjectTile>
            <ProjectTile>Oddam w dobre ręce</ProjectTile>
            <ProjectTile>Wycieczki kosmiczne</ProjectTile>
        </ProductsContainer>
    );
};

export default Products;
