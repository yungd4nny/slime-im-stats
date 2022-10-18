import * as React from 'react'
import Header from '../components/Header'
import background from '../images/main-bg.jpg'
import * as styles from '../styles/index.module.scss'
import { Container } from '../components/PageContainer'
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
      <div className={styles.aboutContainer}>
        <p className={styles.aboutText}>Slime: Isekai Memories database and character information.</p>
        <p className={styles.aboutText}>Filter by skills, element type, and more!</p>
        <p className={styles.aboutText}>-</p>
        <p className={styles.aboutText}>RECENT UPDATE: Added latest battle units. Protectors will be next.</p>
      </div>
    </Container>
  )
}

export default Home