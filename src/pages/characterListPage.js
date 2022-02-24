import * as React from 'react'
import CharacterList from '../components/CharacterList'
import Header from '../components/Header'
import { graphql } from 'gatsby'
import { Container } from '../components/pageContainer';

function CharacterListPage({ data }) {
    const characterData = data?.allSlimerippedCsv?.nodes || [];
    return (
        <Container>
            <Header>
            </Header>
            <CharacterList characterData={characterData}>
            </CharacterList>
        </Container>
    )
}

export default CharacterListPage

export const BattleCharacterQuery = graphql`
query {
    allSlimerippedCsv {
            nodes {
                Name
                Base_Rarity
                Atk_Type
            }
    }
}
`