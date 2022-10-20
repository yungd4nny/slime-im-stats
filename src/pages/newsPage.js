import * as React from 'react'
import Header from '../components/Header.js';
import { Container } from '../components/PageContainer.js';

function NewsPage() {
    let news = getNews();

    return (
        <Container>
            <Header></Header>
            <h1>
                Coming soon...
            </h1>
        </Container>
    )
}

export default NewsPage

async function getNews(){
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };
      
    fetch("https://api-us.ten-sura-m.wfs.games/web/announcement?region=1&language=2&phoneType=1", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
}