import React from 'react'
import Banner from '../components/Banner'
import styled from 'styled-components'
import Navbar from '../components/Navbar'

const Section = styled.div`
    position: relative;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    @media only screen and (max-width: 940px) {
        min-height: auto;
    }
`

const Container1 = styled.div`
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
        
    </Section>
    </>
  )
}

export default HomePage