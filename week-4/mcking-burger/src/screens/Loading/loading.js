import React from "react"
import Loader from "./loading.gif"
import "./_loading.scss"

function Loading() {
  return (
    <div className="loading">
      <img src={Loader} alt="loader1" />
    </div>
  )
}

export default Loading
