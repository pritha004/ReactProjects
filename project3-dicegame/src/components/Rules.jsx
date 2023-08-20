import styled from 'styled-components'

const Rules = () => {
  return (
    <RulesContainer>
        <h2>How to play dice game</h2>
        <ul className="text">
            <li>Select any number</li>
            <li>Click on the dice</li>
            <li>If selected number is equal to the number on dice, you get same points as the dice number.</li>
            <li>If you get wrong guess, 1 point will be deducted</li>
        </ul>
    </RulesContainer>
  )
}

export default Rules


const RulesContainer=styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #c8c7c7;
    margin: 0.8rem 2rem 2rem 2rem;
    padding: 0.4rem;

    @media only screen and (min-width:767px)
    {
        width: 60%;
        margin: 0.8rem auto;
    }

    @media only screen and (min-width:1024px) {
        width: 60%;
        margin: 0.8rem auto;
    }
`