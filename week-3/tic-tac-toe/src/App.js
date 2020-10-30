import "./App.scss"
import MainGame from "./components/Game/MainGame"
import Flip from "react-reveal/Flip"
import Loading from "./components/Loading/loading"
import { useEffect, useState } from "react"

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000)
  }, [])

  return (
    <>
      {loading === false ? (
        <div className="App">
          <h2>Tic Tac Toe Game</h2>
          <Flip left duration="2000">
            <MainGame />
          </Flip>
        </div>
      ) : (
        <Loading />
      )}
    </>
  )
}

export default App
