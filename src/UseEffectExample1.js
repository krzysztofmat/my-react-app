import { useEffect, useState } from "react";

function UseEffectExample1() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCount((c) => c + 1);
    }, 1000);
  });

  return (
    <>
      <h1 style={{ color: "white" }}>I have rendered {count} times.</h1>
    </>
  );
}

export default UseEffectExample1;
