import { Outlet, useNavigate } from "react-router-dom";
import { useState } from "react"; // For dropdown toggle
import Footer from "../Footer/Footer";

const NavBar = () => {
  const navigate = useNavigate();
  const [showDropdown, setShowDropdown] = useState(false); // State for dropdown visibility

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

        {/* Role Selection Dropdown */}
        <div className="relative">
          <button
            className="text-lg text-gray-800 hover:text-gray-600 transition border px-4 py-1 border-y-purple-500 rounded-md border-x-red-600"
            onClick={() => setShowDropdown(!showDropdown)} // Toggle dropdown
          >
            Login
          </button>

          {showDropdown && ( // Dropdown content
            <div className="absolute right-0 mt-2 w-40 bg-white border rounded-lg shadow-lg">
              <button
                onClick={() => {
                  navigate("/login/student");
                  setShowDropdown(!showDropdown);
                }}
                className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-yellow-100 transition"
              >
                Student
              </button>
              <button
                onClick={() => {
                  navigate("/login/teacher");
                  setShowDropdown(!showDropdown);
                }}
                className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-yellow-100 transition"
              >
                Teacher
              </button>
              <button
                onClick={() => {
                  navigate("/login/principal");
                  setShowDropdown(!showDropdown);
                }}
                className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-yellow-100 transition"
              >
                Principal
              </button>
            </div>
          )}
        </div>
      </nav>
      <Outlet />
      <Footer />
    </>
  );
};

export default NavBar;
