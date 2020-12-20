import React, { useEffect, useState } from "react"
import { useWindowScroll } from "react-use"
import { AiOutlineArrowUp } from "react-icons/ai"
import "./_scroll.scss"

function ScrollToTop() {
  const { y: pageYOffset } = useWindowScroll()
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    pageYOffset > 400 ? setVisible(true) : setVisible(false)
  }, [pageYOffset])

  if (!visible) {
    return false
  }

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" })

  return (
    <div
      className="scroll__to__top"
      onClick={scrollToTop}
      title="Sayfa başına dön"
    >
      <AiOutlineArrowUp />
    </div>
  )
}

export default ScrollToTop
