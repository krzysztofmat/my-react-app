import { useState } from "react";

function Form() {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("inputs", inputs);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        name:
        <input
          type="text"
          name="name"
          value={inputs.name || ""}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Age:
        <input
          type="number"
          name="age"
          value={inputs.age || ""}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Desc:
        <textarea
          name="desc"
          value={inputs.desc || ""}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        <select name="car" value={inputs.car} onChange={handleChange}>
          <option>opel</option>
          <option>toyota</option>
          <option>honda</option>
        </select>
      </label>
      <input type="submit" />
    </form>
  );
}

export default Form;
