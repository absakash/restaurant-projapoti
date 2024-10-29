import React from "react";
import banner from "../../assets/home/banner.jpg";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="relative bg-cover bg-center h-screen" style={{ backgroundImage: `url(${banner})` }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
        <h1 className="text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold text-white">
          Welcome to PROJAPOTI
        </h1>
        <br />
        <Link to="/signin" className="text-white">
          Before booking, sign in first
        </Link>
        <div className="mt-8">
          <Link to="/items" className="btn btn-outline btn-warning text-white">
            Go to items
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
