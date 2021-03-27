import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Roboto', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: #282c34;
    color: white
  }
  
  html, body, #app, body>div {
    width: 100%;
    height: 100%;
    overflow: auto;
  }  
`;
