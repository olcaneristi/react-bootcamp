import React from "react"
import "./category.scss"
import { MdMovieFilter } from "react-icons/md"

function Category({ description }) {
  return (
    <div className="movie__category">
      <MdMovieFilter /> {description}
    </div>
  )
}

export default Category
