import React, { useState, useEffect } from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { Checkout, Home, Loading } from "./screens"
import Header from "./components/Header/"
import "./_App.scss"

const App = () => {
  const [ingredients, setIngredients] = useState([]) // malzemeler array icerisine atilacak
  const [count, setCount] = useState(0) // eklenen-silinen malzeme count icerisinde tutulacak
  const [loading, setLoading] = useState(true) // loading ekrani icin.

  // home butonuna basip geri donmek icin aklima gelen en pratik fikir bu oldu. bastigimizda state'leri sifirlamak.
  const resetIngredients = () => {
    setIngredients([])
    setCount(0)
  }

  // toplam burger fiyatlarini calculatetotal fonksiyonunda sakliyoruz.
  const calculateTotal = () => {
    let totalBurgerPrice = 4
    ingredients.forEach((item) => (totalBurgerPrice += item.price))
    return totalBurgerPrice.toFixed(2)
  }

  // malzemelerimizi eklemek icin bir function olusturduk ve icerisinde unique random id basmasini istedik.
  const addIngredients = (product) => {
    setCount((prevCount) => prevCount + 1)
    setIngredients(
      // basilan malzemelerin id'lerine gore sirali sekilde sort edilmesini sagladik
      [...ingredients, { ...product, displayId: Math.random() * 10 }].sort(
        function (product1, product2) {
          return product1.id - product2.id
        }
      )
    )
  }

  // malzeme silme fonksiyonu olusturduk ve icerisinde birbirine es gelen malzeme isimlerini bularak silmesini istiyoruz.

  const removeIngredients = (product) => {
    const selectedProduct = ingredients.find(
      (ingredient) => ingredient.name === product.name
    )

    setIngredients(
      ingredients.filter(
        (ingredient) => ingredient.displayId !== selectedProduct.displayId
      )
    )
  }

  // if blogu ile yapmayi beceremedigim icin tekrar useeffect kullanmak durumunda kaldim
  useEffect(() => {
    setTimeout(() => setLoading(false), 4000)
  }, [])

  return (
    <>
      {loading === false ? (
        <div className="App">
          <Router>
            <Header resetIngredients={() => resetIngredients()} />
            <Switch>
              <Route path="/checkout">
                <Checkout
                  ingredients={ingredients}
                  totalBurgerPrice={() => calculateTotal()}
                />
              </Route>

              <Route path="/">
                <Home
                  ingredients={ingredients}
                  totalBurgerPrice={() => calculateTotal()}
                  addIngredients={(i) => addIngredients(i)}
                  removeIngredients={(i) => removeIngredients(i)}
                  selectedIngredients={ingredients}
                  isOrderVerified={count}
                />
              </Route>
            </Switch>
          </Router>
        </div>
      ) : (
        <Loading />
      )}
    </>
  )
}

export default App
