import React from "react";
import ex1 from "../../assets/home/banner3.jpg";
import ex2 from "../../assets/home/dessert-bg.jpeg";
import ex3 from "../../assets/home/pizza-bg.jpg";
import ex4 from "../../assets/home/salad-bg.jpg";
import ex5 from "../../assets/home/soup-bg.jpg";
const ExploreMore = () => {
  return (
    <div className=" ml-5 mr-5 sm:mt-0 mt-10">
      <div className="hero min-h-screen bg-base-100">
        <div className="hero-content  flex-col lg:flex-row-reverse duration-700 transition  ease-in transform hover:scale-105 ">
         
          <div className="grid grid-cols-2 gap-2 md:w-1/2 w-full overflow-hidden">
            <div className="overflow-hidden w-[400px]  duration-700 transition  ease-in transform hover:scale-150">
              <img
                src={ex1}
                className="max-w-lg rounded-lg shadow-2xl hover:max-w-[400px] hover:max-h-[400px]  w-72 h-44"
              />
            </div>

            <div className="overflow-hidden w-[400px]  duration-700 transition  ease-in transform hover:scale-150">
              <img
                src={ex2}
                className="max-w-lg rounded-lg shadow-2xl hover:max-w-[400px] hover:max-h-[400px] h-44 w-72"
              />
            </div>
            <div className="overflow-hidden w-[400px]  duration-700 transition  ease-in transform hover:scale-150">
              <img
                src={ex3}
                className="max-w-lg rounded-lg shadow-2xl hover:max-w-[400px] hover:max-h-[400px] h-44 w-72"
              />
            </div>
            <div className="overflow-hidden w-[400px]  duration-700 transition  ease-in transform hover:scale-150">
              <img
                src={ex4}
                className="max-w-lg rounded-lg shadow-2xl hover:max-w-[400px] hover:max-h-[400px] h-44 w-72"
              />
            </div>
          </div>

          <div className="w-full lg:w-1/2 duration-500 transition  ease-out transform hover:scale-105 ">
            <div>
              <h1 className="md:text-5xl text-3xl font-bold">Explore more Food !!!</h1>
              <p className="py-2 md:text-3xl">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
              <button className="btn btn-outline btn-info">
                Explore more
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExploreMore;
