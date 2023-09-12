import { useState, useEffect } from 'react';
import styled from 'styled-components';
import FoodContainer from './Components/FoodContainer';

export const BASE_URL = "http://localhost:9000";

const App = () => {



  const [data, setData] = useState(null);
  const [filteredData, setFilteredData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedButton, setSelectedButton] = useState("all");

  const fetchFoodData = async () => {
    try {
      setLoading(true);
      const res = await fetch(BASE_URL);
      const jsonData = await res.json();
      setLoading(false);
      setData(jsonData);
    } catch (error) {
      setError("Unable to fetch data");
    }
  }

  useEffect(() => {

    fetchFoodData();
  }, [])

  const searchFood = (e) => {
    const searchValue = e.target.value;

    if (searchValue === "")
      setFilteredData(null);

    const filter = data?.filter((food) => food.name.toLowerCase().includes(searchValue.toLowerCase()));
    setFilteredData(filter);
  }

  const filterFood = (type) => {
    if (type === "all") {
      setFilteredData(data);
      setSelectedButton("all");
      return;
    }
    const filter = data?.filter((food) => food.type.toLowerCase().includes(type.toLowerCase()));
    setFilteredData(filter);
    setSelectedButton(type);
  }

  if (error)
    return <div>{error}</div>

  if (loading)
    return <div>Loading...</div>

  return (
    <>
      <Container>
        <TopContainer>
          <div className="logo">
            <img src="/logo.svg" alt="logo" />
          </div>
          <div className="search">
            <input onChange={searchFood} type="text" placeholder='Search Food...' />
          </div>
        </TopContainer>
        <FilterContainer>
          <Button onClick={()=>filterFood("all")}>All</Button>
          <Button onClick={()=>filterFood("breakfast")}>Breakfast</Button>
          <Button onClick={()=>filterFood("lunch")}>Lunch</Button>
          <Button onClick={()=>filterFood("dinner")}>Dinner</Button>
        </FilterContainer>
      </Container>
      <FoodContainer data={filteredData || data} />
    </>
  );
};

export default App;

export const Container = styled.div`
max-width: 1200px;
margin: 0 auto;
`;

const TopContainer = styled.section`
  min-height: 140px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;

  .search{
    input{
      background: transparent;
      border: 1px solid red;
      border-radius: 5px;
      color: white;
      height: 40px;
      font: 16px;
      padding: 0 10px;
    }
  }

  @media (0<width<600px){
    flex-direction: column;
  }
`;

const FilterContainer = styled.section`
  display: flex;
  justify-content: center;
  gap: 12px;
  padding-bottom: 40px;
`;

export const Button = styled.button`
  background-color:red;
  color: white;
  border-radius: 5px;
  padding: 6px 12px;
  border: none;
  cursor: pointer;
`;

