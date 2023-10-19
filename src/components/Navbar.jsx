import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'

const Section = styled.div`
    display: flex;
    justify-content: center;
    width: 100%; 
    background: white;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const Container = styled.div`
    position: relative;
    width: 1200px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px 0px;

    @media only screen and (max-width: 1000px) {
        width: 100%; 
        padding: 5px 10px;
        justify-content: space-between;
    }
`;

const Links = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;

    & > * {
        flex: 1;
        display: flex;
        justify-content: center;
    }
`;

const Logo = styled.img`
    cursor: pointer;
    height: 100px;
`;

const List = styled.ul`
    font-size: 14px;
    margin-bottom: 0;
    text-transform: uppercase;
    display: flex;
    gap: 40px;
    list-style: none;
    align-items: center;
    justify-content: ${props => props.align === 'end' ? 'flex-end' : 'flex-start'};
    
    @media only screen and (max-width: 1000px) {
        display: none;
    }
`;

const ListItem = styled.li`
    cursor: pointer;
    position: relative;
    padding: 5px 10px;
    transition: background-color 0.2s;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;  
    font-weight: ${props => props.isHovered ? 'bold' : 'normal'};
`;

const Navbar = () => {
    return (
      <Section>
          <Container>
              <Links>
                  <List align="start">
                      <ListItem>Shop</ListItem>
                      <ListItem>About Us</ListItem>
                      <ListItem>FAQ</ListItem>
                  </List>
                  <Link to="/"><Logo src="https://cdn.freebiesupply.com/logos/large/2x/starbucks-coffee-logo-png-transparent.png"/></Link>
                  <List align="end">
                      <ListItem>Search</ListItem>
                      <ListItem>Account</ListItem>
                      <ListItem>Cart</ListItem>
                  </List>
              </Links>
          </Container>
      </Section>
    )
  }

export default Navbar;
