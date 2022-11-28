import styled, { keyframes } from 'styled-components';

const panellIn = keyframes`
    0% { opacity: 0 }
    100% { opacity: 1};
`; 

export const PanellDiv = styled.div`
    border: 2px solid black;
    border-radius: 15px;
    padding: 1.5rem;
    width: 22.5rem;
    position: relative;
    animation-name: ${panellIn};
    animation-duration: 1s;
`;


export const Fila = styled.div`
    display: flex;
    justify-content: space-around;
    padding: 0.5rem 0;
    animation-name: ${panellIn};
    animation-duration: 0.5s;
    animation-delay: 0.3s;
    animation-fill-mode: both;
`;


export const Label = styled.label`
    flex-grow: 3;
`;