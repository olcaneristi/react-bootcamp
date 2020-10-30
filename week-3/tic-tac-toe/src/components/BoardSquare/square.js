import React from "react"
import "./square.scss"

function BoardSquare({ value, onClick }) {
  return (
    <div className="square">
      <button type="button" className="square__button" onClick={onClick}>
        {value}
      </button>
    </div>
  )
}

export default BoardSquare
