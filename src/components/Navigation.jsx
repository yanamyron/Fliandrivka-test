import React from 'react';
import styled from 'styled-components';
import { Link, Routes, Route } from 'react-router-dom';
import Catalog from '../pages/Catalog';

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

const Navigation = () => {
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
            <Item onClick={() => scrollTo('home')}>Головна</Item>
            <Item onClick={() => scrollTo('about')}>Про нас</Item>
            <StyledLink to="/catalog">Каталог</StyledLink>
            <Item onClick={() => scrollTo('reviews')}>Відгуки</Item>
            <Item onClick={() => scrollTo('faq')}>FAQ</Item>
            <Item onClick={() => scrollTo('foot')}>Контакти</Item>
          </Menu>
        </NavBar>
      </Section>
      <Routes>
        <Route path="/catalog" element={<Catalog />} />
      </Routes>
    </>
  );
};

export default Navigation;