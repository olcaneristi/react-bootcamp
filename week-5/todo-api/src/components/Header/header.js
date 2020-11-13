import React from "react"
import Asterisk from "../../assets/icons/asterisk"
import Logo from "../../assets/icons/logo"

function Header() {
  return (
    <div className="header">
      <div className="header__title">
        <Logo />
        <span>TODOGRAM</span>
      </div>
      <div className="header__lines">
        <div className="header__lines--left line"></div>
        <div className="header__lines--star stars">
          <Asterisk />
        </div>
        <div className="header__lines--right line"></div>
      </div>
    </div>
  )
}

export default Header
