import * as React from 'react'
import Header from '../components/Header'
import { Container } from '../components/pageContainer'
import CharacterDetails from '../components/CharacterDetails'

function CharacterDetailsPage({ location }) {
    return (
        <Container>
            <Header></Header>
            <CharacterDetails
                name={location?.state?.props.name}
                imageUrl={location?.state?.props.imageUrl}></CharacterDetails>
        </Container>
    )
}

export default CharacterDetailsPage