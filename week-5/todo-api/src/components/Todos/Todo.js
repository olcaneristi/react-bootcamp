import React from "react"
import List from "../../assets/icons/list"
import Trash from "../../assets/icons/trash"

function Todo({ todo, deleteHandler }) {
  return (
    <div className="todo">
      <button className="todo__icon">
        <List />
      </button>
      <div className="todo__message">{todo.message}</div>

      <button className="todo__delete" onClick={() => deleteHandler(todo.id)}>
        <Trash />
      </button>
    </div>
  )
}

export default Todo
