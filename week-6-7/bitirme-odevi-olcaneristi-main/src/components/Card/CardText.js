import React from "react"
import { BsClock, BsBook, BsPerson } from "react-icons/bs"
import "./_card.scss"
import Fade from "react-reveal/Fade"

function CardText({ recipe }) {
  return (
    <>
      <Fade top>
        <div className="recipe__card__category">
          <p>{recipe.category}</p>
        </div>
        <h2 className="recipe__card__title">{recipe.title}</h2>
      </Fade>
      <Fade bottom>
        <div className="recipe__card__info">
          <div className="recipe__card__sec1">
            <div className="recipe__card__sec1--icons">
              <BsClock />
              <span>{recipe.time}</span>{" "}
            </div>
            <p className="recipe__card__sec1--text">Dakika</p>
          </div>
          <div className="recipe__card__sec2">
            <div className="recipe__card__sec2--icons">
              <BsBook />
              <span>{recipe.ingCount}</span>{" "}
            </div>
            <p className="recipe__card__sec2--text">Malzeme</p>
          </div>
          <div className="recipe__card__sec3">
            <div className="recipe__card__sec3--icons">
              <BsPerson />
              <span>{recipe.servings}</span>
            </div>
            <p className="recipe__card__sec3--text">Kişilik</p>
          </div>
        </div>
        <h4 className="recipe__card__desc">
          {recipe.description.length < 100
            ? `${recipe.description}`
            : `${recipe.description.substring(0, 120)}...`}
        </h4>
      </Fade>
    </>
  )
}

export default CardText
