import React from "react";
import { useSelector, useDispatch } from "react-redux";

const StartNewGame = (props) => {
  const dispatch = useDispatch();
  const matrix = useSelector((state) => state.matrix);
  const clear = () => {
    let matrixCopy = matrix;
    matrixCopy = new Array(9).fill(null);
    dispatch({ type: "GAME_UPDATE", matrix: matrixCopy });
  };
  return (
    <p>
      <button className="btn btn-success p-15 m-10" onClick={clear}>
        Play Again{" "}
      </button>
      <button
        className="btn btn-success p-15 m-10"
        onClick={() => window.location.reload()}
      >
        Start New Game{" "}
      </button>
    </p>
  );
};

export default StartNewGame;
