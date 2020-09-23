import React from "react";
import { useSelector } from "react-redux";

const GameStatus = (props) => {
  const player1 = useSelector((state) => state.player1);
  const player2 = useSelector((state) => state.player2);
  const xIsNext = useSelector((state) => state.xIsNext);

  return (
    <p>
      {" "}
      {props.winner && props.winner !== -1
        ? "Winner :" + props.winner
        : props.winner < 0
        ? "Game Draw"
        : "Next Player : " + (xIsNext ? player1 + "(X)" : player2 + "(O)")}
    </p>
  );
};

export default GameStatus;
