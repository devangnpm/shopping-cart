
export const Cartpage = ({ cartProducts }) => {

  


  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
      <div className="space-y-4">
        {cartProducts.map(item => (
          <div
            key={item.id}
            className="flex items-center justify-between bg-white p-4 rounded shadow-md"
          >
            <div className="flex items-center">
              <img src={item.image} alt={item.name} className="w-20 h-20 mr-4" />
              <div>
                <h2 className="text-lg font-semibold">{item.name}</h2>
                <p className="text-gray-500">Price: ${item.price}</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <button
                className="px-2 py-1 bg-gray-300 rounded"
              >
                -
              </button>
              <input
                type="number"
                value={item.quantity}
                className="w-12 border text-center"
              />
              <button
                className="px-2 py-1 bg-gray-300 rounded"
              >
                +
              </button>
            </div>
            <div>
              <p className="font-semibold">Total: ${(item.price * item.quantity).toFixed(2)}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6">
        <h2 className="text-xl font-semibold">Total: </h2>
        <button className="mt-4 w-full py-2 px-4 bg-blue-600 text-white rounded hover:bg-blue-700">
          Proceed Now
        </button>
      </div>
    </div>
  );
};

export default Cartpage;
