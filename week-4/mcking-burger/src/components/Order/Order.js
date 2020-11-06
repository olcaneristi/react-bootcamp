import React from "react"
import { useHistory } from "react-router-dom"
import { IoMdClose, IoMdCheckmark } from "react-icons/io"

function Order({ isOrderVerified }) {
  const history = useHistory()

  const orderHandleClick = () => {
    history.push("./checkout")
  }

  return (
    <div className="order">
      {isOrderVerified !== 0 ? (
        <button onClick={orderHandleClick} className="order__button__enabled">
          <IoMdCheckmark /> Siparis vermek icin tiklayin.
        </button>
      ) : (
        <button className="order__button__disabled">
          <IoMdClose /> Lutfen malzeme ekleyin!
        </button>
      )}
    </div>
  )
}

export default Order
