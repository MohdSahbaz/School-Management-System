import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-yellow-300 text-gray-800 font-serif py-6">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        {/* Logo and School Name */}
        <div className="flex items-center space-x-2">
          <img
            src="logo.jpg"
            alt="Solker School Logo"
            className="w-12 rounded-full"
          />
          <h1 className="font-bold text-xl">Solker School</h1>
        </div>

        {/* Navigation Links */}
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a href="/about" className="hover:underline">
            About Us
          </a>
          <a href="/contact" className="hover:underline">
            Contact
          </a>
          <a href="/privacy" className="hover:underline">
            Privacy Policy
          </a>
        </div>

        {/* Social Media Links */}
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="text-blue-600 hover:text-blue-800 transition"
          >
            <FaFacebook size={24} />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            className="text-blue-400 hover:text-blue-600 transition"
          >
            <FaTwitter size={24} />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="text-pink-600 hover:text-pink-800 transition"
          >
            <FaInstagram size={24} />
          </a>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center text-gray-700 mt-6">
        <p>
          &copy; {new Date().getFullYear()} Solker School. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
