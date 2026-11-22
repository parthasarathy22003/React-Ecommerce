import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "../Comp/Header";

function CartPage({ cart, removeFromCart, clearCart }) {
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("user")) {
      navigate("/login");
    }
  }, []);

  // total price kanakku
  let total = 0;
  for (let i = 0; i < cart.length; i++) {
    total = total + cart[i].price;
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <Header cartCount={cart.length} />

      <main className="max-w-6xl mx-auto px-4 py-6">
        <h2 className="text-2xl font-bold mb-4">My Cart</h2>

        {cart.length === 0 && (
          <div className="bg-white rounded shadow p-8 text-center">
            <p className="text-gray-600 mb-4">Your cart is empty</p>
            <Link
              to="/products"
              className="bg-blue-600 text-white px-4 py-2 rounded"
            >
              Go to Products
            </Link>
          </div>
        )}

        {cart.length > 0 && (
          <div>
            <div className="bg-white rounded shadow">
              {cart.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-4 border-b"
                >
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    className="w-20 h-20 object-contain"
                  />

                  <div className="flex-1">
                    <Link
                      to={"/product/" + item.id}
                      className="font-semibold text-blue-600"
                    >
                      {item.title}
                    </Link>
                    <p className="font-bold mt-1">${item.price}</p>
                  </div>

                  <button
                    onClick={() => removeFromCart(index)}
                    className="bg-red-500 text-white px-3 py-1 rounded text-sm"
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>

            <div className="bg-white rounded shadow p-4 mt-4 flex justify-between items-center">
              <div>
                <p className="text-gray-500">Total ({cart.length} items)</p>
                <p className="text-2xl font-bold">${total.toFixed(2)}</p>
              </div>

              <button
                onClick={clearCart}
                className="bg-gray-700 text-white px-4 py-2 rounded"
              >
                Clear Cart
              </button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

export default CartPage;