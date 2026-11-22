import { Link, useNavigate } from "react-router-dom";

function Header({ cartCount }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <header className="bg-blue-600 text-white">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/products" className="text-xl font-bold">
          MyStore
        </Link>

        <div className="flex items-center gap-4">
          <Link
            to="/cart"
            className="bg-white text-blue-600 font-bold px-3 py-1 rounded"
          >
            Cart: {cartCount}
          </Link>
          <button
            onClick={handleLogout}
            className="bg-red-500 px-3 py-1 rounded text-sm"
          >
            Logout
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;