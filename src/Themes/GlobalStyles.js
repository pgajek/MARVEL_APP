import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
*, *::after, *::before{
    box-sizing: border-box;
    padding: 0;
    margin: 0;
}
body{
    background-color: #222222;
}
`;

export default GlobalStyles;
