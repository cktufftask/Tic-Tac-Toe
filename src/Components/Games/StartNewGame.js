import React from "react";
import Demo from './Demo';
import { useSelector, useDispatch } from "react-redux";

const StartNewGame = (props) => {
  const dispatch = useDispatch();
  const matrix = useSelector((state) => state.matrix);
  const order = useSelector((state) => state.order);
  const isDemo = useSelector((state) => state.isDemo);
  const clear = () => {
    let matrixCopy = matrix;
    matrixCopy = new Array(9).fill(null);
    let orderCopy =order;
    orderCopy=[];
    dispatch({ type: "UPDATE_ORDER", order: orderCopy });
    dispatch({ type: "GAME_UPDATE", matrix: matrixCopy });
    dispatch({ type: "SHOW_DEMO", isDemo: false });
  };
  const showDemo=()=>{
    dispatch({ type: "SHOW_DEMO", isDemo:  !isDemo});
  }
  return (
    <p>
      <button className="btn btn-success p-15 m-10" onClick={clear}>
        Play Again{" "}
      </button>
      <button
        className="btn btn-success p-15 m-10"
        onClick={() => window.location.reload()}
      >
        Start New Game
      </button>
     { props.winner!==-1 && <button
        className="btn btn-success p-15 m-10"
        onClick={showDemo}
      >
        {!isDemo?'Show Demo':'Hide Demo'}
      </button>}
    
    </p>
  );
};

export default StartNewGame;
