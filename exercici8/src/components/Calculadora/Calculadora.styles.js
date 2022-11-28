import styled from 'styled-components';

export const CalculadoraDiv = styled.div`
    margin: 3rem;
   
`;

export const NomApartat = styled.h4`
    margin-top: 2.2rem;
`;

export const BotoProjecte = styled.button`
    margin: 1.5rem 5.5rem;
    color: white;
    font-size: 1rem;
    background-color: tomato;
    border: 2px solid tomato;
    border-radius: 15px;
    width: 14rem;
    height: 2.8rem;
    padding: 0.8rem 1.8rem;
    box-shadow: 0.2rem 0.2rem 0.1rem #999999;

    &:hover{
        cursor: pointer;
        color: tomato;
        background-color: white;
    }
`;

export const FilaProjecte = styled.p`
    display: flex;
    width: 25rem;
`;

export const LabelProjecte = styled.label`
    flex-grow: 2;
`;

export const InputProjecte = styled.input`
    width: 21.5rem;
    height: 1.8rem;
    border: 1px solid black;
    border-radius: 8px;
    padding-left: 0.3rem;

    &:focus {
        background-color: white;
    }
`;