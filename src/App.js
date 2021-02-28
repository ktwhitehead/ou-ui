import { useState } from 'react';
import './App.css';
import LineGraph from './Components/LineGraph';
import data from './test_data';
import Flex from './Components/Flex';
import useWebSocket from './Hooks/useWebSocket';

function App() {
  const [gameData, setGameData] = useState(data);
  const { setOnMessage } = useWebSocket('ws://172.19.229.37:5000');

  setOnMessage((message) => {
    const data = JSON.parse(message.data)
    const currentData = gameData;
    const updatedData = currentData[Object.keys(data)[0]] = data;
    setGameData(updatedData);
  });

  return (
    <div className="App">
      {Object.keys(gameData).map(game => {
        const data = gameData[game];
        return (
          <Flex key={`game-${game}`} column style={{width: "100%", height: "100%"}}>
            <p>{game}</p>
            <LineGraph data={data.graph_data} />
          </Flex>
        )
      })}
    </div>
  );
}

export default App;
