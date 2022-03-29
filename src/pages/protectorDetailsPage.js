import * as React from 'react'
import Header from '../components/Header.js';
import { Container } from '../components/PageContainer.js';
import ProtectorDetails from '../components/ProtectorDetails';

function ProtectorDetailsPage({ location }) {
    return (
        <Container>
            <Header></Header>
            <ProtectorDetails
                {...location?.state?.props}></ProtectorDetails>
        </Container>
    )
}

export default ProtectorDetailsPage