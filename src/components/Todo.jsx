import { useState } from "react";

const Todo = () => {
    const [newTodo, setNewTodo] = useState("");

    const handleInput = (e) => {
        setNewTodo(e.target.value);
    }

    return ( 
        <>
        </>
     );
}
 
export default Todo;