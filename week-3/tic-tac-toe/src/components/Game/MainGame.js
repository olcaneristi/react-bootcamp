import React, { useEffect, useState } from "react"
import GameBoard from "../GameLayout/board"
import Winner from "../Winner/winner"
import "./maingame.scss"

function MainGame() {
  const [rows, setRows] = useState(Array(9).fill(null)) // 9 elemanlı tahtanın içerisini boş değerle doldurduk
  const [isNext, setNext] = useState(true) // siradaki oyuncuyu elde tutmak icin usestate olusturduk

  const handleClick = (e) => {
    // tahtayı yeni tanimladigimiz squares değeri içerisine atıyoruz
    const squares = [...rows]

    // player dolu kareye tiklarsa veya oyun kazanılırsa, return etsin
    if (squares[e] || Winner(rows)) {
      return
    }
    // tıklanınca oluşacak X ve O elemanlarını ekliyoruz
    squares[e] = isNext ? "X" : "O"
    // ardindan sirali sekilde donmelerini yonetelim. (dersteki switch:on-off gibi)
    setRows(squares)
    // X-O donus state'ini ayarliyoruz
    setNext(!isNext)
  }

  // useeffect ile kazanma durumunda ne olacagini alert ile belirttik.
  // alert'in ardindan state'in default hali olarak tanimladigimiz degeri
  // setRows icerisine yazdirdik ve board temizlenmis oldu

  useEffect(() => {
    const winner = Winner(rows)
    if (winner) {
      alert(`Game is over. Player ${winner} won the game!`)
      setRows(Array(9).fill(null))
    }
  }, [rows])

  let moveStep
  moveStep = isNext ? "X" : "O"

  return (
    <>
      <div className="player__winner">
        Move: <span>{moveStep}</span>
      </div>
      <div>
        <GameBoard value={rows} onClick={(e) => handleClick(e)} />
      </div>
    </>
  )
}

export default MainGame
