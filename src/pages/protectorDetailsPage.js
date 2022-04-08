import * as React from 'react'
import Header from '../components/Header.js';
import { Container } from '../components/PageContainer.js';
import ProtectorDetails from '../components/ProtectorDetails';
import { graphql } from 'gatsby';

function ProtectorDetailsPage({ data, location }) {
    var path = location.pathname;
    path = path.replace("/protectorDetailsPage/", "");
    path = path.replaceAll("%20", " ");
    path = path.replaceAll("%5B", "[");
    path = path.replaceAll("%5D", "]");
    var proppers = data.allSlimerippedProtectionCsv.nodes.filter(item => (
        item.Name == path
    ));
    return (
        <Container>
            <Header></Header>
            <ProtectorDetails
                {...proppers[0]}></ProtectorDetails>
        </Container>
    )
}

export default ProtectorDetailsPage

export const protectionPageQuery = graphql`
query {
    allSlimerippedProtectionCsv {
        nodes {
            Name
        }
    }
}`