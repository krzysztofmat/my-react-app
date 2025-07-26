import { useEffect, useRef, useState } from "react";

function UseRefExample1() {
  const [inputValue, setInputValue] = useState("");
  const count = useRef(0);

  useEffect(() => {
    count.current = count.current + 1;
  });

  return (
    <>
      <input
        type="text"
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
      />
      <p>Rendered {count.current} times</p>
    </>
  );
}

export default UseRefExample1;
