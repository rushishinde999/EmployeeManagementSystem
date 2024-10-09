import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <div className="navbarFull flex flex-row  bg-zinc-500 p-4 text-lg font-medium 0 space-x-72">
        <div className="logo flex">
          <div className="logo flex-row">This is logo</div>
        </div>

        <div className="navbar-icon flex ">
          <nav className=" flex-row">
            <ul className="flex space-x-5 items-end content-end ">
              <li className="transition-all hover:bg-amber-30">
                <Link to="/">Home</Link>
              </li>

              <li>
                {" "}
                <Link to="/Info"> Info </Link>
              </li>

              <li>
                {" "}
                <Link to="/About">About us</Link>
              </li>

              <li>
                {" "}
                <Link to={"/Service"}>Service</Link>
              </li>
              <li>
                <Link to={"/Contact"}>Contact us</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;
