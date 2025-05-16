import { useState } from "react";

const Todo = () => {
    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState("");

    const handleInput = (e) => {
        setNewTodo(e.target.value);
    }

    const handleAdd = () => {
        if(newTodo.trim() !== "") {
            setTodos([...todos, {text: newTodo.trim()}]);
            setNewTodo("");
        }
    }

    const handleDelete = (index) => {
        const deleteTodo = todos.filter((todo, i) => i !== index);
        setTodos(deleteTodo);
    }

    return ( 
        <>
            <input type="text" value={newTodo} onChange={handleInput}/>
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
     );
}
 
export default Todo;