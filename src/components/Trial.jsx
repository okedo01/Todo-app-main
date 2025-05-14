import React, { useState } from 'react'

const Trial = () => {
    const [newTodo, setNewTodo] = useState("");
    const [todos, setTodos] = useState([]);

const handleAdd = () => {
    if(newTodo.trim() !== "") {
        setTodos([...todos, {text: newTodo.trim()}]);
        setNewTodo("");
    }
}

const handleDelete = (index) => {
    console.log("deleted", index);
    const deletedTodos = todos.filter((_, i) => index !== i);
    setTodos(deletedTodos);
}
  return (
    <>
        <input type="text" value={newTodo} onChange={(e) => setNewTodo(e.target.value)} />
        <button onClick={handleAdd}>Add</button>

        <ul>
            {todos.map((todo, index) => (
                <li key={index}>
                    <input type="checkbox" />
                    <span>{todo.text}</span>
                    <button onClick={() => handleDelete(index)}>Delete</button>
                </li>
            ))}
        </ul>
    </>
  )
}

export default Trial