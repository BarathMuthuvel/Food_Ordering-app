import React from "react";
import { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useInternetStatus from "../utils/useInternetStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
const Header = () => {
  const [login, setLogin] = useState("Login");

  const { loginUser } = useContext(UserContext);

  const onlineStatus = useInternetStatus();

  // Subscribing to the store using a Selector
  const cartItems = useSelector((store) => (store.cart.items))

  return (
    <div className="flex justify-between bg-black">
      <div className="logo-container px-10">
        <Link to="/">
          <img className="w-30 h-24" src={LOGO_URL} alt="logo" />
        </Link>
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4 text-sm">
          <li className="px-4 text-gray-200">Status : {onlineStatus ? "Online🟢" : "Offline🔴"}</li>
          <li>
            <Link className="px-4 text-gray-200" to="/">Home</Link>
          </li>
          <li>
            <Link className="px-4 text-gray-200" to="/about">About</Link>
          </li>
          <li>
            <Link className="px-4 text-gray-200" to="/contactus">Contact</Link>
          </li>
          <li>
            <Link className="px-4 text-gray-200" to="/grocery">Grocery</Link>
          </li>
          <li className="px-4 font-semibold text-gray-200">
            <Link className="px-4" to="/cart">Cart - ({cartItems.length})</Link>
          </li>
          <li className="text-gray-200">
            <button
              className="login"
              onClick={() => {
                login === "Login" ? setLogin("LogOut") : setLogin("Login");
              }}
            >
              {login}
            </button>
          </li>
          <li className="px-4 font-semibold text-gray-200">{loginUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
