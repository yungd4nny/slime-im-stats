import * as React from 'react'
import Header from '../components/Header.js';
import { Container } from '../components/PageContainer.js';
import * as styles from '../styles/towerPage.module.scss'
import Helmet from 'react-helmet'
import TowerView from '../components/TowerView.js';


function TowerPage() {
    return (
        <Container>
            <Helmet><title>SlimeStats | Tower</title></Helmet>
            <Header></Header>
            <TowerView />
        </Container>
    )
}

export default TowerPage