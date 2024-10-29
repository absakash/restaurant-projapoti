import React from "react";
import { Link, NavLink } from "react-router-dom";

const NavbarHeader = () => {
  const navIteam = (
    <div className="lg:flex gap-2">
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/items">Items</NavLink>
      </li>
      <li>
        <NavLink to="/ordered">Ordered</NavLink>
      </li>
      <li>
        <NavLink to="/cart">Cart </NavLink>
      </li>
      <li>
        <NavLink to="/dashboard">DashBoard </NavLink>
      </li>
    </div>
  );

  return (
    <div className="navbar bg-base-100 max-w-[1400px] mx-auto bg-purple-100">
      <div className="navbar-start lg:flex ">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navIteam}
          </ul>
        </div>
        <a className="btn btn-ghost text-4xl font-serif">Projapoti</a>
      </div>
      <div className="navbar-center hidden lg:flex navbar-end">
        <ul className="menu menu-horizontal px-1 ">{navIteam}</ul>
      </div>
    </div>
  );
};

export default NavbarHeader;
