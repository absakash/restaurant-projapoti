import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

const Address = () => {
  const [carts, setCarts] = useState([]);
  const totalPrice = localStorage.getItem("totalPrice");
  useEffect(() => {
    fetch("http://localhost:4000/cart")
      .then((res) => res.json())
      .then((data) => {
        //   console.log("carts data ", data);
        // Add a count property to each cart object with an initial value of 1
        // const cartsWithCount = data.map((cart) => ({ ...cart, count: 1 }));
        // console.log("main carts data ", cartsWithCount);
        setCarts(data);
      });
  }, []);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmitClick = async (data) => {
    const updateInfo = { data, total: totalPrice,carts };
    console.log("all data ", updateInfo);

    fetch("http://localhost:4000/orderpayment",{
      method:"POST",
      headers:{
            'content-type':'application/json'
      },
      body:JSON.stringify(updateInfo)
    })
    .then(res=>res.json())
    .then(data=>{
      window.location.replace(data.url)
      console.log(data)

})
  };

  return (
    <div className="ml-2 mr-2 p-2 md:max-w-7xl md:mx-auto p-5">
      <div>
        {carts.map((cart, index) => (
          <div key={cart._id} cart={cart}>
            <div className="">
              <div>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src={cart.strCategoryThumb}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div title={cart.strCategory} className="font-bold">
                      {cart.strCategory.substring(0, 5)}
                    </div>

                    <div className="text-sm opacity-50 md:hidden">
                      {cart.count}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* <div title={cart.strCategory} className="font-bold">
              {cart.strCategory.substring(0, 5)}
            </div> */}
          </div>
        ))}
      </div>

      <h1 className="my-5 text-3xl">Delivering Address</h1>
      <form onSubmit={handleSubmit(onSubmitClick)}>
        <div>
          <label htmlFor="">Enter your name : </label>
          <input
            placeholder="Enter your name"
            className="input input-bordered input-info w-full my-2 hover:scale-105"
            defaultValue=""
            {...register("name", { required: "Name is required" })}
          />
          <p className="text-red-600">{errors?.name?.message}</p>
        </div>

        <div>
          <label htmlFor="">Enter your Phone : </label>
          <input
            placeholder="Enter your Phone"
            className="input input-bordered input-info w-full my-2 hover:scale-105"
            defaultValue=""
            {...register("phone", { required: "phone is required" })}
          />
          <p className="text-red-600">{errors?.phone?.message}</p>
        </div>

        <div>
          <label htmlFor="">Enter Pin code : </label>
          <input
            className="input input-bordered  input-info w-full my-2 hover:scale-105 "
            {...register("Pincode", { required: "Pincpde is required" })}
            defaultValue=""
          />
          <p className="text-red-600">{errors?.Pincode?.message}</p>
        </div>

        <div>
          <label htmlFor="">Home/street/area : </label>
          <input
            className="input input-bordered  input-info w-full my-2 hover:scale-105 "
            {...register("home", { required: "home is required" })}
          />
          <p className="text-red-600">{errors?.home?.message}</p>
        </div>

        <button
          className="btn btn-outline bg-purple-50 mt-3"
          type="submit"
          value="Pay Now"
        >
          Pay Now
        </button>
      </form>
    </div>
  );
};

export default Address;
