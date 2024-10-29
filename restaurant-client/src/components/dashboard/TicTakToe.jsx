import React, { useState } from "react";
import "./TicTacToe.css";
import circle from "../../assets/tic-tack-toe/circle.png";
import cross from "../../assets/tic-tack-toe/cross.png";

const TicTacToe = () => {
  let [data, setData] = useState(["", "", "", "", "", "", "", "", ""]);
  let [count, setCount] = useState(0);
  let [lock, setLock] = useState(false);

  const toggle = (e, num) => {
    if (lock || data[num] !== "") {
      return; // If the game is locked or the cell is already filled, do nothing
    }

    const newData = [...data];

    if (count % 2 === 0) {
      e.target.innerHTML = `<img src='${cross}'>`;
      newData[num] = "x";
      setCount((prevCount) => prevCount + 1);
    } else {
      e.target.innerHTML = `<img src='${circle}'>`;
      newData[num] = "o";
      setCount((prevCount) => prevCount + 1);
    }

    setData(newData);
    checkWin(newData);
  };

  const checkWin = (currentData) => {
    const winPatterns = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (const pattern of winPatterns) {
      const [a, b, c] = pattern;
      if (currentData[a] && currentData[a] === currentData[b] && currentData[a] === currentData[c]) {
        setLock(true);
        return;
      }
    }

    // Check for a tie (if all cells are filled and no winner)
    if (!currentData.includes("") && !lock) {
      setLock(true);
    }
  };

  const resetGame = () => {
    setData(["", "", "", "", "", "", "", "", ""]);
    setCount(0);
    setLock(false);

    const boxes = document.querySelectorAll(".boxes");
    boxes.forEach((box) => (box.innerHTML = ""));
  };

  return (
    <div className="bg-gray-300">
      <div>
        <div className="">
          <h1 className="text-5xl text-center mb-10 text-white">Tic Tac Toe</h1>
        </div>

        <div className="board">
          <div className="row1">
            <div onClick={(e) => toggle(e, 0)} className="boxes"></div>
            <div onClick={(e) => toggle(e, 1)} className="boxes"></div>
            <div onClick={(e) => toggle(e, 2)} className="boxes"></div>
          </div>
          <div className="row2">
            <div onClick={(e) => toggle(e, 3)} className="boxes"></div>
            <div onClick={(e) => toggle(e, 4)} className="boxes"></div>
            <div onClick={(e) => toggle(e, 5)} className="boxes"></div>
          </div>
          <div className="row3">
            <div onClick={(e) => toggle(e, 6)} className="boxes"></div>
            <div onClick={(e) => toggle(e, 7)} className="boxes"></div>
            <div onClick={(e) => toggle(e, 8)} className="boxes"></div>
          </div>
        </div>

        {lock && (
          <div className="text-center mt-4">
            <p className="text-lg font-bold">Game Over!</p>
            <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded" onClick={resetGame}>
              Restart Game
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default TicTacToe;
