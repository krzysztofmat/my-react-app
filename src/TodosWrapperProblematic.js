import { useState } from "react";
import TodosProblematic from "./TodosProblematic";

const TodosWrapperProblematic = () => {
    const [todos, setTodos] = useState(['todo 1', 'todo 2']);
    const [count, setCount] = useState(0);
    
    const increment = () => {
        setCount((c) =>  c + 1 );
    };

    return (
        <>
        <TodosProblematic todos={todos} />
        <hr />
        <button type="button" onClick={increment}>Increment</button>{count}
        </>
    );
}

export default TodosWrapperProblematic;