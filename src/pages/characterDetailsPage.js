import * as React from 'react'
import Header from '../components/Header.js';
import { Container } from '../components/pageContainer.js';
import CharacterDetails from '../components/CharacterDetails.tsx';

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