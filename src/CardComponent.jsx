export const CardComponent = ({ products, onAddToCart }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
      {products.map((product) => (
        <div key={product.id} className="bg-white shadow-lg rounded-lg p-4">
          <img
            className="w-full h-48 object-cover rounded-md"
            src={product.image}
            alt={product.title}
          />
          <h2 className="text-lg font-bold mt-2">{product.title}</h2>
          <p className="text-gray-500 mt-2">
            {product.description.substring(0, 100)}...
          </p>
          <p className="text-green-600 mt-2 font-semibold">${product.price}</p>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => onAddToCart(product)} // Trigger the cart logic in the parent
          >
            Add To Cart
          </button>
        </div>
      ))}
    </div>
  );
};
