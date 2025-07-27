import { useRef } from "react";

function UseRefExample2() {
  const inputElement = useRef();

  const focusInput = () => {
    inputElement.current.focus();
  };

  return (
    <>
      <h2>Accessing DOM Elements</h2>
      <input type="text" ref={inputElement} />
      <button onClick={focusInput}>Focus On Input</button>
    </>
  );
}

export default UseRefExample2;
