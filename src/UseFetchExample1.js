import { useEffect, useState } from "react";

const UseFetchExample1 = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((data) => setData(data));
  });

  return (
    <>
      <h1>Custom Hook Inline</h1>
      {data &&
        data.map((todo) => {
          return <p key={todo.id}>{todo.title}</p>;
        })}
    </>
  );
};

export default UseFetchExample1;
