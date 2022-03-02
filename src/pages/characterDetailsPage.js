import * as React from 'react'
import Header from '../components/Header'
import { Container } from '../components/pageContainer'
import CharacterDetails from '../components/CharacterDetails'

function CharacterDetailsPage({ location }) {
    return (
        <Container>
            <Header></Header>
            <CharacterDetails
                {...location?.state?.props}></CharacterDetails>
        </Container>
    )
}

export default CharacterDetailsPage