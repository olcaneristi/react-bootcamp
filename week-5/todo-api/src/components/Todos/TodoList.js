import React from "react"
import Todo from "./Todo"

function TodoList({ todos, deleteHandler }) {
  return (
    <div className="todolist">
      {todos.map((todo) => {
        return <Todo key={todo.id} todo={todo} deleteHandler={deleteHandler} />
      })}
    </div>
  )
}

export default TodoList
