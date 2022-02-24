import * as React from 'react'
import Header from '../components/Header'
import background from '../images/main-bg.jpg'
import { CharacterTileProps } from '../components/characterTile.props'
import { Container } from '../components/pageContainer'

function Home() {
  const pog = {
    backgroundImage: "url(" + background + ")",
  }

  return (
    <Container>
      <Header>
      </Header>
    </Container>
  )
}

export default Home