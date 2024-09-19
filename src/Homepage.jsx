import { useEffect, useState } from "react";
import { CardComponent } from "./CardComponent";
import Cartpage from "./Cartpage";

const Homepage = () => {
  const [products, setProducts] = useState([]);
  const [cartProducts, setCartProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const handleAddToCart = (product) => {
    setCartProducts((prevCartProducts) => [...prevCartProducts, product]);
    console.log("Cart Products:", [...cartProducts, product]);
  };

  return (
    <div>
      <h1 className="text-3xl font-bold underline">Hello world</h1>
      {/* Pass products and the cart handler function */}
      <CardComponent products={products} onAddToCart={handleAddToCart} />
      <Cartpage cartProducts={cartProducts}/>
    </div>
  );
};

export default Homepage;
