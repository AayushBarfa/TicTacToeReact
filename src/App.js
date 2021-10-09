import React, { useState } from "react";
import Grid from "./component/Grid";
import "./Game.css";
function App() {
  const [grid, setGrid] = useState(new Array(9).fill(null));
  const [winner, setWinner] = useState(null);
  const [count, setCount] = useState(0);
  const [winGround, setWinGround] = useState([]);
   function changeBlock(index, player) {
    let arr = [...grid];
    arr[index] = player;
    setGrid(arr);
    setCount(count + 1);

    if (count === 8 && winner === null) setWinner("2");
     calculateWinner(arr);
    console.log(count, winner);
   
    console.log(winner);
  }

  function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        squares[a] != null &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        setWinGround([...lines[i]]);
        setWinner(squares[a]);
      }
    }
    return null;
  }

  return (
    
    <React.Fragment>
    <h1 className="title">Tic-Tac-Toe</h1>
    <div className="App">

    <div className="App">
     

      <Grid
        winner={winner}
        win={winGround}
        grid={grid}
        changeBlock={changeBlock}
      />
      
    </div>
    </React.Fragment>
  );
}

export default App;
