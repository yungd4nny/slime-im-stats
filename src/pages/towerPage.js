import * as React from 'react'
import Header from '../components/Header.js';
import { Container } from '../components/PageContainer.js';
import * as styles from '../styles/towerPage.module.scss'
import TowerView from '../components/TowerView.js';


function TowerPage() {
    return (
        <Container>
            <Header></Header>
            <TowerView />
        </Container>
    )
}

export default TowerPage