import React from "react";
import Board from "./Board";
import StartNewGame from "./StartNewGame";
import GameStatus from "./GameStatus";
import PlayerName from "./PlayerName";
import { useSelector } from "react-redux";

const Game = (props) => {
  const gameStart = useSelector((state) => state.gameStart);
  const matrix = useSelector((state) => state.matrix);
  const player1 = useSelector((state) => state.player1);
  const player2 = useSelector((state) => state.player2);

  const checkIsFillAll = () => {
    return matrix.filter((x) => x === null);
  };
  const calculateGameWinner = () => {
    const rowCol = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < rowCol.length; i++) {
      const [a, b, c] = rowCol[i];
      if (matrix[a] && matrix[a] === matrix[b] && matrix[a] === matrix[c]) {
        let name = matrix[a] === "X" ? player1 : player2;
        return name;
      }
    }
    if (checkIsFillAll().length === 0) {
      return -1;
    }

    return null;
  };
  const winner = calculateGameWinner();

  return (
    <div style={{ display: !gameStart ? "none" : "block" }}>
      <PlayerName />
      <Board winner={winner} />
      <br />
      <GameStatus winner={winner} />
      <br />
      {winner && <StartNewGame />}
    </div>
  );
};

export default Game;
