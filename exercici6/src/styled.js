import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
 
    *,
    *::before,
    *::after {
        box-sizing: border-box;
    }

	body {
		margin: 0 auto;
        padding: 0;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;

        
	}

`;

