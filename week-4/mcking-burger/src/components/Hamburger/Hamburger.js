import React from "react"
import "./_hamburger.scss"

function Hamburger(props) {
  return (
    <div className="hamburger">
      <div className="hamburger__bread__top"></div>

      {props.ingredients.map((ingredient) => {
        return (
          <div
            className="hamburger__ingredient"
            key={ingredient.displayId}
            style={{
              background: ingredient.color
            }}
          ></div>
        )
      })}
      <div className="hamburger__bread__bottom"></div>
    </div>
  )
}

export default Hamburger
