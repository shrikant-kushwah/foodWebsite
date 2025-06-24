import { useState, useContext } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link, useLocation } from "react-router-dom";
import useOnlineSatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const onlineStatus = useOnlineSatus();
  const { loggedInUser } = useContext(UserContext);
  const cartItems = useSelector((store) => store.cart.items);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <header className="bg-white shadow-md sticky top-0 z-50 w-full">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <img
            className="w-12 h-12 object-contain"
            src={LOGO_URL}
            alt="Online Food Logo"
          />
          <div>
            <h4 className="text-green-500 font-bold text-xl leading-tight">Online</h4>
            <h4 className="text-orange-500 font-bold text-sm -mt-1">Food</h4>
          </div>
        </Link>

        <button
          className="lg:hidden text-xl"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          ☰
        </button>
        <nav
          className={`${menuOpen ? "block" : "hidden"
            } absolute top-20 left-0 w-full bg-white lg:static lg:block lg:w-auto`}
        >
          <ul className="flex flex-col lg:flex-row items-start lg:items-center gap-4 lg:gap-6 text-gray-700 font-medium px-4 py-2 lg:p-0">
            <li>Online Status: <span className="font-bold">{onlineStatus ? "✅" : "🔴"}</span></li>
            <li className={isActive("/") ? "text-green-600 font-semibold" : "hover:text-green-500"}>
              <Link to="/">Home</Link>
            </li>
            <li className={isActive("/about") ? "text-green-600 font-semibold" : "hover:text-green-500"}>
              <Link to="/about">About Us</Link>
            </li>
            <li className={isActive("/contact") ? "text-green-600 font-semibold" : "hover:text-green-500"}>
              <Link to="/contact">Contact Us</Link>
            </li>
            <li className={isActive("/grocery") ? "text-green-600 font-semibold" : "hover:text-green-500"}>
              <Link to="/grocery">Grocery</Link>
            </li>
            <li className="font-bold text-black">
              <Link to="/cart" className="hover:text-green-500">
                🛒 <span className="ml-1">{cartItems.length}</span>
              </Link>
            </li>
          </ul>
        </nav>


        <div className="hidden lg:flex items-center gap-4">
          <button
            className="px-4 py-1 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
            onClick={() => setIsLoggedIn((prev) => !prev)}
            aria-label="Login toggle"
          >
            {isLoggedIn ? "Logout" : "Login"}
          </button>
          <span className="font-bold text-gray-700">{loggedInUser}</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
