import React from "react"
import BoardSquare from "../BoardSquare/square"
import "./board.scss"
import Flash from "react-reveal/Flash"

function Board({ onClick, value }) {
  const gameSquare = (e) => {
    return <BoardSquare value={value[e]} onClick={() => onClick(e)} />
  }
  return (
    <div className="board">
      <Flash duration="3200">
        <div className="board__items">
          {gameSquare(0)}
          {gameSquare(1)}
          {gameSquare(2)}
        </div>
        <div className="board__items">
          {gameSquare(3)}
          {gameSquare(4)}
          {gameSquare(5)}
        </div>
        <div className="board__items">
          {gameSquare(6)}
          {gameSquare(7)}
          {gameSquare(8)}
        </div>
      </Flash>
    </div>
  )
}

export default Board
