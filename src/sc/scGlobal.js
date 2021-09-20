import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        font-size: 62.5%;
        font-family: 'Ubuntu', sans-serif;
    }
    
    body {
        width: 100vw;
        min-height: 100vh;
        background-color: #F2F2F2;
        overflow-x: hidden;
    }
`;