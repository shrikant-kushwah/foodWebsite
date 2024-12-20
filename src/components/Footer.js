import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  const year = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scrolling effect
    });
  };

  return (
    <footer className="footer bg-gray-900 text-white py-10 relative">
      <div className="container mx-auto px-6">
        {/* Top Section */}
        <div className="flex flex-wrap justify-between items-center border-b border-gray-700 pb-8">
          {/* Brand Section */}
          <div className="mb-4 lg:mb-0">
            <h1 className="text-2xl font-bold text-[#14C004]">
              Online<span className="text-[#ec913c]">Food</span>
            </h1>
            <p className="text-sm mt-2 text-gray-400">
              Delivering happiness to your doorstep.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex space-x-8 text-sm">
            <Link to="/about" className="hover:text-[#ec913c]">
              About Us
            </Link>
            <Link to="/privacy" className="hover:text-[#ec913c]">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-[#ec913c]">
              Terms of Service
            </Link>
            <Link to="/contact" className="hover:text-[#ec913c]">
              Contact Us
            </Link>
          </div>

          {/* Social Media Icons */}
          <div className="flex space-x-4">
            <Link
              to="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500"
            >
              <FaFacebook size={20} />
            </Link>
            <Link
              to="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400"
            >
              <FaTwitter size={20} />
            </Link>
            <Link
              to="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-500"
            >
              <FaInstagram size={20} />
            </Link>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 flex flex-col lg:flex-row justify-between items-center text-gray-400 text-sm">
          <p className="mb-4 lg:mb-0">
            &copy; {year} <span className="font-bold">Shrikant Kushwah</span>.
            All rights reserved.
          </p>
          <p className="flex items-center gap-1">
            Powered by{" "}
            <span className="text-[#14C004] font-bold">Online</span>
            <span className="text-[#ec913c] font-bold">Food</span>
          </p>
        </div>
      </div>

      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className="absolute right-4 bottom-[74px] bg-[#14C004] hover:bg-[#0f9203] text-white font-bold py-2 px-4 rounded-full shadow-lg transition-transform transform hover:scale-105"
        aria-label="Scroll to top"
      >
        ↑ Top
      </button>
    </footer>
  );
};

export default Footer;
