import { memo } from "react";

const UseCallbackExample1Todos = ({ todos, addTodo }) => {
    console.log('UseCallbackExample1Todos rendered');

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

export default memo(UseCallbackExample1Todos);
