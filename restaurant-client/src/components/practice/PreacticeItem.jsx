import React from 'react';
import { Link } from 'react-router-dom';

const PreacticeItem = ({da,itemsInfo}) => {
      const {strCategory,strCategoryDescription,price,strCategoryThumb}=da
      return (
            <div>
                   <div className="card card-compact w-96 bg-base-100 shadow-xl">
              <figure className="">
                <img
                  className="hover:max-w-[700px] w-full duration-700 transition ease-in transform hover:scale-150"
                  src={strCategoryThumb}
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{strCategory}</h2>
                <p>{strCategoryDescription.substring(0, 90)}...</p>

                <div className="card-actions justify-between">
                  <h1 className="text-2xl font-serif text-red-600">
                    price : {price}
                  </h1>
                  <Link 
                    onClick={() => itemsInfo(da)}
                    className="btn btn-info btn-outline"
                  >
                    More Details
                  </Link>
                </div>
              </div>
            </div>
            </div>
      );
};

export default PreacticeItem;