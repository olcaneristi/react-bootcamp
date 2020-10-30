import React from "react"
import { BiCameraMovie } from "react-icons/bi"
import "./moviename.scss"

function MovieName({ movie }) {
  return (
    <div className="movie__title">
      <BiCameraMovie /> {movie.id} - {movie.title}
    </div>
  )
}

export default MovieName
