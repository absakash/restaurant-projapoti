import React from "react";
import banner from "../../assets/home/bannner.jpg";

const Visit = () => {
  return (
    <div className="hero min-h-screen my-10 p-2">
      <div className="hero-content flex-col lg:flex-row-reverse duration-700 transition ease-in transform hover:scale-105">
        <div className="w-full lg:w-1/2 overflow-hidden border-2">
          <div className="duration-500 transition ease-in transform hover:scale-150">
            <img className="w-full" src={banner} alt="" />
          </div>
        </div>
        <div className="w-full lg:w-1/2 duration-700 transition ease-in transform hover:scale-105">
          <div className="md:mt-1 sm:mt-5 mt-5 px-4">
            <h1 className="md:text-5xl text-3xl font-bold mb-4">
              Don't Forget to Taste!
            </h1>
            <p className="py-2">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-outline btn-info mt-4">Start now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Visit;
