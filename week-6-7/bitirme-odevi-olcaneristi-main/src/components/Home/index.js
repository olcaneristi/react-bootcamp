import React from "react"
import { Link } from "react-router-dom"
import "./_home.scss"

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <h1 className="home__title">
          Mutfaktan çıkmamak için geçerli en güzel sebep<span>.</span>
        </h1>
        <p className="home__desc">
          Eve kapanmaktan bunaldığınızı biliyoruz ve hayatınızı güzelleştirmek
          adına sizlere şahane çözümlerle geliyoruz. Aklınıza gelen tüm
          yemeklerin tariflerini, yapılışlarını bütün sırlarıyla önünüze
          seriyoruz. Gözden kaçırdığımız bir şeyler mi keşfettiniz? O zaman yeni
          tarifler ekleyerek bu yolculukta bize eşlik edebilirsiniz!
        </p>
        <button type="button" className="home__cta">
          <Link to="/recipes">Haydi başlayalım!</Link>
        </button>
      </div>
    </div>
  )
}

export default Home
