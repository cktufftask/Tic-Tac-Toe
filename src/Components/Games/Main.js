import React from "react";
import Player from "./Player";
import Header from "./Header";
import Footer from "./Footer";
import Game from "./Game";

const Main = () => {
  return (
    <>
      <div className="App container">
        <Header title={'Tic-Tac-Toe Game'}/>
        <Player />
        <Game />
      </div>
      <Footer message={'@chandan'} />
    </>
  );
};

export default Main;
