import React from "react"
import { Hamburger, OrderTotal } from "../../components"
import "./_checkout.scss"
import SvgCheckmark from "./checkmark"

function Result({ ingredients, totalBurgerPrice }) {
  return (
    <div className="checkout">
      <Hamburger ingredients={ingredients} />
      <OrderTotal totalBurgerPrice={totalBurgerPrice} />
      <div className="checkout__complete">
        <SvgCheckmark />
        <p>Siparisiniz alinmistir. Daha fazlasi icin {""}</p>
        <a
          href="https://github.com/olcaneristi"
          target="_blank"
          rel="noreferrer"
        >
          tiklayin.
        </a>
      </div>
    </div>
  )
}

export default Result
