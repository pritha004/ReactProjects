import { useState } from 'react'
import StartGame from './components/StartGame';
import GamePlay from './components/GamePlay';


function App() {

  const [isGameStarted, setIsGAmeStarted] = useState(false);
  const toggleGamePlay = () => {
    setIsGAmeStarted(!isGameStarted);
  }

  return (
    <>
      {isGameStarted ? <GamePlay /> : <StartGame toggleGamePlay={toggleGamePlay} />}
    </>
  );
}

export default App
