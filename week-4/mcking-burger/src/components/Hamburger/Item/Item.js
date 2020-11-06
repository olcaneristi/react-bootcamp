import React from "react"
import "./_item.scss"
import { FaPlus, FaMinus } from "react-icons/fa"

function Item(props) {
  return (
    <div className="itemcontrol">
      <div className="itemcontrol__title">
        <div className="itemcontrol__price">
          {props.title} <span>{props.price}TL</span>
        </div>
        <div className="itemcontrol__piece">
          Qty: <span>{props.ingredientCount}</span>
        </div>
      </div>

      <div className="itemcontrol__button">
        {props.visibleButton ? (
          <button
            className="itemcontrol__button__less"
            onClick={() => {
              props.removeIngredients(props)
            }}
          >
            <FaMinus /> Çıkart
          </button>
        ) : (
          <button className="itemcontrol__button__less disabled">
            <FaMinus /> Çıkart
          </button>
        )}
        <button
          className="itemcontrol__button__more"
          onClick={() => {
            props.addIngredients(props)
          }}
        >
          <FaPlus /> Ekle
        </button>
      </div>
    </div>
  )
}

export default Item
