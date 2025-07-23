const TodosProblematic = ({ todos }) => {
    console.log("TodosProblematicRender");

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

export default TodosProblematic;