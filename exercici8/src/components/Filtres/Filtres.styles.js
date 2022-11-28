import styled from "styled-components";


export const FilaFiltres = styled.div`

    display: flex;
    justify-content: center;
`;


export const FilterButton = styled.button`
    flex-grow: 1;
    color: white;
    font-size: 1rem;
    background-color: coral;
    border: 1px solid orangered;
    height: 2.2rem;
    
    &:hover {
        background-color: tomato;
        cursor: pointer;
    }

    &:active {
        color: white;
        background-color: lightsalmon;
    }

`;