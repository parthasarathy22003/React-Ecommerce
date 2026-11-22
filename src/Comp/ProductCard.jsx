import { Link } from "react-router-dom";

function ProductCard({ product, addToCart }) {
  return (
    <div className="bg-white rounded shadow p-4 flex flex-col">
      <img
        src={product.thumbnail}
        alt={product.title}
        className="w-full h-48 object-contain mb-3"
      />

      <Link
        to={"/product/" + product.id}
        className="text-lg font-semibold text-blue-600"
      >
        {product.title}
      </Link>

      <p className="text-xl font-bold mt-2">${product.price}</p>

      <button
        onClick={() => addToCart(product)}
        className="mt-3 bg-orange-500 text-white py-2 rounded font-semibold"
      >
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;