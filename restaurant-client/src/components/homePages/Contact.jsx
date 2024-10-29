import React from "react";
import contac from "../../assets/home/contacts.png";
const Contact = () => {
  return (
    <div className="hero min-h-screen lg:mt-0 my-10 md:p-5 sm:p-3 p-3">
      <div className="hero-content flex-col lg:flex-row-reverse duration-700 transition  ease-in transform hover:scale-105 ">
       
        <div className=" overflow-hidden border-2">
          <div className="duration-500 transition  ease-in transform hover:scale-150">
        
            <img className="" src={contac} alt="" />
          </div>
        </div>
        <div className="w-full lg:w-1/2 duration-700 transition  ease-in transform hover:scale-105 ">
          <div className="md:mt-2 mt-5 ">
            <h1 className="md:text-5xl text-3xl font-bold ">Contact us !</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-outline btn-info">Start now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
