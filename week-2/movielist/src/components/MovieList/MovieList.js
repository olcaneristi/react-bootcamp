import React from "react"
import movies from "../../movies"
import Category from "./Category/index"
import MovieName from "./MovieName/index"
import "./movielist.scss"

function MovieList() {
  const getMovies = () => {
    const description = []
    movies.forEach((movie) => {
      if (!description.includes(movie.description)) {
        description.push(movie.description)
      }
    })
    return description
  }

  return (
    <div className="movielist">
      <div className="movielist__container">
        {getMovies().map((description) => (
          <>
            <div className="movielist__elements">
              <div className="movielist__items">
                <Category description={description} />
                {movies
                  .filter((movie) => movie.description === description)
                  .map((movie) => (
                    <h4 key={movie.id}>
                      <MovieName movie={movie} />
                    </h4>
                  ))}
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  )
}

export default MovieList
