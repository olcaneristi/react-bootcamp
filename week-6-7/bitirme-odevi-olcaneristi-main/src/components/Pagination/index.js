import React from "react"
import { Link } from "react-router-dom"
import "./_pagination.scss"

function Pagination({ postsPerPage, totalPosts, paginate }) {
  const pageNumbers = []

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i)
  }

  return (
    <div className="pagination">
      <nav className="pagination__nav">
        <ul>
          {pageNumbers.map((number, index) => (
            <Link
              key={index}
              to="#"
              className="pagination__nav__link"
              onClick={() => paginate(number)}
            >
              {number}
            </Link>
          ))}
        </ul>
      </nav>
    </div>
  )
}

export default Pagination
