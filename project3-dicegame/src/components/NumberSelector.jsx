import styled from 'styled-components';
import { useState } from 'react';

const NumberSelector = ({selectedNumber,setSelectedNumber}) => {
    const arrNumber = [1, 2, 3, 4, 5, 6];
    
    return (
        <NumberSelectorContainer>
            <Boxes>
                {arrNumber.map((num, index) => {
                    return <Box key={index} onClick={() => setSelectedNumber(num)} isSelected={num === selectedNumber}>{num}</Box>
                })}
            </Boxes>
            <p style={{fontWeight:"600"}}>Select a Number</p>
        </NumberSelectorContainer>
    )
}

export default NumberSelector


const Box = styled.div`
    border: 1px solid black;
    height: 2.5rem;
    width: 2.5rem;
    display: flex;
    font-weight: 800;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    background-color: ${(props) => (props.isSelected ? "black" : "white")};
    color: ${(props) => (props.isSelected ? "white" : "black")};
`

const Boxes = styled.div`
    display: flex;
    /* border: 1px solid red; */
    justify-content: space-around;
    padding: 2rem 0;
`

const NumberSelectorContainer = styled.div`
    display: flex;
    /* border: 1px solid green; */
    flex-direction: column;

    p{
        text-align: right;
        margin: 0 1.2rem;
    }
`