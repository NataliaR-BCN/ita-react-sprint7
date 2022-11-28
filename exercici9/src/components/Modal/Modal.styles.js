import styled from "styled-components";

export const ModalLayout = styled.div`
    height: 100vh;
    width: 100vw;
    background-color: rgba(0, 0, 0, 0.5);
    position: fixed;
    left: 0;
    top: 0;
`;


export const ModalContent = styled.div`
    background-color: white;
    border: 2px solid black;
    border-radius: 15px;
    height: 5rem;
    top: 30rem;
    left: 8rem;
    position: fixed;
    padding: 2rem 3rem 3.4rem 2rem;
`;