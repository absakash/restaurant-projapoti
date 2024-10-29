import React from "react";
import toast from "react-hot-toast";
import { Link, useLoaderData } from "react-router-dom";

const ItemInfo = () => {
  const itemsInfo = useLoaderData();
  //   console.log("from the loader ", itemsInfo);
  const {
    strCategoryThumb,
    strCategory,
    strCategoryDescription,
    price,
    idCategory,
  } = itemsInfo;

  const handleCart = () => {
    const storeCart = {
      strCategoryThumb,
      strCategory,
      strCategoryDescription,
      price,
      idCategory,
      email: "akashboswas2@gmail.com",
    };
    //     console.log("this is cart .....", storeCart);

    fetch("http://localhost:4000/cart", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(storeCart), // Wrap the string in an object
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          toast.success("added to the cart ");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div className="ml-5 mr-5 mt-20 p-5 sm:p-2 md:p-4 lg:p-5">
      <div>
        <div className="hero duration-700 transition  ease-in transform hover:scale-105">
          <div className="hero-content flex-col lg:flex-row-reverse ">
            <div className="md:w-1/2 w-full sm:w-full  overflow-hidden">
              <img
                src={strCategoryThumb}
                className="w-full rounded-lg shadow-2xl  duration-700 transition  ease-in transform hover:scale-150"
              />
            </div>
            <div className="md:w-1/2 sm:w-full w-full  ">
              <div className="duration-700 transition  ease-in transform hover:scale-105">
                <h1 className="text-5xl font-bold">{strCategory}</h1>
                <p className="py-6">{strCategoryDescription}</p>
                <p className="text-3xl font-serif text-red-600">
                  Price : {price}
                </p>
                <button
                  onClick={handleCart}
                  className="btn btn-info btn-outline mt-4"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemInfo;
