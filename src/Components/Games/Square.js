import React from "react";
import { useSelector, useDispatch } from "react-redux";

const Square = (props) => {
  const xIsNext = useSelector((state) => state.xIsNext);
  const matrix = useSelector((state) => state.matrix);
  const order = useSelector((state) => state.order);
  const dispatch = useDispatch();

  const onClickHandler = () => {
    const matrixCopy = [...matrix];
    if (props.winner || matrixCopy[props.index]) return;
    matrixCopy[props.index] = xIsNext ? "X" : "O";
    let orderCopy =order;
    orderCopy.push(props.index);
    dispatch({ type: "GAME_UPDATE", matrix: matrixCopy });
    dispatch({ type: "UPDATE_NEXT", xIsNext: !xIsNext });
    dispatch({ type: "UPDATE_ORDER", order: orderCopy });
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
