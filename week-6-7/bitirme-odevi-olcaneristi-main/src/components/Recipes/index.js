import React, { useState, useEffect } from "react"
import axios from "axios"
import Card from "../Card"
import Pagination from "../Pagination"
import Features from "../Features"
import "./_recipe.scss"
import Loading from "../Loading/loading.gif"
import "../Loading/_loading.scss"
import ScrollToTop from "../ScrollToTop"

function Recipes() {
  const [recipes, setRecipes] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage] = useState(9)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      axios
        .get("YOUR_URL_HERE")
        .then((res) => {
          setRecipes(res.data)
          setLoading(false)
        })
        .catch((err) => {
          console.error(err)
        })
    }, 1000)
  }, [])

  const indexOfLastPost = currentPage * postsPerPage
  const indexOfFirstPost = indexOfLastPost - postsPerPage
  const currentPosts = recipes.slice(indexOfFirstPost, indexOfLastPost)
  const paginate = (pageNumbers) => setCurrentPage(pageNumbers)

  return (
    <div className="recipe">
      {loading && (
        <div className="recipe__loading">
          <img src={Loading} alt="loading" />
        </div>
      )}
      {!loading && (
        <>
          <Features recipes={recipes} />
          <Card recipes={currentPosts} setRecipes={setRecipes} />
          <ScrollToTop />
          <Pagination
            postsPerPage={postsPerPage}
            totalPosts={recipes.length}
            paginate={paginate}
          />
        </>
      )}
    </div>
  )
}

export default Recipes
