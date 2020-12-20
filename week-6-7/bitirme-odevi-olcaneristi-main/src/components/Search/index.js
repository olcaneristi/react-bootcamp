import React from "react"
import "./_search.scss"
import { FiSearch } from "react-icons/fi"

function Search({ setSearchTerm }) {
  return (
    <div className="recipe__search">
      <div className="recipe__search__container">
        <input
          className="recipe__search__container__input"
          type="text"
          placeholder="Tarif Ara"
          onChange={(event) => {
            setSearchTerm(event.target.value)
          }}
        />
        <FiSearch />
      </div>
    </div>
  )
}

export default Search
