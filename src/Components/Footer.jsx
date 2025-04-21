import React from "react";
import Logo from "../assets/logo.png";
import { NavLink } from "react-router";
import fb from "../assets/fb.png";
import twitter from "../assets/twitter-logo-2 3.png";
import linked from "../assets/linkedin.png";
import yt from "../assets/yt.png";
const Footer = () => {
  return (
    <footer className="footer footer-horizontal footer-center bg-white  p-10">
      <div className="flex items-center gap-2">
        <img src={Logo} alt="" />
        <a className="text-xl md:text-3xl font-extrabold">DoctorHub</a>
      </div>
      <div>
        <ul className="menu menu-horizontal px-1 gap-5 flex items-center justify-center">
          <NavLink to="/" className={({ isActive }) => (isActive ? "text-decoration-line: underline text-blue-600  text-xl" : " text-xl text-gray-700")}>
            Home
          </NavLink>
          <NavLink to="/my-bookings" className={({ isActive }) => (isActive ? "text-decoration-line: underline text-blue-600  text-xl" : " text-xl text-gray-700")}>
            My-Bookings
          </NavLink>
          <NavLink to="/blogs" className={({ isActive }) => (isActive ? "text-decoration-line: underline text-blue-600  text-xl" : " text-xl text-gray-700")}>
            Blogs
          </NavLink>
          <NavLink to="/contact-us" className={({ isActive }) => (isActive ? "text-decoration-line: underline text-blue-600  text-xl" : " text-xl text-gray-700")}>
            Contact Us
          </NavLink>
        </ul>
      </div>
      <hr className="my-2 border-t-1 border-gray-300 w-3/4 mx-auto" />

      <nav>
        <div className="grid grid-flow-col gap-4">
          <a href="">
            <img src={fb} alt="" />
          </a>
          <a href="">
            <img src={twitter} alt="" />
          </a>
          <a href="">
            <img src={linked} alt="" />
          </a>
          <a href="">
            <img src={yt} alt="" />
          </a>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
