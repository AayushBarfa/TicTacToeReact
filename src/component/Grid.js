import React, { useState, useEffect } from "react";
import "../Game.css";
function Grid({ winner, win, grid, changeBlock }) {
  const [player, setPlayer] = useState("X");

  let clickHandel = (e) => {
    if (grid[e.target.id] === null && winner === null) {
      changeBlock(e.target.id, player);
      if (player === "O") setPlayer("X");
      else setPlayer("O");
    }
  };

  return (
    <React.Fragment>
      {console.log(grid, win)}
      <h3 style={{ textAlign: "center" }}>Turn:- Player {player}</h3>
      <div className="container">
        {grid.map((block, i) => {
          {
           
            return (
              <button
                className={win.includes(i) ? "win" : "containerItem"}
                id={i}
                onClick={clickHandel}
              >
                {block}
              </button>
            );
          }
        })}
      </div>
      {winner != null ? (
        <div>
          {winner === "2" ? (
            <h1 style={{ textAlign: "center" }}>Match Draw</h1>
          ) : (
            <h1 style={{ textAlign: "center" }}>Winner:-Player {winner}</h1>
          )}
        </div>
      ) : null}
    </React.Fragment>
  );
}

export default Grid;
