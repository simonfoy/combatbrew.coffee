import React from 'react'
import Banner from '../components/Banner'
import styled from 'styled-components'

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

const HomePage = () => {
  return (
    <>
    <Section>
    <Banner/>
        
    </Section>
    </>
  )
}

export default HomePage