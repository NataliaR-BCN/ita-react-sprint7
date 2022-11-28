import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
 
    *,
    *::before,
    *::after {
        box-sizing: border-box;
    }

	body {
		margin: 0;
        padding: 0;
        padding-left: 1rem;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
	}

`;

