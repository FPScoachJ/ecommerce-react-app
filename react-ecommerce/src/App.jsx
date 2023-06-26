import "./App.css";
import { useState } from "react";
import Home from "./components/Home/Home";
import Products from "./components/Products/Products";
import FishDetails from "./components/FishDetails/FishDetails";
import Info from "./components/Info/Info";
import Cart from "./components/Cart/Cart";
import NotFound from "./components/NotFound/NotFound";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

function App() {
  const plants = [
    {
      name: "Cobalt Discus",
      scientificName: "	3.5 Inches",
      image:
        "https://wattleydiscus.com/wp-content/uploads/2016/02/high-body-cobalt-wattley-discus.jpg",
      description:
        "Like the goblins which gave their name to the metal for which this plant is named, Cobalt Discus are ghastly creatures; with their pallid blue skin fading to blushes of scarlet, and blazing red eyes, perfect for staring through the glass at you as you watch them.",
      lighting: "10,000K White",
      temperature: "82-86 F",
      price: 60.0,
    },
    {
      name: "Red Melon Discus",
      scientificName: "3 Inches",
      image:
        "https://wattleydiscus.com/wp-content/uploads/2016/02/Red-Melon-in-planted-tank-wattley-discus.jpg",
      description:
        "These fiery red and yellow Red Melons Discus will add a inimitable glow to your collection.",
      lighting: "10,000K White",
      temperature: "82-86 F",
      price: 50.0,
    },
    {
      name: "Red Snakeskin Discus",
      scientificName: "3 Inches",
      image:
        "https://wattleydiscus.com/wp-content/uploads/2016/02/red-snakeskin-wattley-discus.jpg",
      description:
        "No mumps or mosquito bites here, the red spots on this Red Snakeskin Discus come from expertly managed selective breeding to create another of the unique patterns.",
      lighting: "10,000K White",
      temperature: "82-86 F",
      price: 40.0,
    },
    {
      name: "Albino Yellow Leopard Discus",
      scientificName: "4 Inches",
      image:
        "https://c2n5z4u4.stackpathcdn.com/wp-content/uploads/2016/02/albino-yello-leopard-wattley-discus-3-1.jpg",
      description:
        "The practical inverse of the great jungle cat from which it derives its name, the Albino Yellow Leopard Discus has orange-yellow circular spots on an iridescent white background.",
      lighting: "10,000K White",
      temperature: "82-86 F",
      price: 100.0,
    },
    {
      name: "Wild Discus Blue Face Heckel",
      scientificName: "4.5 Inches",
      image:
        "https://wattleydiscus.com/wp-content/uploads/2020/09/Untitled-design-2023-04-20T110004633-1.jpg",
      description:
        "The delicate pinks and corals juxtaposed against the bright blues, greens, and yellows on these Wild Discus Blue Face Heckel are stunning. ",
      lighting: "10,000K White",
      temperature: "82-86 F",
      price: 100.0,
    },
    {
      name: "Black German Ram",
      scientificName: "2 Inches",
      image:
        "https://c2n5z4u4.stackpathcdn.com/wp-content/uploads/2020/04/black-german-ram-wattley-discus.jpg",
      description:
        "These Black German Rams have a deep black body with red fins. Perfect tank mates for your discus or community tank.",
      lighting:
        "Snake plant can adapt to a range of lighting conditions but prefer bright, indirect light. They can tolerate low light levels, but prolonged exposure to low light may result in slower growth and less vibrant leaf coloration. Avoid placing them in direct sunlight, as it can scorch the leaves.",
      temperature: "82-86 F",
      price: 20.0,
    },
  ];
  const [cart, setCart] = useState([]);
  // takes a plant object as a parameter
  const handleAddToCart = (plant) => {
    //This line checks if the plant already exists in the cart array
    //find() method to search for an item in the cart array that has the same name as the plant being added.
    const plantInCart = cart.find((item) => item.name === plant.name);
    //checks if the plant is already present in the cart
    if (plantInCart) {
      //creates an updated version of the cart array by mapping over each item in the cart array
      // and increasing the quantity of the matching plant by 1.
      const updatedCart = cart.map((item) => {
        if (item.name === plant.name) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
      setCart(updatedCart);
      //If the plant is not in the cart this else block is executed
    } else {
      //adds a new item to the cart array by spreading the  cart array and
      // adding a new  plant with a quantity of 1 ({ ...plant, quantity: 1 }).
      setCart([...cart, { ...plant, quantity: 1 }]);
    }
  };
  return (
    <div>
      <Router>
        <nav>
          <h3>Discus Emporium</h3>
          <Link to="/">Home</Link>
          <Link to="/products">Fish</Link>
          <Link to="/info">Info</Link>
          <Link to="/cart">Cart</Link>
        </nav>
        <Routes>
          <Route exact path="/" Component={Home} />
          <Route path="/products" element={<Products plants={plants} />} />
          <Route
            path="/products/:plantName"
            element={
              <FishDetails plants={plants} handleAddToCart={handleAddToCart} />
            }
          />
          <Route path="/info" Component={Info} />
          <Route path="/cart" element={<Cart cart={cart} />} />

          <Route path="*" Component={NotFound} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
