import React, { useState } from 'react'

const Todos = () => {
    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState("");

    const handleAddTodo = () => {
        if(newTodo.trim() !== "") {
            setTodos([...todos, {text: newTodo.trim(), checked: false}]);
            setNewTodo("");
        }
    }

    const handleToggle = (index) => {
        const toggledTodos = [...todos];
        toggledTodos[index].checked = !toggledTodos[index].checked;
        setTodos(toggledTodos);
        }

    const handleDelete = (index) => {
        const deletedTodos = [...todos];
        deletedTodos.splice(index, 1);
        setTodos(deletedTodos);
    }
  return (
    <div>
        <input type="text" value={newTodo} onChange={(e) => setNewTodo(e.target.value)} />
        <button onClick={handleAddTodo}>Add</button>

        <ul>
            {todos.map((todo, index) => (
                <li key={newTodo}>
                    <input type="checkbox" checked={todo.checked} onChange={() => handleToggle(index)}/>
                    <span style={{textDecoration: todo.checked? "line-through" : "none"}}>
                        {todo.text}
                    </span>
                    <button onClick={() => handleDelete(index)}>Delete</button>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default Todos