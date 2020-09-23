import React from "react";
import { useSelector } from "react-redux";

const PlayerName = () => {
  const player = useSelector((state) => state);
  return (
    <div className="row">
      <div
        className="col-sm-6"
        style={{ background: "green", fontSize: "24px", color: "#fff" }}
      >
        {"Player 1: " + player.player1}
      </div>
      <div
        className="col-sm-6"
        style={{ background: "gray", fontSize: "24px", color: "#fff" }}
      >
        {"Player 2: " + player.player2}
      </div>
    </div>
  );
};
export default PlayerName;
