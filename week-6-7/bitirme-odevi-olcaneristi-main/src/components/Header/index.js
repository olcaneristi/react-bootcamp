import React from "react"
import { Link } from "react-router-dom"
import { router } from "../../config/router"
import "./_header.scss"
import Logo from "../../assets/logo.svg"

function Header() {
  return (
    <div className="header">
      <div className="header__container">
        <div className="header__brand">
          <Link to="/">
            <img src={Logo} alt="findlicious" />
          </Link>
        </div>
        <div className="header__elements">
          {router.map((route, i) => (
            <li key={i} className="header__elements__navbar">
              <Link className="header__elements__items" to={route.path}>
                {route.title}
              </Link>
            </li>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Header
