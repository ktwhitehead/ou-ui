import { useState } from 'react';
import './App.css';
import LineGraph from './Components/LineGraph';
import data from './test_data';
import Flex from './Components/Flex';
import useWebSocket from './Hooks/useWebSocket';
import styled from 'styled-components/macro';

const GameStats = styled.div`
  width: 10%;
  padding-top: 50px;
`;

const GameRow = styled(Flex)`
  height: 500px;
  width: 100%;
`;

function App() {
  const [gameData, setGameData] = useState({});
  const { setOnMessage } = useWebSocket('ws://192.168.145.182:5000');

  setOnMessage((message) => {
    const data = JSON.parse(message.data)
    const { [Object.keys(data)[0]]: remove, ...rest } = gameData;
    const updatedData = { ...rest, ...data }
    setGameData(updatedData);
  });

  return (
    <div className="App">
      <div>
      {Object.keys(gameData).map(game => {
        const data = gameData[game];
        return (
          <GameRow key={`game-${game}`} justifyBetween >
            <GameStats><h3>{game}</h3></GameStats>
            <LineGraph data={data.graph_data} />
          </GameRow>
        )
      })}
      </div>
    </div>
  );
}

export default App;
