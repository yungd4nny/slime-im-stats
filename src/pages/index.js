import * as React from 'react'
import Header from '../components/Header'
import background from '../images/main-bg.jpg'
import * as styles from '../styles/index.module.scss'
import { Container } from '../components/pageContainer'
import "@fontsource/gugi"

function Home() {
  const pog = {
    backgroundImage: "url(" + background + ")",
  }

  return (
    <Container>
      <Header>
      </Header>
      <h1>
        <img src="https://ten-sura-m.bn-ent.net/assets/img/lang/en/home/footer-logo.png"
          className={styles.logo}></img>
      </h1>
    </Container>
  )
}

export default Home