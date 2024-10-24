'use client';
import { createGlobalStyle } from "styled-components";
import { Poppins } from "next/font/google";

const poppins = Poppins({
    subsets: ['latin'],
    weight: ["300", "400", "500"] 
});

export const GlobalStyle = createGlobalStyle`

html {
    background: ${({ theme }) => theme.colors.bgGradient};
    width: 100vw;
    height: 100vh;
    overflow-x: hidden;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

*,
*::before,
*::after {
    box-sizing: inherit;
}

body {
    margin: 5px auto;
    border-radius: 1rem;
    overflow-x: hidden;
    background-color: ${({ theme }) => theme.colors.bgWhite};
    height: 98vh;
    width: 80% ;
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
    font-family: ${poppins.style.fontFamily};
}

span {

    font-style: italic;
    font-weight: normal;
}
`;