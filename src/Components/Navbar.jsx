import React from "react";
import Logo from "../assets/logo.png";
import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <div className="navbar bg-[#EFEFEF]  md:max-w-3/4 mx-auto py-5">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="cursor-pointer lg:hidden mr-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {" "}
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />{" "}
            </svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
            <NavLink to="/" className={({ isActive }) => (isActive ? "text-decoration-line: underline text-blue-600 font-medium text-xl" : "font-medium text-xl text-gray-700")}>
              Home
            </NavLink>
            <NavLink to="/my-bookings" className={({ isActive }) => (isActive ? "text-decoration-line: underline text-blue-600 font-medium text-xl" : "font-medium text-xl text-gray-700")}>
              My-Bookings
            </NavLink>
            <NavLink to="/blogs" className={({ isActive }) => (isActive ? "text-decoration-line: underline text-blue-600 font-medium text-xl" : "font-medium text-xl text-gray-700")}>
              Blogs
            </NavLink>
            <NavLink to="/contact-uss" className={({ isActive }) => (isActive ? "text-decoration-line: underline text-blue-600 font-medium text-xl" : "font-medium text-xl text-gray-700")}>
              Contact Us
            </NavLink>
          </ul>
        </div>
        <div className="flex items-center gap-2">
          <img src={Logo} alt="" />
          <a className="text-xl md:text-3xl font-extrabold">DoctorHub</a>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-5">
          <NavLink to="/" className={({ isActive }) => (isActive ? "text-decoration-line: underline text-blue-600 font-medium text-xl" : "font-medium text-xl text-gray-700")}>
            Home
          </NavLink>
          <NavLink to="/my-bookings" className={({ isActive }) => (isActive ? "text-decoration-line: underline text-blue-600 font-medium text-xl" : "font-medium text-xl text-gray-700")}>
            My-Bookings
          </NavLink>
          <NavLink to="/blogs" className={({ isActive }) => (isActive ? "text-decoration-line: underline text-blue-600 font-medium text-xl" : "font-medium text-xl text-gray-700")}>
            Blogs
          </NavLink>
          <NavLink to="/contact-uss" className={({ isActive }) => (isActive ? "text-decoration-line: underline text-blue-600 font-medium text-xl" : "font-medium text-xl text-gray-700")}>
            Contact Us
          </NavLink>
        </ul>
      </div>
      <div className="navbar-end">
        <button className="btn bg-[#176AE5] text-white rounded-3xl">Emergency</button>
      </div>
    </div>
  );
};

export default Navbar;
