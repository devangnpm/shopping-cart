import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const Cartpage = () => {
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);

  const location = useLocation();
  const cartProducts = location.state?.cartProducts || [];

  // Initialize cart items with quantity
  useEffect(() => {
    const initializedProducts = cartProducts.map(item => ({
      ...item,
      quantity: 1,
    }));
    setCartItems(initializedProducts);
  }, [cartProducts]);

  // Calculate total whenever cartItems change
  useEffect(() => {
    const calculateTotal = () => {
      const newTotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
      setTotal(newTotal);
    };
    calculateTotal();
  }, [cartItems]);

  // Handle quantity change
  function handleQuantityChange(id, qty) {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + qty) } // Prevent quantity from going below 1
          : item
      )
    );
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
      <div className="space-y-4">
        {cartItems.map(item => (
          <div
            key={item.id}
            className="flex items-center justify-between bg-white p-4 rounded shadow-md"
          >
            <div className="flex items-center">
              <img src={item.image} alt={item.title} className="w-20 h-20 mr-4" />
              <div>
                <h2 className="text-lg font-semibold text-black">{item.title}</h2>
                <p className="text-gray-500">Price: ${item.price}</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <button
                className="px-2 py-1 bg-gray-300 rounded"
                onClick={() => handleQuantityChange(item.id, -1)}
              >
                -
              </button>
              <input
                type="number"
                value={item.quantity}
                readOnly
                className="w-12 border text-center bg-white text-black"
              />
              <button
                className="px-2 py-1 bg-gray-300 rounded"
                onClick={() => handleQuantityChange(item.id, +1)}
              >
                +
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6">
        <h2 className="text-xl font-semibold">Total: ${total.toFixed(2)}</h2>
        <button className="mt-4 w-full py-2 px-4 bg-blue-600 text-white rounded hover:bg-blue-700">
          Proceed Now
        </button>
      </div>
    </div>
  );
};

export default Cartpage;
