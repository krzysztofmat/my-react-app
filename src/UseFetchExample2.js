import useFetch from "./useFetch";

const UseFetchExample2 = () => {
  const [data] = useFetch("https://jsonplaceholder.typicode.com/todos");  

  return (
    <>
      <h1>Custom Hook Separated</h1>
      {data &&
        data.map((todo) => {
          return <p key={todo.id}>{todo.title}</p>;
        })}
    </>
  );
};

export default UseFetchExample2;