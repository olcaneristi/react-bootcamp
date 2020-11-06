import React from "react"
import "./_order.scss"

function TotalPrice(props) {
  return (
    <div className="summary">
      Checkout: <span>{props.totalBurgerPrice()} TL</span>
    </div>
  )
}

export default TotalPrice
