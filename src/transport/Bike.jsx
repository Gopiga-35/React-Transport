import bikes from "./bikes";

function Bike() {
  return (
    <div>
      <h1>Bike Info</h1>

      {bikes.map((bike, index) => (
        <article key={index}>
          <img src={bike.url} height={120} width={200} />
          <p><b>{bike.name}</b></p>
          <p>Color: {bike.color}</p>
        </article>
      ))}
    </div>
  );
}

export default Bike;