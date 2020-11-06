import React from "react"
import { Link } from "react-router-dom"
import Logo from "./logo.svg"
import "./_header.scss"

const Header = ({ resetIngredients }) => {
  return (
    <div className="header">
      <div className="header__wrapper">
        <h2 className="header__title">McKing Burger</h2>

        <img className="header__logo" src={Logo} alt="McKing" />
        <button className="header__button" onClick={() => resetIngredients()}>
          <Link to="/" className="header__button__nav">
            Home
          </Link>
        </button>
      </div>
    </div>
  )
}

export default Header
