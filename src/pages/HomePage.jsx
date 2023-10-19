import React from 'react'
import Banner from '../components/Banner'
import styled from 'styled-components'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Section = styled.div`
    position: relative;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media only screen and (max-width: 940px) {
        min-height: auto;
    }
`

const Container1 = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`

const Container2 = styled.div`
    display: flex;
    flex-direction: row;
    width: 1250px;
    padding-top: 75px;
`

const LeftContent = styled.div`
    flex: 1;
    padding: 20px;
    text-align: center;
`;

const Title = styled.h2`
    margin-top: 0;
    margin-bottom: 20px;
    font-size: 25px;
    font-weight: bold;
    text-transform: uppercase;
    color: #00704A;
    padding-bottom: 1px;
`;

const StepTitle = styled.h3`
    color: #333;
    font-weight: 600;
    margin-bottom: 5px;
    font-size: 19px;
`;

const StepDescription = styled.p`
    color: #777;
    margin-bottom: 20px;
    font-size: 14px;
`;

const OrderButton = styled.button`
    background-color: #00704A;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 3px;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s;
    font-weight: bold;

    &:hover {
        background-color: #005c3a;
    }
`;

const ProductImageContainer = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ProductImage = styled.img`
    max-width: 125%;
    height: auto;
`;

const Container3 = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`

const HomePage = () => {
  return (
    <>
      <Section>
        <Container1>
          <Banner/>
          <Navbar/>
        </Container1>
        <Container2>
          <LeftContent>
            <Title>ENLIST IN THE COFFEE BRIGADE</Title>

            <StepTitle>MISSION 1</StepTitle>
            <StepDescription>Select your ammunition (Choose your coffee).</StepDescription>

            <StepTitle>MISSION 2</StepTitle>
            <StepDescription>Enroll in the reserves (Subscribe and save 20%).</StepDescription>

            <StepTitle>MISSION 3</StepTitle>
            <StepDescription>Specify your drop zone (Tell us where to ship).</StepDescription>

            <StepTitle>MISSION 4</StepTitle>
            <StepDescription>Engage the enemy (Brew and conquer your day!)</StepDescription>
            
            <OrderButton>Deploy Coffee</OrderButton>

          </LeftContent>
          
          <ProductImageContainer>
            <ProductImage src="https://orderdevs.com/cdn/shop/files/BUILD-A-BOX-MOCK_small_9f24f492-8094-43d7-8324-7a82c3ba10c2.png?v=1680721560&width=750" alt="Combatbrew Coffee Products" />
          </ProductImageContainer>
        </Container2>
        <Container3>
          {/* <Footer/> */}
        </Container3>
      </Section>
    </>
  )
}

export default HomePage;