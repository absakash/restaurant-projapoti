import React from "react";
import { useForm } from "react-hook-form";

const Mymodal = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmitClick = async (data) => {
    console.log("all data ", data);
  };

  const handleCloseModal = () => {
    // Close the modal using document.getElementById('my_modal_3').close() method
    const modal = document.getElementById("my_modal_3");
    if (modal) {
      modal.close();
    }
  };

  return (
    <div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <h1 className="my-5 text-3xl">Delivering Address</h1>
          <form onSubmit={handleSubmit(onSubmitClick)}>
            <button
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={handleCloseModal}
            >
              ✕
            </button>

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

            {/* ... (other form inputs) */}

            {/* <input
              className="btn btn-outline bg-purple-50 mt-3"
              type="submit"
              value="Submit"
            /> */}
            <button
              className="btn btn-outline bg-purple-50 mt-3"
              type="submit"
              value="Pay Now"
            >
              Pay Now
            </button>
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default Mymodal;
