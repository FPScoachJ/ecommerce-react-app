/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

export default function Products({ fishies }) {
  return (
    <div className="product-card-container">
      {fishies.map((fish) => (
        <div className="product-card" key={fish.name}>
          <h2>{fish.name}</h2>
          <h3>{fish.scientificName}</h3>
          <img src={fish.image} alt={fish.name} />

          <button>
            <Link to={`/products/${fish.name}`}> more info </Link>
          </button>
        </div>
      ))}
    </div>
  );
}
