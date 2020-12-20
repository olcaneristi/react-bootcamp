import Header from "./components/Header"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import "./assets/_main.scss"
import RecipeDetails from "./components/RecipeDetails"
import Home from "./components/Home"
import Recipes from "./components/Recipes"
import Footer from "./components/Footer"
import { useEffect, useState } from "react"
import Loading from "./components/Loading/loading"

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000)
  }, [])

  return (
    <>
      {!loading ? (
        <div className="App">
          <Router>
            <Header />
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/recipes" exact component={Recipes} />
              <Route path="/recipes/:id" component={RecipeDetails} />
            </Switch>
            <Footer />
          </Router>
        </div>
      ) : (
        <Loading />
      )}
    </>
  )
}

export default App
