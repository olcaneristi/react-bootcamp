import React from "react"
import { Hamburger, ItemList, OrderTotal } from "../../components"
import Order from "../../components/Order/Order"
import INGREDIENT_UNIT_PRICES from "../../data"
import "./_home.scss"
import Flip from "react-reveal"

function Home({
  selectedIngredients,
  ingredients,
  totalBurgerPrice,
  addIngredients,
  removeIngredients,
  isOrderVerified
}) {
  return (
    <>
      <Flip bottom>
        <Hamburger ingredients={ingredients} />
        <OrderTotal totalBurgerPrice={totalBurgerPrice} />
        <ItemList
          items={INGREDIENT_UNIT_PRICES}
          addIngredients={addIngredients}
          removeIngredients={removeIngredients}
          selectedIngredients={selectedIngredients}
        />

        <Order isOrderVerified={isOrderVerified}>Order</Order>
      </Flip>
    </>
  )
}

export default Home
