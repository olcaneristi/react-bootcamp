import React, { useState } from "react"
import { Link } from "react-router-dom"
import "./_card.scss"
import { FiHeart } from "react-icons/fi"
import Fade from "react-reveal/Fade"
import { AiFillDelete } from "react-icons/ai"

function CardButton({ recipe, addToFavorite, deleteHandler }) {
  const [likeButton, setLikeButton] = useState(recipe.likes)

  const onClick = (e) => {
    addToFavorite(recipe.id)
    setLikeButton((prevCount) => prevCount + 1)
  }
  return (
    <div className="recipe__card__buttons">
      <Fade bottom>
        <button type="button" className="recipe__card__cta" role="button">
          <Link
            to={{
              pathname: `/recipes/${recipe.id}`,
              state: { recipe }
            }}
          >
            Tarifi Görüntüle
          </Link>
        </button>
        <button
          className="recipe__card__fav"
          title="Favorilere Ekle"
          onClick={onClick}
          role="button"
        >
          <FiHeart /> <span>{likeButton}</span>
        </button>
      </Fade>
      <button
        className="recipe__card__remove"
        onClick={() => deleteHandler(recipe.id)}
        title="Tarifi sil"
      >
        <AiFillDelete />
      </button>
    </div>
  )
}

export default CardButton
