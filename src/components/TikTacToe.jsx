import { useState } from 'react';
import Board from './Board';

const PLAYER_X = 'X';
const PLAYER_O = 'O';

function TicTacToe() {
  const [tiles, setTiles] = useState(Array(9).fill(null));
  const { playerTurn, setPlayerTurn } = useState(PLAYER_X);

  const handelTileClick = (index) => {
    console.log(index);
  };

  return (
    <div>
      Tic Tac Toe
      <Board tiles={tiles} onTileClick={handelTileClick} />
    </div>
  );
}

export default TicTacToe;
