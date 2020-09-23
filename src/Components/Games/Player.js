import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
const Player = (props) => {
  const dispatch = useDispatch();
  const gameStart = useSelector((state) => state.gameStart);
  const [p1, setP1] = useState("");
  const [p2, setP2] = useState("");
  const [flag, setFlag] = useState("disabled");

  const onHandler = () => {
    if (p1 && p2) {
      dispatch({ type: "ADD_PLAYER_1", player: p1 });
      dispatch({ type: "ADD_PLAYER_2", player: p2 });
      dispatch({ type: "GAME_START", gameStart: true });
    }
  };

  useEffect(() => {
    setFlag(p1 && p2 ? "" : "disabled");
  });
  return (
    <div className="row" style={{ display: gameStart ? "none" : "block" }}>
      <div className="col-sm-4"></div>
      <div
        className="col-sm-4"
        style={{
          border: "2px solid gray",
          padding: "15px",
          boxShadow: "3px 3px 5px 6px #ccc",
        }}
      >
        <div className="form-group">
          <label>First Player Name: </label>
          <input
            type="text"
            className="form-control"
            value={p1}
            pattern="[A-Za-z]"
            onChange={(e) => setP1(e.target.value.replace(/[^A-Za-z]/gi, ""))}
          />
        </div>
        <div className="form-group">
          <label>Second Player Name: </label>
          <input
            type="text"
            className="form-control"
            value={p2}
            pattern="[A-Za-z]"
            onChange={(e) => setP2(e.target.value.replace(/[^A-Za-z]/gi, ""))}
          />
        </div>
        <button className="btn btn-success" onClick={onHandler} disabled={flag}>
          Play Game
        </button>
      </div>
      <div className="col-sm-4"></div>
    </div>
  );
};
export default Player;
