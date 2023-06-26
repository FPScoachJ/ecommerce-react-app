/* eslint-disable react/prop-types */

import { useParams, useNavigate } from "react-router-dom";

export default function FishDetails({ fishies, handleAddToCart }) {
  const { fishName } = useParams();
  const navigate = useNavigate();
  const fish = fishies.find((fish) => fish.name === fishName);

  const addToCart = () => {
    handleAddToCart(fish);
    navigate("/cart");
  };

  return (
    <div className="fish-details-container">
      <h1>{fish.name}</h1>
      <img src={fish.image} alt={fish.name} />

      <p>{fish.description}</p>
      <h2>CARE INSTRUCTIONS</h2>
      <h3>Lighting</h3>
      <p>{fish.lighting}</p>
      <h3>Temperature</h3>
      <p>{fish.temperature}</p>
      <p>Price: ${fish.price}</p>
      <button onClick={addToCart}>Add to cart</button>
    </div>
  );
}
