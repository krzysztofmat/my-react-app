import { memo } from "react";

const Todos = ({ todos }) => {
    console.log("TodosRender");

    return (
        <>
            <h2>My todos</h2>
            <ul>
            {todos.map((todo, index) => {
                return <li key={index}>{todo}</li>
            })}
            </ul>
        </>
    );
};

export default memo(Todos);