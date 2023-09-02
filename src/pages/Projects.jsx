import React from 'react';
import styled from 'styled-components';

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
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  color: #2C2C2CFF;
  text-align: center;
  margin-bottom: 2rem;
`;

const TilesContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  flex-wrap: nowrap;
`;

const ProjectTile = styled.div`
  flex: 1;
  height: 60vh;
  background-color: white;
  border-radius: 20px;
  box-shadow: 0 10px 30px -10px rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 1rem;
`;

const Products = () => {
    return (
        <ProductsContainer>
            <Title>Projects</Title>
            <Subtitle>Each project is another element of my education and development.</Subtitle>
            <TilesContainer>
                <ProjectTile>Kalkulator</ProjectTile>
                <ProjectTile>Best Shop</ProjectTile>
                <ProjectTile>Oddam w dobre ręce</ProjectTile>
                <ProjectTile>Wycieczki kosmiczne</ProjectTile>
            </TilesContainer>
        </ProductsContainer>
    );
};

export default Products;
