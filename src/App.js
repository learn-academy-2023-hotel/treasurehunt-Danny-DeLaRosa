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

  const handleSquareClick = (clickedSquareIndex) => {
    let updatedBoard = [...board]
    // use the index to update the current square's value with an emoji
    updatedBoard[clickedSquareIndex] = "🍔"
    setBoard(updatedBoard)
    // alert(clickedSquareIndex);
  };

  return (
    <>
      <h1>Treasure Hunt Game</h1>
      <div className="board">
        {board.map((value, index) => {
          return (
            <Square
              value={value}
              index={index}
              handleSquareClick={handleSquareClick}
            />
          );
        })}
      </div>
    </>
  );
};

export default App;
