import React, { useState } from 'react'

const Trial = () => {
    const [newTodo, setNewTodo] = useState("");
    const [todos, setTodos] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        setNewTodo(e.target.value);

        if(newTodo.trim() !== "") {
            setTodos([...todos, {text: newTodo.trim(), checked: false}])
            setNewTodo("");
        }
    }

    const handleToggle = (index) => {

    }
  return (
    <>
        <form onSubmit={handleSubmit}>
            <input type="text" value={newTodo} onChange={(e) => e.target.value} />
            <button type="submit" onClick={handleAdd}>Add</button>
        </form>
        <ul>
            {todos.map((todo, index) => (
                <li key={newTodo}>
                    <input type="checkbox" checked={todo.checked} />
                </li>
            ))}
        </ul>
    </>
  )
}

export default Trial