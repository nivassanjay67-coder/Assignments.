import React from 'react'

function Todo() {
    const todos = [
    { id: 1, task: "Buy groceries" },
    { id: 2, task: "Finish homework" },
    { id: 3, task: "Clean the house" },
    { id: 4, task: "Pay bills" },
    { id: 5, task: "Read a book" }
  ]
  return (
    <div>
        <h2>Todo List</h2>

      <ul>
        {todos.map((Todo) => (
          <li key={Todo.id}>{Todo.task}</li>
        ))}
      </ul>
    </div>
  )
}

export default Todo