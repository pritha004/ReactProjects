import styled from 'styled-components'

const RollDice = ({currentDice,rollDice}) => {


    return (
        <DiceContainer>
            <div onClick={rollDice}>
                <img src={`/images/dices/dice_${currentDice}.png`} alt="dice_value" />
            </div>
            <p>Click on Dice to roll</p>
        </DiceContainer>
    )
}

export default RollDice

const DiceContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    /* border: 1px solid green; */
    padding: 1.8rem 0;
    div{
        height: 10rem;
        width: 10rem;
        /* border: 1px solid red; */
        margin: 0 0 0.8rem 0;
        img{
            height: inherit;
            width: inherit;
            cursor: pointer;
        }
    }
    p{
        font-weight: 600;
    }
`