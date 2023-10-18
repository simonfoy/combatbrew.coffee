import React from 'react'
import styled from 'styled-components';

const Section = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%; 
    background-color: black;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

    @media only screen and (max-width: 940px) {
        width: 100%; 
    }
`;

const Container = styled.div`
    text-align: center;
    position: relative;
    width: 100%;
    padding: 15px 0;
    color: white;
    font-size: 15px;
    font-weight: bold;
`;

const Banner = () => {

  return (
    <Section>
        <Container>
            FREE SHIPPING ON COFFEE ORDERS OVER $40 (US ONLY)
        </Container>
    </Section>
  )
}

export default Banner