/* eslint-disable react/prop-types */
export default function Cart({ cart }) {
  //calculate cart total
  //.reduce() method to iterate over each item in the cart array and accumulate the total price.
  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  return (
    <div>
      {/* renders cart info */}
      <h2>Cart</h2>

      {cart.map((item, index) => (
        <div key={index} className="cart-card">
          <p>{item.name}</p>
          <img src={item.image} alt={item.name} />
          <p>Price: ${item.price}</p>
          <p>Quantity: {item.quantity}</p>
        </div>
      ))}
      <p>Total Price: ${totalPrice}</p>
    </div>
  );
}
