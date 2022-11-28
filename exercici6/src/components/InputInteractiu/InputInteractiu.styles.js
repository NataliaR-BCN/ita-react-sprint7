import styled from 'styled-components';


export const DivInput = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-left: 0.5rem;

`;


export const InputNumber = styled.input`
    width: 2.8rem;
    margin: 0 0.3rem;
    height: 1.8rem;
    border: none;

    &:focus {
        border: 1px solid black;
    }

    &:focus-visible {
        outline: none;
    }

`;


export const ButtonUpDown = styled.button`
    color: white;
    font-size: 1.6rem;
    background-color: coral;
    border: none;
    border-radius: 8px;
    width: 1.8rem;
    height: 1.8rem;
    
    &:hover {
        background-color: tomato
    }

    &:disabled {
        background-color: rgb(252, 210, 195)
    }

`;