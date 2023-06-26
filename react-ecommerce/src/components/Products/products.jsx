/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

export default function Products({ fishies }) {
  return (
    <div className="product-card-container">
      {fishies.map((plant) => (
        <div className="product-card" key={plant.name}>
          <h2>{plant.name}</h2>
          <h3>{plant.scientificName}</h3>
          <img src={plant.image} alt={plant.name} />

          <button>
            <Link to={`/products/${plant.name}`}> more info </Link>
          </button>
        </div>
      ))}
    </div>
  );
}
