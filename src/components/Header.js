import { LOGO_URL } from "../utils/constants";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import userContext from "../utils/userContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [buttonReact, setbuttonReact] = useState("login");
  const onlineStatus = useOnlineStatus();

  const { loggIn } = useContext(userContext);
  // console.log(data)

  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);
  return (
    <div className="flex justify-between bg-pink-200 shadow-lg m-2 pl-2 pt-2">
      <div className="w-19">
        <img className="w-16" src={LOGO_URL}></img>
        <div className="flex flex-wrap align-items-center ">
          {" "}
          <h2 className="font-sans text-xl font-bold text-pink-700">
            C😺by's Food Zone
          </h2>
        </div>
      </div>
      <div className="nav-items">
        <ul className="flex p-4 m-4 align-items-center space-x-4">
          <li className=" mr-30"> </li>
          <li> onlineStatus : {onlineStatus ? "✅" : "🛑"}</li>
          <li>
            {" "}
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/cart">Cart - ({cartItems.length}items)</Link>
          </li>
          <button
            className="loginbutton"
            onClick={() => {
              buttonReact === "login"
                ? setbuttonReact("logout")
                : setbuttonReact("login");
            }}
          >
            {buttonReact}
          </button>
          <li> {loggIn}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
