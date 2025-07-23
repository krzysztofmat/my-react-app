import { useState } from "react";
import Todos from "./Todos";

const TodosWrapper = () => {
    const [todos, setTodos] = useState(['todo 1', 'todo 2']);
    const [count, setCount] = useState(0);
    
    const increment = () => {
        setCount((c) =>  c + 1 );
    };

    return (
        <>
        <Todos todos={todos} />
        <hr />
        <button type="button" onClick={increment}>Increment</button>{count}
        </>
    );
}

export default TodosWrapper;