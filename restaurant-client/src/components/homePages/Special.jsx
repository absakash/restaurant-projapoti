import React from "react";
import ex5 from "../../assets/home/soup-bg.jpg";
import special1 from "../../assets/home/special1.jpg";
import special2 from "../../assets/home/special2.jpg";
import special3 from "../../assets/home/special3.jpg";
import special4 from "../../assets/home/special4.jpg";
import special5 from "../../assets/home/special5.jpg";

const Special = () => {
  return (
    <div className="md:p-5">
      <h1 className="md:text-5xl text-2xl text-center">Special Food Court </h1>

      <div className="border-2 ml-5 mr-5 flex justify-center overflow-hidden">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-3 ">
          <div className="overflow-hidden">
            <figure className="">
              <img
                className="duration-700 transition ease-in transform hover:scale-150"
                src={ex5}
                alt="Shoes"
              />
            </figure>
          </div>
          <div className="overflow-hidden">
            <figure className="">
              <img
                className="duration-700 transition ease-in transform hover:scale-150"
                src={special1}
                alt="Shoes"
              />
            </figure>
          </div>
          <div className="overflow-hidden">
            <figure className="">
              <img
                className="duration-700 transition ease-in transform hover:scale-150"
                src={special2}
                alt="Shoes"
              />
            </figure>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Special;
