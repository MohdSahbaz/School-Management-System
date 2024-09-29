import { Outlet, useNavigate } from "react-router-dom";
import Footer from "../Footer/Footer";

const NavBar = () => {
  const navigate = useNavigate();

  return (
    <>
      <nav className="bg-yellow-300 px-6 py-2 font-serif text-black flex justify-between items-center shadow-lg">
        {/* Logo and School Name */}
        <div
          className="flex items-center space-x-2 cursor-pointer"
          onClick={() => navigate("/")}
        >
          <img
            src="logo.jpg"
            alt="Solker School Logo"
            className="w-12 h-12 rounded-full shadow-md"
          />
          <h1 className="font-bold text-2xl text-gray-800">Solker School</h1>
        </div>
        <div className="hidden md:flex space-x-4">
          <button
            onClick={() => navigate("/about")}
            className="text-lg text-gray-800 hover:text-gray-600 transition"
          >
            About Us
          </button>
          <button
            onClick={() => navigate("/contact")}
            className="text-lg text-gray-800 hover:text-gray-600 transition"
          >
            Contact
          </button>
        </div>
      </nav>
      <Outlet />
      <Footer />
    </>
  );
};

export default NavBar;
