import React from "react";
import { useSelector } from "react-redux";
import Square from "./Square";

const Board = (props) => {
  const matrix = useSelector((state) => state.matrix);
  const list = matrix.map((i, index) => <Square index={index} key={index} />);
  return <div className="btn-group btn-matrix">{list}</div>;
};

export default Board;
