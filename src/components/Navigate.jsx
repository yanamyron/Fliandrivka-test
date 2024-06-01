import React from 'react';
import styled from 'styled-components';
import { Link, Routes, Route } from 'react-router-dom';
import Catalog from '../pages/Catalog';;
const Section = styled.section`
  width: 100vw;
  background-color: #002155;
`;

const NavBar = styled.nav`
  display: flex;
  justify-content: right;
  align-items: center;
  width: 85%;
  height: 4rem;
  margin: 0 auto;
`;

const Menu = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;
`;

const Item = styled.li`
  margin: 0 1rem;
  color: #f3eeea;
  cursor: pointer;
  position: relative;
  &::after {
    content: ' ';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0%;
    height: 2px;
    background: #f3eeea;
    transition: width 0.3s ease;
  }
  &:hover::after {
    width: 100%;
  }
`;

const StyledLink = styled(Link)`
  margin: 0 1rem;
  color: #f3eeea;
  text-decoration: none;
  cursor: pointer;
  position: relative;
  &:after {
    content: ' ';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0%;
    height: 2px;
    background: #f3eeea;
    transition: width 0.3s ease;
  }
  &:hover:after {
    width: 100%;
  }
`;

const Navigate = () => {
  const scrollTo = (id) => {
    let element = document.getElementById(id);

    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest',
    });
  };

  return (
    <>
      <Section>
        <NavBar>
          <Menu>
            <StyledLink to="/">Головна</StyledLink>
            <StyledLink to="/">Про нас</StyledLink>
            <StyledLink to="/catalog">Каталог</StyledLink>
            <StyledLink to="/">Відгуки</StyledLink>
            <StyledLink to="/">FAQ</StyledLink>
            <StyledLink to="/">Контакти</StyledLink>
          </Menu>
        </NavBar>
      </Section>
      <Routes>
        <Route path="/catalog" element={<Catalog />} />
      </Routes>
    </>
  );
};

export default Navigate;
