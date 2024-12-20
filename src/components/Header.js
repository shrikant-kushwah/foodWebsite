import { useState, useContext } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineSatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from 'react-redux';

const Header = () => {

  const [btnNameReact, setBtnNameReact] = useState("Login");

  const onlineStatus = useOnlineSatus();

  const { loggedInUser } = useContext(UserContext);
  // console.log(loggedInUser);

  // Subscribing to the store using a selector
  const cartItems = useSelector((store) => store.cart.items);
  // console.log(cartItems);

  return (
    <div className="header flex shadow-lg justify-between bg-white">
      <div className="logo-container">
        <img to="/" className='logo w-[70px] cursor-pointer mt-1 ml-2' src={LOGO_URL} />
        {/* <div className="flex justify-between">
          <h4 className="p-2 font-serif font-bold text-lg mb-[-9px] text-[#14C004]">Online</h4>
          <h4 className="font-serif font-bold text-lg ml-[-4] mt-2 text-[#ec913c]">Food</h4>
        </div> */}
      </div>
      <div className="nav-items flex items-center text-slate-600 font-semibold">
        <ul className="flex p-2 m-2">
          <li className="px-4">
            Online Status: {onlineStatus ? "✅" : "🔴"}
          </li>
          <li className="px-4 hover:text-yellow-600">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4 hover:text-yellow-600">
            <Link to='/about'>About Us</Link>
          </li>
          <li className="px-4 hover:text-yellow-600">
            <Link to='/contact'>Contact Us</Link>
          </li>
          <li className="px-4 hover:text-yellow-600">
            <Link to='/grocery'>Grocery</Link>
          </li>
          <li className="px-4 hover:text-yellow-600 font-bold text-xl text-black">
            <Link to='/cart'>🛒{cartItems.length}</Link>

          </li>
          <button className="login"
            onClick={() => {
              btnNameReact === "Login" ? setBtnNameReact("Logout") :
                setBtnNameReact("Login");
            }}
          >{btnNameReact}</button>
          <li className="px-4 hover:text-yellow-600 font-bold text-black">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  )
};

export default Header;