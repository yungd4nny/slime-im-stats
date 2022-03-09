import * as React from 'react'
import Header from '../components/Header.js';
import { Container } from '../components/PageContainer.js';
import * as styles from '../styles/protectorListPage.module.scss'

function ProtectorListPage() {
    return (
        <Container>
            <Header></Header>
            <h1 className={styles.itemsPageHeader}>Coming soon...</h1>
        </Container>
    )
}

export default ProtectorListPage