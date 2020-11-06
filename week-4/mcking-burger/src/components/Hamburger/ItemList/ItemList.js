import React from "react"
import Item from "../Item"

function ItemList(props) {
  return (
    <>
      {props.items.map((item) => {
        // secili malzemelerin sayilarini hepsine yazdirmak yerine kendi stateleri icerisinde saklamak istiyoruz.
        const isThere = props.selectedIngredients.find((ingredient) => {
          return ingredient.title === item.title
        })
        const howMany = props.selectedIngredients.filter((ingredient) => {
          return item.title === ingredient.title
        })
        return (
          <Item
            key={item.id}
            {...item}
            addIngredients={props.addIngredients}
            removeIngredients={props.removeIngredients}
            visibleButton={isThere}
            ingredientCount={howMany.length}
          />
        )
      })}
    </>
  )
}

export default ItemList
