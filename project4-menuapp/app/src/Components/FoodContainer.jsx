import React from 'react'
import styled from 'styled-components';
import { BASE_URL, Button, Container } from '../App';

const FoodContainer = ({ data: foods }) => {
  return (
    <FoodCardContainer>
      <Container>

      <FoodCards>
        {foods?.map((food, index) => {
          return (
            <FoodCard key={index}>
              <div className='food_image'>
                <img src={BASE_URL + food.image} height={"140px"}/>
              </div>
              <div className="food_info">
                <div className="info">
                  <h3>{food.name}</h3>
                  <p>{food.text}</p>
                </div>
                <Button>${food.price.toFixed(2)}</Button>
              </div>
            </FoodCard>
          )
        })}
      </FoodCards>
      </Container>
    </FoodCardContainer>
  )
}

export default FoodContainer;


const FoodCardContainer = styled.section`
  min-height: calc(100vh - 210px);
  background-image: url("./bg.png");
  background-size: cover;
  padding: 4px;
`;

const FoodCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  row-gap: 32px;
  column-gap: 20px;
  justify-content: center;
  align-items: center;
  padding-top: 40px;
`;

const FoodCard = styled.div`
  display: flex;
  width: 340px;
  height: 150px;
  border-radius: 20px;
  background-color: #252323;
  padding: 8px;
  margin: 4px 4px;
  .food_image{
   
  }
  .food_info{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: start;
    padding: 0 4px;
    h3{
      font-size: 16px;
      padding-bottom: 2px;
    }

    p{

      font-size: 12px;
    }
  }
`;