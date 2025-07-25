import { useEffect, useState } from "react";

function UseEffectExample4() {
  const [count, setCount] = useState(0);
  const [calculation, setCalculation] = useState(0);

  useEffect(() => {
    setCalculation(() => count * 2)
  }, [count]);

  return (
    <>
      <p>Count: {count}</p>
      <button onClick={() => setCount(c => c + 1)}>Count ++</button>
      <p>Calculation: {calculation}</p>
    </>
  );
}

export default UseEffectExample4;