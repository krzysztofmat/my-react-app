import { useCallback, useState } from "react";
import UseCallbackExample2Todos from "./UseCallbackExample2Todos";

const UseCallbackExample2 = () => {
    const [count, setCount] = useState(0);
    const [todos, setTodos] = useState([]);

    const increment = () => {
        setCount((c) => c + 1);
    }

    const addTodo = useCallback(() => {
        setTodos((t) => [...t, 'New todo']);
    }, [todos]);

    return (
        <>
        <UseCallbackExample2Todos todos={todos} addTodo={addTodo} />
        <hr />
        <div>
            Count: {count}
            <button onClick={increment}>+</button>
        </div>
        </>
    );
}

export default UseCallbackExample2;