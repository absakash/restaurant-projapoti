import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const PracticeNavbar = () => {
  const [cliked, setClicked] = useState("true");

  return (
    <nav className="bg-red-300 p-4 max-w-7xl mx-auto">
      <div className=" mx-auto flex justify-between items-cente relative">
        <NavLink to="/" className="text-white text-lg font-bold">
          <svg
            id="logo-15"
            width="49"
            height="48"
            viewBox="0 0 49 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {" "}
            <path
              d="M24.5 12.75C24.5 18.9632 19.4632 24 13.25 24H2V12.75C2 6.53679 7.03679 1.5 13.25 1.5C19.4632 1.5 24.5 6.53679 24.5 12.75Z"
              class="ccustom"
              fill="#17CF97"
            ></path>{" "}
            <path
              d="M24.5 35.25C24.5 29.0368 29.5368 24 35.75 24H47V35.25C47 41.4632 41.9632 46.5 35.75 46.5C29.5368 46.5 24.5 41.4632 24.5 35.25Z"
              class="ccustom"
              fill="#17CF97"
            ></path>{" "}
            <path
              d="M2 35.25C2 41.4632 7.03679 46.5 13.25 46.5H24.5V35.25C24.5 29.0368 19.4632 24 13.25 24C7.03679 24 2 29.0368 2 35.25Z"
              class="ccustom"
              fill="#17CF97"
            ></path>{" "}
            <path
              d="M47 12.75C47 6.53679 41.9632 1.5 35.75 1.5H24.5V12.75C24.5 18.9632 29.5368 24 35.75 24C41.9632 24 47 18.9632 47 12.75Z"
              class="ccustom"
              fill="#17CF97"
            ></path>{" "}
          </svg>
        </NavLink>

        <div className="hidden md:flex justify-center items-center gap-5">
          <NavLink to="/items" className="text-white">
            Items
          </NavLink>
          <NavLink to="/ordered" className="text-white">
            Ordered
          </NavLink>
          <NavLink to="/cart" className="text-white">
            Cart
          </NavLink>
        </div>

        {/* Mobile menu */}
        <div className="md:hidden ">
          {cliked ? (
            <button onClick={() => setClicked(false)} className="btn">
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
            </button>
          ) : (
            <>
              <button className="btn" onClick={() => setClicked(true)}>
                x
              </button>
             
            </>
          )}
        </div>
        
      </div>
          <div className="right-0 absolute transition ease-in duration-700 shadow-2xl rounded-2xl p-3">
          {
            !cliked ? <div className="mr-20 mt-5">
              <div className="flex flex-col  transition ease-in duration-700 gap-2">
                <NavLink to="/items" className="hover:bg-slate-600 text-white bg-black rounded-xl p-2">
                  Items
                </NavLink>
                <NavLink to="/ordered" className="hover:bg-black hover:text-white rounded-xl p-2">
                  Ordered
                </NavLink>
                <NavLink to="/cart" className=" hover:bg-black hover:text-white rounded-xl p-2">
                  Cart
                </NavLink>
              </div>
              </div>:""
          }
          </div>
    </nav>
  );
};

export default PracticeNavbar;
