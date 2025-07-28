import { useState } from "react";
import UseCallbackExample1Todos from "./UseCallbackExample1Todos";

const UseCallbackExample1 = () => {
    const [count, setCount] = useState(0);
    const [todos, setTodos] = useState([]);

    const increment = () => {
        setCount((c) => c + 1);
    }

    const addTodo = () => {
        setTodos((t) => [...t, 'New todo'])
    }

    return (
        <>
        <UseCallbackExample1Todos todos={todos} addTodo={addTodo} />
        <hr />
        <div>
            Count: {count}
            <button onClick={increment}>+</button>
        </div>
        </>
    );
}

export default UseCallbackExample1;