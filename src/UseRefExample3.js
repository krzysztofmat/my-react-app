import { useEffect, useRef, useState } from "react";

function UseRefExample3() {
  const [inputValue, setInputValue] = useState("");
  const previousInputValue = useRef("");

  useEffect(() => {
    previousInputValue.current = inputValue;
  }, [inputValue]);

  return (
    <>
      <h2>Tracking State Changes</h2>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <p>Previous value: {previousInputValue.current}</p>
    </>
  );
}

export default UseRefExample3;
