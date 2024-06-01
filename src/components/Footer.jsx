import React from 'react';
import styled from 'styled-components';
import Facebook from '../Icons/Facebook.js'
import Instagram from '../Icons/Instagram.js'
import LinkedIn from '../Icons/LinkedIn.js'
import Catalog from '../pages/Catalog.jsx';
import { Link, Routes, Route } from 'react-router-dom';

const SectionFooter= styled.section`
  min-height: 30vh;
  width: 100%;
  background-color:#002155;
  color:#F3EEEA;
  position: relative;
  display: flex;
  flex-direction: column; 
`
const ContainerF = styled.div`
width:75%;
margin 2rem;
display:flex;
justify-content:space-between;
align-items:center;

`
const LeftCol = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
`
const IconList = styled.div`
display:flex;
align-items:center;
margin:1rem auto;

&>*{
    padding-right:0.5rem;
    transition:all 0.2s ease;
    
    &:hover{
        transform:scale(1.2);
    }
}
`
const MenuItems = styled.ul`
list-style:none;
width:50%;
display:grid;
grid-template-columns: repeat(5, 1fr); 
grid-template-rows: auto; 
grid-gap: 0 1rem;
align-items:center;
buttom:0;
padding: 0 2rem;
`
const Item = styled.li`
width:fit-content;
cursor:pointer;


&::after{
    content:' ';
    display:block;
    width:0%;
    height:2px;
    background:#F3EEEA;
    transition: width 0.3s ease;
}
&:hover::after{
    width:100%;

}
`
const CopyRight = styled.div`
width:95%;
margin:0 auto;
dispaly:flex;
align-items:left;

`

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

const Footer = () => {
    const scrollTo = (id) =>{
        let element = document.getElementById(id);

        element.scrollIntoView({
            behavior: 'smooth',
            block:'start',
            inline:'nearest'
        })
    }
    return (
        <>
        <SectionFooter id="foot">
            <ContainerF>
                <LeftCol>
                    <IconList>
                        <a href="http://facebook.com" target='_blank'
                        rel="noopener"><Facebook/>
                        </a>
                        <a href="http://instagram.com" target='_blank'
                        rel="noopener"><Instagram/>
                        </a>
                        <a href="http://linkedin.com" target='_blank'
                        rel="noopener"><LinkedIn/>
                        </a>
                    </IconList>
                </LeftCol>
<MenuItems>
<Item onClick={() => scrollTo('home')}>Головна</Item>
<Item onClick={() => scrollTo('about')}>Про нас</Item>
<StyledLink to="/catalog">Каталог</StyledLink>
<Item onClick={() => scrollTo('reviews')}>Відгуки</Item>
<Item onClick={() => scrollTo('faq')}>FAQ</Item>
</MenuItems>
            </ContainerF>
<CopyRight>
    
</CopyRight>
        </SectionFooter>
        <Routes>
        <Route path="/catalog" element={<Catalog />} />
      </Routes></>
      )
};

export default Footer;