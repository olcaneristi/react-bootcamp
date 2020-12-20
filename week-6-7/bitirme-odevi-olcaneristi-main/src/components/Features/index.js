import React from "react"
import "./_feature.scss"
import Carousel from "react-elastic-carousel"
import { Link } from "react-router-dom"
import { Fade } from "react-reveal"

function Features({ recipes }) {
  return (
    <Fade>
      <div className="features">
        <h1 className="features__title">Günün Tarifleri</h1>
        <Carousel enableAutoPlay={true} autoPlaySpeed={4000} transitionMs={700}>
          {recipes.map((recipe) => {
            return (
              <div key={recipe} className="features__recipe__item">
                <Link
                  to={{
                    pathname: `/recipes/${recipe.id}`,
                    state: { recipe }
                  }}
                >
                  <img
                    src={recipe.coverImage}
                    className="features__recipe__img"
                    alt="features__cover"
                    width={720}
                    height={480}
                  />
                </Link>
              </div>
            )
          })}
        </Carousel>
      </div>{" "}
    </Fade>
  )
}
export default Features
