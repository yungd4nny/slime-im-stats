import * as React from 'react'
import CharacterList from '../components/characterList'
import Header from '../components/header'
import background from '../images/main-bg.jpg'
import { HomeProps } from './index.props'

function Home(HomeProps) {
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
      <Header pageTitle="Slime: Isekai Memories Stats">
      </Header>
      <CharacterList></CharacterList>
    </div>
  )
}

export default Home