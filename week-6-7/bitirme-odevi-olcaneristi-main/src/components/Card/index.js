import React, { useState } from "react"
import AddRecipes from "../AddRecipes"
import Favorites from "../Favorites"
import Search from "../Search"
import CardButton from "./CardButton"
import CardText from "./CardText"
import "./_card.scss"
import Zoom from "react-reveal/Fade"
import axios from "axios"

function Card({ recipes, setRecipes }) {
  const [searchTerm, setSearchTerm] = useState("")
  const [favorite, setFavorite] = useState([])

  const addToFavorite = (id) => {
    if (!favorite.includes(id)) setFavorite(favorite.concat(id))
    console.log(id)
  }

  let filtered = recipes.filter((recipe) => {
    if (searchTerm === "") {
      return recipe
    } else if (recipe.title.toLowerCase().includes(searchTerm.toLowerCase())) {
      return recipe
    }
  })

  const deleteHandler = (id) => {
    axios
      .delete(`YOUR_URL_HERE/${id}`)
      .then((res) => {
        console.log(res)
        const newRecipes = recipes.filter((item) => {
          return item.id !== id
        })
        setRecipes(newRecipes)
      })
      .catch((err) => {
        console.error(err)
      })
  }

  return (
    <div className="recipe__container">
      <div className="recipe__extras">
        <Zoom>
          <Search setSearchTerm={setSearchTerm} />
          <Favorites
            recipes={recipes}
            favorite={favorite}
            setFavorite={setFavorite}
          />
          <AddRecipes recipes={recipes} setRecipes={setRecipes} />
        </Zoom>
      </div>
      <div className="recipe__list">
        {filtered.map((recipe) => {
          return (
            <div key={recipe.id} className="recipe__card">
              {" "}
              <Zoom>
                <img
                  src={recipe.image}
                  alt="Recipe img comp"
                  width={350}
                  height={230}
                />
              </Zoom>
              <CardText recipe={recipe} />
              <CardButton
                recipe={recipe}
                addToFavorite={addToFavorite}
                deleteHandler={deleteHandler}
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Card
