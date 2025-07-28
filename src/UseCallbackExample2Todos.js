import { memo } from "react";

const UseCallbackExample2Todos = ({ todos, addTodo }) => {
    console.log('UseCallbackExample2Todos rendered');

    return (
        <>
        <h2>My Todos</h2>
        {todos.map((todo, index) => {
            return <p key={index}>todo</p>
        })}
        <button onClick={addTodo}>Add todo</button>
        </>
    );
};

export default memo(UseCallbackExample2Todos);
