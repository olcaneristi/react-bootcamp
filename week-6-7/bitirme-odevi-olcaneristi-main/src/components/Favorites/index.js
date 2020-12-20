import React, { useState } from "react"
import { Link } from "react-router-dom"
import { BsClock, BsBook, BsPerson } from "react-icons/bs"
import { RiDislikeLine } from "react-icons/ri"
import Modal from "react-modal"
import "./_favorites.scss"
import { HiOutlineStar } from "react-icons/hi"

Modal.setAppElement("#root")


function Favorites({ recipes, favorite, setFavorite }) {
  const [modalIsOpen, setModalIsOpen] = useState(false)

  const removeFavorite = (id) => {
    let index = favorite.indexOf(id)
    console.log(index)
    let temp = [...favorite.slice(0, index), ...favorite.slice(index + 1)]
    setFavorite(temp)
  }

  let findfavorite = recipes.filter((recipe) => favorite.includes(recipe.id))

  return (
    <div className="favorite__list">
      <button
        title="Favori Tarifleriniz"
        className="favorite__list__modal"
        onClick={() => setModalIsOpen(true)}
      >
        <HiOutlineStar />
      </button>
      <Modal
        isOpen={modalIsOpen}
        portalClassName="modal2"
        onRequestClose={() => setModalIsOpen(false)}
      >
        <div className="favorite__list__title">
          <h2>Favori Tarifleriniz</h2>
        </div>
        {findfavorite.map((recipe) => {
          return (
            <div key={recipe.id} className="recipe__card">
              <img src={recipe.image} alt="foods" width={350} height={230} />
              <div className="recipe__card__category">
                <p>{recipe.category}</p>
              </div>
              <h2 className="recipe__card__title">{recipe.title}</h2>
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
              <div className="recipe__card__buttons">
                <button type="button" className="recipe__card__cta">
                  <Link
                    to={{
                      pathname: `/recipes/${recipe.id}`,
                      state: { recipe }
                    }}
                  >
                    Tarifi Goruntule
                  </Link>
                </button>
                <button
                  onClick={() => removeFavorite(recipe.id)}
                  className="recipe__card__unfav"
                >
                  <RiDislikeLine />
                </button>
              </div>
            </div>
          )
        })}
      </Modal>
    </div>
  )
}

export default Favorites
