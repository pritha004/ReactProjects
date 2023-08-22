import styled from 'styled-components';


const App = () => {
  return(
    <Container>
      <TopContainer>
          <div className="logo">
            <img src="/logo.svg" alt="logo" />
          </div>
          <div className="search">
            <input type="text" placeholder='Search Food...' />
          </div>
      </TopContainer>
      <FilterContainer>
        <Button>All</Button>
        <Button>Breakfast</Button>
        <Button>Lunch</Button>
        <Button>Dinner</Button>
      </FilterContainer>
    </Container>
  );
};

export default App;

const Container=styled.div`
max-width: 1200px;;
margin: 0 auto;
`;

const TopContainer=styled.section`
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
`;

const FilterContainer=styled.section`
  display: flex;
  justify-content: center;
  gap: 12px;
`;

const Button=styled.button`
  background-color:red;
  color: white;
  border-radius: 5px;
  padding: 6px 12px;
  border: none;
`;