import React, { useState } from "react";

import Square from "./components/Square";

import "./App.css";


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

  const [treasureLocation, setTreasureLocation] = useState(
    Math.floor(Math.random() * board.length)
  );

  const [bombLocation, setBombLocation] = useState(
    Math.floor(Math.random() * board.length)
  );

  const handleSquareClick = (clickedSquareIndex) => {
    // create a variable holding copy of current state
    let updatedBoard = [...board];
    // set condition for if treasure location is same as clicked square's index show a treasure
    if (clickedSquareIndex === treasureLocation) {
      // then reassign state value at that index to treasure emoji
      updatedBoard[clickedSquareIndex] = "💎";
      // setBoard(updatedBoard)
    } else if (clickedSquareIndex === bombLocation) {
      updatedBoard[clickedSquareIndex] = "💣";
      // setBoard(updatedBoard)
    } else {
      // use index to update the current square's value with emoji
      updatedBoard[clickedSquareIndex] = "🌴";
      setBoard(updatedBoard);
      // alert(clickedSquareIndex)
    }
    setBoard(updatedBoard);
  };
  const reset = () => {
    window.location.reload()
  }
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
      <button className="button" onClick={reset}> Play Again </button>
    </>
  );
};

export default App;
