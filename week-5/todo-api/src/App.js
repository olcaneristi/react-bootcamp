import Header from "./components/Header/header"
import Loader from "./components/Loader/loader"
import Todo from "./components/Todos"
import React, { useState, useEffect } from "react"

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setLoading(false), 5000)
  }, [])

  return (
    <>
      {!loading ? (
        <div className="App">
          <Header />
          <Todo />
        </div>
      ) : (
        <Loader />
      )}
    </>
  )
}

export default App
