import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Inconsolata&display=swap');
*, *::after, *::before{
    box-sizing: border-box;
    padding: 0;
    margin: 0;
}
html{
    font-size: 62.5%
}
body{
    background-color: #222222;
    font-size: 1.6em;
    font-family: 'Inconsolata', monospace;
}
`;

export default GlobalStyles;
