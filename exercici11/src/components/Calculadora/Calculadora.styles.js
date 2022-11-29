import styled from 'styled-components';

export const CalculadoraDiv = styled.div`
    margin: 3rem;
`;

export const NomApartat = styled.h4`
    margin-top: 2.2rem;
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

export const FilaBotons = styled.p`
    display: flex;
    justify-content: center;
    gap: 1rem;
`;

export const BotoProjecte = styled.button`
    margin: 1.5rem 0rem;
    color: white;
    font-size: 1rem;
    background-color: tomato;
    border: 2px solid tomato;
    border-radius: 15px;
    flex-grow: 1;
    height: 2.8rem;
    padding: 0.8rem 1.5rem;
    box-shadow: 0.2rem 0.2rem 0.1rem #999999;

    &:hover{
        cursor: pointer;
        color: tomato;
        background-color: white;
    }
`;

export const BotoReset = styled.button`
    margin: 1.5rem 0rem;
    color: white;
    font-size: 1rem;
    background-color: #6d6c6c;
    border: 2px solid #6d6c6c;
    border-radius: 15px;
    flex-grow: 1;
    height: 2.8rem;
    padding: 0.8rem 1.5rem;
    box-shadow: 0.2rem 0.2rem 0.1rem #999999;

    &:hover{
        cursor: pointer;
        color: #6d6c6c;
        background-color: white;
    }
`;