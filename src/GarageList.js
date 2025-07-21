import CarItem from "./CarItem";

function GarageList() {
  const cars = [
    { id: 1, brand: "Ford" },
    { id: 2, brand: "BMW" },
    { id: 3, brand: "Audi" },
  ];

  return (
    <>
      <h2>My Garage List</h2>
      <ul>
        {cars.map((car) => (
          <CarItem key={car.id} brand={car.brand} />
        ))}
      </ul>
    </>
  );
}

export default GarageList;
