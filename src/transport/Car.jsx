import cars from "./cars";

function Car() {
  return (
    <div>
      <h1>Car Info</h1>

      {cars.map((car, index) => (
        <article key={index}>
          <img src={car.url} height={120} width={200} />
          <p><b>{car.name}</b></p>
          <p>Color: {car.color}</p>
        </article>
      ))}
    </div>
  );
}

export default Car;