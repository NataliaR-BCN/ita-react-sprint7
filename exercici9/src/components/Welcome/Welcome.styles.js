import styled from 'styled-components';
import image1 from '../../assets/img/pexels-luna-lovegood-4087177.jpg';


export const WelcomeLayout = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: linear-gradient(180deg, rgba(145, 179, 250, 0.2), rgba(158, 209, 252, 0.3)), url(${image1});
    background-repeat: no-repeat;
    background-size: cover;
    width: 100vw;
    height: 100vh;
`;

export const WelcomeContent = styled.div`
    background-color: white;
    box-shadow: 0.5rem 1rem 2rem #888888;
    border-radius: 1rem;
    width: 50%;
    height: 26rem;
    padding: 3rem 5rem 4rem 5rem;
`;


export const WelcomeDiv = styled.div`
    display: flex;
    justify-content: center;
    padding-top: 0.8rem;
`;


export const WelcomeButton = styled.button`
    font-size: 1.2rem;
    color: white;
    background-color: tomato;
    border: 2px solid tomato;
    border-radius: 15px;
    padding: 1rem 1.8rem;
    box-shadow: 0.3rem 0.3rem 0.2rem #999999;

    &:hover{
        cursor: pointer;
        color: tomato;
        background-color: white;
    }

`;