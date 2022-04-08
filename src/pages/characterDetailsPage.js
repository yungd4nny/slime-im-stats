import * as React from 'react'
import { graphql } from 'gatsby';
import Header from '../components/Header.js';
import { Container } from '../components/PageContainer.js';
import CharacterDetails from '../components/CharacterDetails.tsx';

function CharacterDetailsPage({ data, location }) {
    var path = location.pathname;
    path = path.replace("/characterDetailsPage/", "");
    path = path.replaceAll("%20", " ");
    path = path.replaceAll("%5B", "[");
    path = path.replaceAll("%5D", "]");
    var proppers = data.allSlimerippedCsv.nodes.filter(item => (
        item.Name == path
    ));

    return (
        <Container>
            <Header></Header>
            <CharacterDetails
                {...proppers[0]}></CharacterDetails>
        </Container>
    )
}

export default CharacterDetailsPage

export const charPageQuery = graphql`
query {
    allSlimerippedCsv {
            nodes {
                Name
                Base_Rarity
                Atk_Type
                Picture
                Type
                Growth_Type
                Max_HP
                Max_ATK
                Max_DEF
                Battle_Skill_1
                Battle_Skill_2
                Town_Trait_1
                Town_Trait_2
                Character_Trait_at_5__Awaken_x1
                Character_Trait_at_5__Awaken_x3
                Secret_Skill__Ult_
                Expertise
            }
    }
}
`