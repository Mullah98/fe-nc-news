import { useState } from 'react'
import './App.css'
import { AddTodo, DeleteTodo, Todo, ToggleTodo } from './Types'
import { TodoList } from './TodoList'
import { TodoForm } from './TodoForm'

const listOfTodos: Array<Todo> = [
  {text: 'Take out trash', complete: false},
  {text: 'Wash sneakers', complete: true},
  {text: 'Renew car insurance', complete: true}
]

function App() {
  const [todos, setTodos] = useState(listOfTodos)

  const toggleTodo: ToggleTodo = selectedTodo => {
    const newTodo = todos.map(todo => {
      if (todo === selectedTodo) {
        return {...todo, complete: !todo.complete}
      }
      return todo
    })
    setTodos(newTodo)
  }

  const addTodo: AddTodo = newTodo => {
    setTodos([...todos, {text: newTodo, complete: false}])
  }

  const deleteTodo: DeleteTodo = selectedTodo => {
    const newTodo = todos.filter(todo => todo !== selectedTodo)
    setTodos(newTodo)
  }

  return (
    <div className='todo-container'>
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
    </div>
  )
}

export default App
