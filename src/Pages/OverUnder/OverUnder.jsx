import { useState, useContext } from 'react';
import LineGraph from '../../Components/LineGraph';
import data from '../../test_data';
import Flex from '../../Components/Flex';
import styled from 'styled-components/macro';
import SocketContext from '../../Context/SocketContext';

const GameStats = styled.div`
  width: 10%;
  padding-top: 50px;
`;

const GameRow = styled(Flex)`
  height: 500px;
  width: 100%;s
`;

function App() {
  const [gameData, setGameData] = useState(data);
  const { setOnMessage } = useContext(SocketContext);

  setOnMessage((message) => {
    const gameData = message;
    const { [Object.keys(gameData)[0]]: remove, ...rest } = gameData;
    const updatedData = { ...rest, ...gameData }

    const sorted = Object.entries(updatedData).sort((x, y) => x[1].time_elapsed - y[1].time_elapsed)

    const sortedGames = Object.fromEntries(sorted);
    setGameData(sortedGames);
  });

  return (
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
  );
}

export default App;