import React from 'react'
import styled from 'styled-components';


const StartGame = ({ toggleGamePlay }) => {
    return (
        <Container>
            <img src="./images/dices.png" style={{ width: '50%', height: 'auto' }} />
            <div style={{ padding: '2rem' }}>
                <h1 style={{ textAlign: 'center', fontSize: '3rem', whiteSpace: 'nowrap' }}>Dice Game</h1>
                <Button onClick={toggleGamePlay}>Play Now</Button>
            </div>
        </Container>
    )
}

export default StartGame


const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column-reverse;
    width: 80%;
    height: 100vh;
    margin: 0 auto;

    @media only screen and (min-width:767px)
    {
        flex-direction: row;
    }

    @media only screen and (min-width:1024px){
        flex-direction: row;
    }
`;

const Button = styled.button`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;
    margin: 1.2rem;
    padding: 10px 18px;
    gap: 10px;
    min-width: 220px;
    height: 44px;
    background-color: black;
    border-radius: 5px;
    border:transparent;
    cursor: pointer;
    transition: 0.4s background ease-in;

    &:hover{
        background-color: white;
        color:black;
        border: 2px solid black;
        transition: 0.3s background ease-in;
    }
`;