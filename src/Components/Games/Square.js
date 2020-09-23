import React from "react";
import { useSelector, useDispatch } from "react-redux";

const Square = (props) => {
  const xIsNext = useSelector((state) => state.xIsNext);
  const matrix = useSelector((state) => state.matrix);
  const dispatch = useDispatch();

  const onClickHandler = () => {
    console.log(props.index, "this sis sis ");
    const matrixCopy = [...matrix];
    if (props.winner || matrixCopy[props.index]) return;
    matrixCopy[props.index] = xIsNext ? "X" : "O";
    dispatch({ type: "GAME_UPDATE", matrix: matrixCopy });
    dispatch({ type: "UPDATE_NEXT", xIsNext: !xIsNext });
  };
  return (
    <button
      className="btn btn-default game-fonts"
      value={props.index}
      onClick={onClickHandler}
    >
      {matrix[props.index]}
    </button>
  );
};

export default Square;
