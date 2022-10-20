import * as React from 'react'
import Header from '../components/Header.js';
import { Container } from '../components/PageContainer.js';
import ReactDOMServer from 'react-dom/server'

function NewsPage() {
    getNews();
    return (
        <Container>
            <Header></Header>
            <div style={{margin: "auto", width: "90vw", paddingTop: "30px"}}>
                <iframe src={'https://api-us.ten-sura-m.wfs.games/web/announcement?region=1&language=2'}
                style={{height: "80vh", width: "90vw", background: "gray", margin: "auto"}}></iframe>
            </div>
        </Container>
    )
}

export default NewsPage

async function getNews() {
    let test = ReactDOMServer.renderToString(<iframe src={'https://api-us.ten-sura-m.wfs.games/web/announcement?region=1&language=2'}></iframe>);
    console.log(test)
}