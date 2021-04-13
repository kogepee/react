import React, { useState } from 'react'
import Form from './Form'
import List from './List'
import shortid from 'shortid'

const App = () => {
  const [todos, setTodos] = useState([
    
  ])

  const addTodo = content => {
    setTodos([
      ...todos,
      {
        content: content,
        id: shortid.generate()
      }
    ])
  }

  const deleteTodo = id => {
    setTodos(todos.filter(todo => todo.id !== id))
}

  return (
    <React.Fragment>
      <h1>Hello World!</h1>
      <Form addTodo={addTodo} />
      <List todos={todos} deleteTodo={deleteTodo}/>
    </React.Fragment>
  )
}

export default App