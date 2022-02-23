import * as React from 'react'
import CharacterList from '../components/characterList'
import Header from '../components/header'
import background from '../images/main-bg.jpg'
import data from '../slime.json'
import { CharacterTileProps } from '../components/characterTile.props'

function Home() {
  const bgStyle = {
    backgroundImage: "url(" + background + ")",
    height: '100vh',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'
  }


  return (
    <div
      style={bgStyle}
    >
      <Header>
      </Header>
    </div>
  )
}

export default Home