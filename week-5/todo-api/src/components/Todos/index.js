import React, { useState, useEffect } from "react"
import TodoForm from "./TodoForm"
import TodoList from "./TodoList"
import axios from "axios"
import Loading from "../../assets/icons/loading"
import Fade from "react-reveal/Fade"

function Todos() {
  const [todoList, setTodoList] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  /* todo arraylerimizi oluşturduk */

  useEffect(() => {
    /* todolarımız için bir HTTP isteği atıyoruz. */
    axios
      .get("https://5faaa23db5c645001602ae7c.mockapi.io/api/todos", {})
      .then((res) => {
        console.log(res)
        setTodoList(res.data)
        setIsLoading(false)
      })
      .catch((err) => {
        console.log(err)
        setIsLoading(false)
      })
  }, [])

  const deleteHandler = (id) => {
    /* todo silme fonksiyonumuzu oluşturup içine delete fonksiyonuyla URL'ye istek atıyoruz.
    filter + axios kullanilacak*/
    axios
      .delete(`https://5faaa23db5c645001602ae7c.mockapi.io/api/todos/${id}`)
      .then((res) => {
        console.log(res)
        const newTodos = todoList.filter((item) => {
          return item.id !== id
        })
        setTodoList(newTodos)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  if (isLoading) {
    return <Loading />
  }

  return (
    <div className="todo__layout">
      <Fade>
        <TodoForm todos={todoList} setTodos={setTodoList} />
        <TodoList todos={todoList} deleteHandler={deleteHandler} />
      </Fade>
    </div>
  )
}

export default Todos
