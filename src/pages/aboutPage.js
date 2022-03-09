import * as React from 'react'
import Header from '../components/Header.js';
import { Container } from '../components/PageContainer.js';
import * as styles from '../styles/about.module.scss'

function AboutPage() {
    return (
        <Container>
            <Header></Header>
            <h1>
                <img src="https://ten-sura-m.bn-ent.net/assets/img/lang/en/home/footer-logo.png"
                    className={styles.logo}></img>
            </h1>
            <div className={styles.aboutContainer}>
                <h2 className={styles.aboutText}>About</h2>
                <p className={styles.aboutText}>This is a personal project to provide a helpful UI for a Slime: Isekai Memories database!</p>
                <p className={styles.aboutText}>I work on this in my free time so ping me on discord if you find a bug, want a feature or have any suggestions (d4nny#6969).</p>
                <p className={styles.aboutText}>HUGE shoutout to the creators of the Slime IM Databse spreadsheet, as I scrape all the data from there. Check them out at <a href='https://docs.google.com/spreadsheets/d/1xfUDOwFXFaujjZkXLXJud-31rdgW2ChOoeOlsrb2j_k/edit#gid=0'>tiny.cc/isekaimemories</a></p>
                <p className={styles.aboutText}>Thanks for stopping by and grind on!</p>
            </div>
        </Container>
    )
}

export default AboutPage