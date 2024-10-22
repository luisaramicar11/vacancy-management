'use client';
import { createGlobalStyle } from "styled-components";
import { Roboto } from 'next/font/google';

const roboto = Roboto({
    subsets: ['latin'],
    weight: ["100", "300", "400", "500", "700", "900"] 
});

export const GlobalStyle = createGlobalStyle`

html {
    background-color: ${({ theme }) => theme.colors.bgGradient}; /* Cambia a bgWhite u otro color según tu preferencia */
    width: 100vw !important;
    overflow-x: hidden;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

*,
*::before,
*::after {
    font-family: ${roboto.style.fontFamily};
    box-sizing: inherit;
}

body {
    min-height: 100vh;
    overflow-x: hidden;
    width: 100% !important;
    margin: 0;
    padding: 0;
}

h1, h2, h3, h4, h5, h6 {
    font-weight: bolder;
}

p {
    color: ${({ theme }) => theme.colors.textBlack}; 
    line-height: 1.5;
    font-weight: 300;
    margin: 0;
    hyphens: auto;
    word-wrap: break-word;
    overflow-wrap: break-word;
}

input, select, textarea, button {
    font-family: ${roboto.style.fontFamily};
}

span {
    font-family: ${roboto.style.fontFamily};
    font-style: italic;
    font-weight: normal;
}
`;