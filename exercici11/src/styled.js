import styled from "styled-components"; 
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

export const Columnes = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 4rem;

`;


export const ColEsquerra = styled.main`

`;

export const ColDreta = styled.aside`
    padding: 1.7rem 2rem;
    width: 31.5rem;
   
`;