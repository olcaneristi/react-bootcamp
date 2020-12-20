import React from "react"
import "./_footer.scss"
import {
  AiOutlineTwitter,
  AiOutlineGithub,
  AiFillLinkedin
} from "react-icons/ai"

function Footer() {
  return (
    <div className="footer">
      <div className="footer__container">
        <div className="footer__copyright">
          Copyright 2020 ©
          <a
            href="https://www.ogulcaneristi.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ogulcan Eristi
          </a>
          tarafindan hazirlandi.
        </div>
        <div className="footer__socialmedia">
          <a
            className="footer__socialmedia__twitter"
            href="https://twitter.com/ogulcaanX"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            <span className="twitter">
              <AiOutlineTwitter />
            </span>
          </a>
          <a
            className="footer__socialmedia__github"
            href="https://github.com/olcaneristi"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="github">
              <AiOutlineGithub />
            </span>
          </a>
          <a
            className="footer__socialmedia__linkedin"
            href="https://www.linkedin.com/in/ogulcaneristi/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="linkedin">
              <AiFillLinkedin />
            </span>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Footer
