import React, { useState } from 'react'

const Trial = () => {
    const [newTodo, setNewTodo] = useState("");
    const [todos, setTodos] = useState([]);

const handleAdd = () => {
    if(newTodo.trim() !== "") {
        setTodos([...todos, {text: newTodo.trim}]);
        setNewTodo("");
    }
}

// const handleToggle = (index) => {
//     const toggleTodo = setTodos([...todos]);
//     toggleTodo(index).checked = !toggleTodo(index).checked;
// }
  return (
    <>
        <input type="text" value={newTodo} onChange={(e) => setNewTodo(e.target.value)} />
        <button onClick={handleAdd}>Add</button>

        <ul>
            {todos.map((todo, index) => (
                <p key={index}>
                    {todo.text}
                </p>
            ))}
        </ul>

        {/* <ul>
            {todos.map((todo, index) => (
                <li>
                    <input type="checkbox" checked={todo.checked} onChange={() => handleToggle(index)} />
                    <span>{todo.text}</span>
                    <button onClick={handleDelete}>Delete</button>
                </li>
            ))}
        </ul> */}
    </>
  )
}

export default Trial


// import React, { useState } from 'react';

// const Trial = () => {
//     const [newTodo, setNewTodo] = useState("");
//     const [todos, setTodos] = useState([]);

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         if (newTodo.trim() !== "") {
//             setTodos([...todos, { text: newTodo.trim(), checked: false }]);
//             setNewTodo("");
//         }
//     };

//     const handleToggle = (index) => {
//         const updatedTodos = todos.map((todo, i) =>
//             i === index ? { ...todo, checked: !todo.checked } : todo
//         );
//         setTodos(updatedTodos);
//     };

//     return (
//         <>
//             <form onSubmit={handleSubmit}>
//                 <input
//                     type="text"
//                     value={newTodo}
//                     onChange={(e) => setNewTodo(e.target.value)}
//                 />
//                 <button type="submit">Add</button>
//             </form>
//             <ul>
//                 {todos.map((todo, index) => (
//                     <li key={index}>
//                         <input
//                             type="checkbox"
//                             checked={todo.checked}
//                             onChange={() => handleToggle(index)}
//                         />
//                         {todo.text}
//                     </li>
//                 ))}
//             </ul>
//         </>
//     );
// };

// export default Trial;
