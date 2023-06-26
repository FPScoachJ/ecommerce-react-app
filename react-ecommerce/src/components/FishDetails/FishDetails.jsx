/* eslint-disable react/prop-types */

import { useParams, useNavigate } from "react-router-dom";

export default function FishDetails({ plants, handleAddToCart }) {
  const { plantName } = useParams();
  const navigate = useNavigate();
  const plant = plants.find((plant) => plant.name === plantName);

  const addToCart = () => {
    handleAddToCart(plant);
    navigate("/cart");
  };

  return (
    <div className="plant-details-container">
      <h1>{plant.name}</h1>
      <img src={plant.image} alt={plant.name} />

      <p>{plant.description}</p>
      <h2>CARE INSTRUCTIONS</h2>
      <h3>Lighting</h3>
      <p>{plant.lighting}</p>
      <h3>Temperature</h3>
      <p>{plant.temperature}</p>
      <p>Price: ${plant.price}</p>
      <button onClick={addToCart}>Add to cart</button>
    </div>
  );
}
