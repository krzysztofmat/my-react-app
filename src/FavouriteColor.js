import { useState } from "react";

function FavouriteColor() {
  const [color, setColor] = useState("red");

  const [brand, setBrand] = useState("Ford");
  const [model, setModel] = useState("Mustang");
  const [year, setYear] = useState(1964);
  
  const [car, setCar] = useState({
    brand: "Ford",
    model: "Mustang",
    year: 1964,
    color: "blue"
  });

  const changeCarColor = () => {
    setCar((previousState) => ({...previousState, color: "red"}));
  };

  return (
    <>
      <h1>My favourite color is {color}</h1>
      <button onClick={() => setColor("blue")}>Blue</button>
      <h2>Brand {brand}</h2>
      <p>
        It is a {color} {model} from {year}
      </p>

      <h2>Car {car.brand}</h2>
      <p>
        It is a {car.color} {car.model} from {car.year}
      </p>
      <button type="button" onClick={changeCarColor}>Switch color of the car to blue</button>    
    </>
  );
}

export default FavouriteColor;
