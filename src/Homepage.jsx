import { useEffect, useState,useMemo } from "react";
import { CardComponent } from "./CardComponent";
import {Link} from "react-router-dom"

const Homepage = () => {
  const [products, setProducts] = useState([]);
  const [cartProducts, setCartProducts] = useState([]);
  const memoizedCartProducts = useMemo(() => cartProducts, [cartProducts]);

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
      <Link to="/cartpage" state={{ cartProducts:memoizedCartProducts }}>
        My Cart
      </Link>
      <CardComponent products={products} onAddToCart={handleAddToCart} />
    </div>
  );
};

export default Homepage;
