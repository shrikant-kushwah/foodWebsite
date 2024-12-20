import { useState, useContext } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineSatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");
  const onlineStatus = useOnlineSatus();
  const { loggedInUser } = useContext(UserContext);
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <header className="bg-white shadow-md p-4 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center flex-wrap">
        {/* Logo Section */}
        <div className="logo-container flex items-center space-x-3">
          <Link to="/" className="flex items-center space-x-2">
            <img
              className="logo w-16 h-16 object-contain"
              src={LOGO_URL}
              alt="Logo"
            />
            <div className="text-container">
              <h4 className="text-green-500 font-bold text-2xl leading-none">
                Online
              </h4>
              <h4 className="text-orange-500 font-bold text-xl leading-none -mt-1">
                Food
              </h4>
            </div>
          </Link>
        </div>

        {/* Navigation Items */}
        <nav className="flex-grow">
          <ul className="flex flex-wrap justify-end items-center space-x-6 text-gray-700 font-medium">
            <li className="px-2">
              Online Status: <span className="font-bold">{onlineStatus ? "✅" : "🔴"}</span>
            </li>
            <li className="hover:text-green-500">
              <Link to="/">Home</Link>
            </li>
            <li className="hover:text-green-500">
              <Link to="/about">About Us</Link>
            </li>
            <li className="hover:text-green-500">
              <Link to="/contact">Contact Us</Link>
            </li>
            <li className="hover:text-green-500">
              <Link to="/grocery">Grocery</Link>
            </li>
            <li className="font-bold px-3 text-black flex items-center">
              <Link to="/cart" className="hover:text-green-500">
                🛒<span className="ml-1">{cartItems.length}</span>
              </Link>
            </li>
          </ul>
        </nav>

        {/* Login Button & User Info */}
        <div className="flex items-center space-x-4 mt-4 lg:mt-0">
          <button
            className="px-4 py-1 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
            onClick={() => setBtnNameReact(btnNameReact === "Login" ? "Logout" : "Login")}
          >
            {btnNameReact}
          </button>
          <span className="font-bold text-gray-700">{loggedInUser}</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
