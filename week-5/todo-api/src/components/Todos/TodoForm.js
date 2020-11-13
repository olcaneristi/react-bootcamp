import React, { useState } from "react"
import axios from "axios"
import Add from "../../assets/icons/add"

/* stackoverflow muthis bir yer. 
"A component is changing an uncontrolled input of type text to be controlled error in ReactJS"
hic beklemedigim bir cozum buldum. ==> input value kismi.*/

function TodoForm({ todos, setTodos }) {
  /* todolarımızı yazdırdığımızda ve istek attığımızda gidecek olan parameterleri belirliyoruz */
  const initialState = {
    id: "",
    message: "",
    user: ""
  }
  const [todo, setTodo] = useState({
    initialState
  })

  const handleChange = (e) => {
    setTodo({
      id: Math.random() * 10000,
      message: e.target.value,
      user: "olcaneristi"
    })
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    setTodos([...todos, todo])
    axios
      .post("https://5faaa23db5c645001602ae7c.mockapi.io/api/todos", todo)
      .then((res) => {
        console.log(res)
      })
      .catch((err) => {
        console.log(err)
      })
    setTodo(initialState)
  }

  return (
    <div className="todoform">
      <form className="todoform__form" onSubmit={handleSubmit}>
        <input
          className="todoform__input"
          onChange={handleChange}
          type="text"
          name="todo"
          placeholder="Enter todo..."
          value={todo.message || ""}
        />
        <button className="todoform__btn" type="submit">
          <Add />
        </button>
      </form>
    </div>
  )
}

export default TodoForm
