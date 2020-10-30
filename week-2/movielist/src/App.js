import React from "react"
import "./App.scss"
import movies from "./movies"
import MovieList from "./components/MovieList/MovieList"

console.log(movies)

function App() {
  return (
    <div className="container">
      <h1 className="container__text">Film Listesi</h1>
      <div>
        <MovieList />
      </div>
    </div>
  )
}

export default App
