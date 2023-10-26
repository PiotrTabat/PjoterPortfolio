import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-scroll';

const Header = styled.header`
  background-color: white;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: auto;
  padding: 1.5rem;
`;

const Logo = styled.div`
  font-size: 2rem;
  font-weight: bold;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 1.5rem;

  @media (max-width: 768px) {
    display: none;
  }
`;

const Button = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.5rem;
  

  &:active {
    opacity: 0.2; 
  }
`;

const MobileMenuButton = styled(Button)`
  @media (min-width: 769px) {
    display: none;
  }
`;

const MobileMenu = styled.div`
  position: fixed;
  top: 30px;
  right: 0;
  width: 200px;
  height: auto;
  background-color: white;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  transform: ${({ isOpen }) => (isOpen ? 'translateX(0)' : 'translateX(100%)')};
  transition: transform 0.3s ease-in-out;
  z-index: 1;
`;

const StyledLink = styled(Link)`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.5rem;
  text-decoration: none;
  color: inherit;

  &:active {
    opacity: 0.2;
  }
`;

const Nav = () => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <>
            <Header>
                <Container>
                    <Logo>T-Bat.dev</Logo>
                    <NavLinks>
                        <StyledLink to="home" smooth={true} duration={500}>Home</StyledLink>
                        <StyledLink to="about" smooth={true} duration={500}>About</StyledLink>
                        <StyledLink to="projects" smooth={true} duration={500}>Projects</StyledLink>
                        <StyledLink to="contact" smooth={true} duration={500}>Contact</StyledLink>
                    </NavLinks>
                    <MobileMenuButton onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}>
                        ☰
                    </MobileMenuButton>
                </Container>
            </Header>
            <MobileMenu isOpen={isMobileMenuOpen}>
                <Button onClick={() => setMobileMenuOpen(false)}>Close</Button>
                <StyledLink to="home" smooth={true} duration={500}>Home</StyledLink>
                <StyledLink to="about" smooth={true} duration={500}>About</StyledLink>
                <StyledLink to="projects" smooth={true} duration={500}>Projects</StyledLink>
                <StyledLink to="contact" smooth={true} duration={500}>Contact</StyledLink>
            </MobileMenu>
        </>
    );
};

export default Nav;
