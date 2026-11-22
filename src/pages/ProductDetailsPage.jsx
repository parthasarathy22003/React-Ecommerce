import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate, Link } from "react-router-dom";
import Header from "../Comp/Header.jsx";
import Loader from "../Comp/Loader.jsx";
import ImageCarousel from "../Comp/ImageCarousel.jsx";

function ProductDetailsPage({ cartCount, addToCart }) {
  const { id } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!localStorage.getItem("user")) {
      navigate("/login");
      return;
    }

    const fetchProduct = async () => {
      try {
        const response = await axios.get("https://dummyjson.com/products/" + id);
        setProduct(response.data);
      } catch (err) {
        setError("Failed to load product details. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  return (
    <div className="min-h-screen bg-gray-100">
      <Header cartCount={cartCount} />

      <main className="max-w-6xl mx-auto px-4 py-6">
        <Link to="/products" className="text-blue-600">
          &larr; Back to products
        </Link>

        {loading && <Loader text="Loading product details..." />}

        {error && (
          <div className="bg-red-100 text-red-700 px-4 py-3 rounded mt-4">
            {error}
          </div>
        )}

        {product && (
          <div className="bg-white rounded shadow mt-4 p-6 grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left side: images */}
            <div>
              <ImageCarousel images={product.images} />

              <button
                onClick={() => addToCart(product)}
                className="w-full mt-4 bg-orange-500 text-white py-3 rounded font-semibold"
              >
                ADD TO CART
              </button>
            </div>

            {/* Right side: details */}
            <div>
              <h1 className="text-2xl font-bold">{product.title}</h1>

              <span className="inline-block bg-green-600 text-white text-sm px-2 py-1 rounded mt-2">
                {product.rating} ★
              </span>

              <p className="text-3xl font-bold mt-4">${product.price}</p>

              <p className="mt-4 text-gray-700">{product.description}</p>

              <div className="mt-6 border rounded">
                <div className="flex border-b p-3">
                  <span className="w-32 text-gray-500">Brand</span>
                  <span>{product.brand}</span>
                </div>
                <div className="flex border-b p-3">
                  <span className="w-32 text-gray-500">Category</span>
                  <span>{product.category}</span>
                </div>
                <div className="flex border-b p-3">
                  <span className="w-32 text-gray-500">Rating</span>
                  <span>{product.rating} / 5</span>
                </div>
                <div className="flex p-3">
                  <span className="w-32 text-gray-500">Stock</span>
                  <span>{product.stock} available</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

export default ProductDetailsPage;