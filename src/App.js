import React, { useState } from "react";
import "./App.css";
import Square from "./components/Square.js";

const App = () => {
  const [board, setBoard] = useState([
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
  ]);

  return (
    <>
      <h1>Treasure Hunt Game</h1>
      <div className="board">
        {board.map((value, index) => {
          return <Square value={value}/>;
        })}
      </div>
    </>
  );
};

export default App;
