import background from '../images/main-bg.jpg'
import styled from 'styled-components'

export const Container = styled.div`
height: 100vh;
width: 100vw;
background-size: cover;
background-repeat: no-repeat;
background-image: url("${background}");
background-attachment: local;
overflow-x: hidden;
`