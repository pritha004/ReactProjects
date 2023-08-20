import styled from 'styled-components'
import TotalScore from './TotalScore'
import NumberSelector from './NumberSelector'
import RollDice from './RollDice'
import { useState } from 'react'
import Rules from './Rules'

const GamePlay = () => {
    const [selectedNumber, setSelectedNumber] = useState();
    const [currentDice, setCurrentDice] = useState(1);
    const [score,setScore]=useState(0);
    const [error,setError]=useState("");
    const [showRules,setShowRules]=useState(false);

    const generateRandomNumber = (min, max) => {
        return Math.floor(Math.random() * (max - min) + min);
    }

    const rollDice=()=>{
        if(!selectedNumber)
        {
            setError("You have not selected any number")
            return;
        }
        
        const randomNumber=generateRandomNumber(1,7);
        setCurrentDice(randomNumber);


        if(selectedNumber===randomNumber)
        {
            setScore((prev=>prev+randomNumber))
        }else
        {
            setScore((prev=>prev-1))
        }
        setSelectedNumber(undefined);
    }

  return (
    <MainContainer>
        <div className='top-container'>
        <TotalScore score={score}/>
        <NumberSelector selectedNumber={selectedNumber} setSelectedNumber={setSelectedNumber} error={error} setError={setError}/>
        </div>
        <RollDice currentDice={currentDice} rollDice={rollDice} />
        <div className='btns'>
            <OutlineButton onClick={()=>{setScore(0);setError("")}}>Reset Score</OutlineButton>
            <Button onClick={()=>setShowRules(!showRules)}>{showRules?"Hide":"Show"} Rules</Button>
        </div>
        {showRules && <Rules/>}
    </MainContainer>
  )
}

export default GamePlay

const MainContainer=styled.main`
    padding-top: 1rem;

    .btns{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
    @media only screen and (min-width:767px)
    {
        padding-top: 10rem;
        .top-container{
            display: flex;
            flex-direction: row;
            justify-content: space-around;
        }
    }

    @media only screen and (min-width:1024px){
        padding-top: 5rem;
        .top-container{
            display: flex;
            flex-direction: row;
            justify-content: space-around;
        }
    }
`;

const Button = styled.button`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;
    margin: 0.4rem;
    padding: 10px 18px;
    min-width: 150px;
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

const OutlineButton=styled(Button)`
    color: black;
    background-color: white;
    border:2px solid black;

    &:hover{
        background-color: black;
        color:white;
        border: 2px solid transparent;
    }
`