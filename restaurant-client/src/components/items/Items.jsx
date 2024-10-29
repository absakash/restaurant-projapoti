import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import ItemsInfo from "./ItemInfo";

const Items = () => {
  const [food, setFood] = useState([]);
  const [selectedItem, setSelectedItem] = useState([]);
  const [loading,setLoading]=useState(true);
  const navigate = useNavigate();
  const location = useLocation();

  const itemsInfo = (da) => {
    console.log("this is the info ", da);
    // Pass the data to the ItemInfo component using location state
    //     navigate("/itemInfo");
         setSelectedItem(da);
  };

  useEffect(() => {
    fetch("http://localhost:4000/items")
      .then((res) => res.json())
      .then((data) => {
        console.log("data", data);
        setFood(data);
        setLoading(false)
      });
  }, []);

  if(loading){
    return <div className="text-center">
    <span className="loading loading-ring loading-xs"></span>
    <span className="loading loading-ring loading-sm"></span>
    <span className="loading loading-ring loading-md"></span>
    <span className="loading loading-ring loading-lg"></span></div>
  }

  console.log("selected ", selectedItem);
  return (
    <div className="ml-5 mr-5 mt-10">
      <div>
        <h1 className="text-center md:text-4xl text-2xl underline ">
          Our Available Services
        </h1>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-5 my-10 p-2">
          {food &&
            food.map((da) => (
              <div key={da.idCategory} da={da} itemsInfo={itemsInfo}>
                <div className="card card-compact bg-base-100 shadow-xl">
                  <figure className="">
                    <img
                      className="hover:max-w-[700px] w-full duration-700 transition ease-in transform hover:scale-150"
                      src={da.strCategoryThumb}
                      alt="Shoes"
                    />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">{da.strCategory}</h2>
                    <p>{da.strCategoryDescription.substring(0, 90)}...</p>

                    <div className="card-actions justify-between">
                      <h1 className="text-2xl font-serif text-red-600">
                        price : {da.price}
                      </h1>
                      <Link to={`/itemInfo/${da._id}`} itemsInfo={itemsInfo}
                        onClick={() => itemsInfo(da)}
                        className="btn btn-info btn-outline"
                      >
                        More Details
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Items;
