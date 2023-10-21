import React from 'react'
import Banner from '../components/Banner'
import styled from 'styled-components'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ProductCard from '../components/ProductCard'

const Section = styled.div`
    position: relative;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Container1 = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`

const Container2 = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    max-width: 1500px;
    padding-top: 100px;
    
    @media only screen and (max-width: 1000px) {
        flex-direction: column;
        align-items: center;
        padding-top: 40px;
    }
`

const LeftContent = styled.div`
    flex: 1;
    padding: 20px;
    text-align: center;
`

const Title = styled.h2`
    margin-top: 0;
    margin-bottom: 20px;
    font-size: 25px;
    font-weight: bold;
    text-transform: uppercase;
    color: #00704A;
    padding-bottom: 1px;
`

const StepTitle = styled.h3`
    color: #333;
    font-weight: 600;
    margin-bottom: 5px;
    font-size: 19px;
`

const StepDescription = styled.p`
    color: #777;
    margin-bottom: 20px;
    font-size: 14px;
`

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
`

const ProductImageContainer = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;

    @media only screen and (max-width: 1000px) {
        padding-bottom: 40px;
    }
`

const ProductImage = styled.img`
    width: 100%;
    max-width: 700px;
    height: auto;

    @media only screen and (max-width: 1000px) {
      width: 100%;
      height: 250px;
    }
`

const Container3 = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    width: 1155px;
`

const ProductsGrid = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 70px 0;

    @media only screen and (max-width: 1000px) {
        flex-direction: row;
    }
`;

const HomePage = () => {
  return (
    <>
      <Section>
        <Container1>
          <Banner/>
          <Navbar/>
        </Container1>
        <Container2>
    
          
          <ProductImageContainer>
            <ProductImage src="https://orderdevs.com/cdn/shop/files/BUILD-A-BOX-MOCK_small_9f24f492-8094-43d7-8324-7a82c3ba10c2.png?v=1680721560&width=750" alt="Combatbrew Coffee Products" />
          </ProductImageContainer>

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
        </Container2>
        <Container3>
  <ProductsGrid>
    <ProductCard imgSrc="path_to_product1_image.jpg" title="Product 1" price="10.99" />
    <ProductCard imgSrc="path_to_product2_image.jpg" title="Product 2" price="12.99" />
    <ProductCard imgSrc="path_to_product3_image.jpg" title="Product 3" price="15.99" />
    <ProductCard imgSrc="path_to_product4_image.jpg" title="Product 4" price="9.99" />
  </ProductsGrid>
  {/* <Footer/> */}
</Container3>
      </Section>
    </>
  )
}

export default HomePage;