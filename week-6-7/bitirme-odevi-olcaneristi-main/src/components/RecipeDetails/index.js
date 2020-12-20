import React from "react"
import "./_recipedetails.scss"
import { BsClock, BsBook, BsPerson } from "react-icons/bs"
import { FiHeart } from "react-icons/fi"
import { VscChromeClose } from "react-icons/vsc"
import { FaStar } from "react-icons/fa"
import { BiCookie } from "react-icons/bi"
import { Link } from "react-router-dom"
import ReactPlayer from "react-player"
import Fade from "react-reveal/Fade"

function RecipeDetails(props) {
  const details = props.location.state.recipe

  return (
    <div className="recipe__details">
      <div className="recipe__details__container">
        <div className="recipe__details__top">
          <Link to="/recipes">
            <button type="button" className="recipe__details__top--cta">
              <VscChromeClose />
            </button>
          </Link>

          <h1 className="recipe__details__top--title">{details.title}</h1>
        </div>
        <Fade bottom>
          <div className="recipe__details__cover">
            <img
              src={details.image}
              alt="Recipe Cover Img"
              className="recipe__details__cover--img"
              width={840}
              height={558.5}
            />
          </div>
        </Fade>
        <Fade bottom>
          <div className="recipe__details__desc">{details.description}</div>
          <div className="recipe__details__info">
            <div className="recipe__details__sec1">
              <div className="recipe__details__sec1--icons">
                <BsClock />
                <span>{details.time}</span>{" "}
              </div>
              <p className="recipe__details__sec1--text">Dakika</p>
            </div>
            <div className="recipe__details__sec2">
              <div className="recipe__details__sec2--icons">
                <BsBook />
                <span>{details.ingCount}</span>{" "}
              </div>
              <p className="recipe__details__sec2--text">Malzeme</p>
            </div>
            <div className="recipe__details__sec3">
              <div className="recipe__details__sec3--icons">
                <BsPerson />
                <span>{details.servings}</span>
              </div>
              <p className="recipe__details__sec3--text">Kişilik</p>
            </div>
            <div className="recipe__details__sec4">
              <div className="recipe__details__sec4--icons">
                <FiHeart />
                <span>{details.likes}</span>
              </div>
              <p className="recipe__details__sec4--text">Kişi beğendi </p>
            </div>
          </div>
          <div className="recipe__details__video">
            <ReactPlayer
              url={details.videoLink}
              controls={true}
              className="recipe__details__video--vid"
              width="100%"
            />
          </div>
          <div className="recipe__details__ing">
            <h3 className="recipe__details__ing--title">
              <FaStar />
              Malzemeler
            </h3>{" "}
            <p className="recipe__details__ing--text">{details.ingredients}</p>
          </div>

          <div className="recipe__details__make">
            <h3 className="recipe__details__make--title">
              <BiCookie /> Yapılışı
            </h3>
            <p className="recipe__details__make--text">{details.makeDetails}</p>
          </div>
        </Fade>
      </div>
    </div>
  )
}

export default RecipeDetails
