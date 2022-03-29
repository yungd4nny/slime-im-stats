import * as React from 'react'
import Header from '../components/Header.js';
import { Container } from '../components/PageContainer.js';
import * as styles from '../styles/protectorListPage.module.scss'
import { graphql } from 'gatsby'
import ProtectorList from '../components/ProtectorList.js';

function ProtectorListPage({ data }) {
    const characterData = data?.allSlimerippedProtectionCsv?.nodes || [];

    return (
        <Container>
            <Header></Header>
            <ProtectorList characterData={characterData} />
        </Container>
    )
}

export default ProtectorListPage

export const ProtectionCharacterQuery = graphql`
query {
    allSlimerippedProtectionCsv {
            nodes {
                Name
                Base_Rarity
                Picture
                Type
                Growth_Type
                Max_HP
                Max_ATK
                Max_DEF
            }
    }
}
`