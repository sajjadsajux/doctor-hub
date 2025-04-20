import React from "react";
import Logo from "../assets/logo.png";
import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="cursor-pointer lg:hidden mr-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {" "}
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />{" "}
            </svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>
        <div className="flex items-center gap-2">
          <img src={Logo} alt="" />
          <a className="text-xl md:text-3xl font-extrabold">DoctorHub</a>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <NavLink to="/">Home</NavLink>
        </ul>
      </div>
      <div className="navbar-end">
        <button className="btn bg-[#176AE5] text-white rounded-3xl">Emergency</button>
      </div>
    </div>
  );
};

export default Navbar;
