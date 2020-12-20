import React from "react"
import MainLoading from "./mainloading.gif"

function Loading() {
  return (
    <div className="main__loading">
      <img
        className="main__loading__image"
        src={MainLoading}
        alt="Loading..."
        width={200}
      />
    </div>
  )
}

export default Loading
