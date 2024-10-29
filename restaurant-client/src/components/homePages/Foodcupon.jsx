import React, { useState } from "react";
import contac from "../../assets/home/contacts.png";
import "./Contact.css"; // Import a CSS file for styling

const Foodcupon = () => {
  return <div>
  
      <div>
        <div className="text-center">
            <h1 className="text-3xl md:text-5xl">Hi ! </h1>
            <p className="text-xl md:text-3xl text-red-600">Apply your cuppon to get discount </p>
        </div>
        <div className="text-center mt-3">
           <input className="input input-bordered input-info mt-0 w-3/4 md:w-1/3 p-2" placeholder="enter your cupon code " type="text" name="" id="" />
        </div>
        <div className="text-center mt-3">
           <button className="btn btn-info btn-outline">Claim now </button>
        </div>

      
      </div>
  
  
  </div>;
};

export default Foodcupon;
