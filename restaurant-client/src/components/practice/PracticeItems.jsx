import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PreacticeItem from "./PreacticeItem";
import ItemInfo from "../items/ItemInfo";

const PracticeItems = () => {
  const [food, setFood] = useState([]);
  const [selectedItem, setSelectedItem] = useState([]);

  const itemsInfo = (da) => {
    console.log("this is the info ", da);
    setSelectedItem(da)
  };

  useEffect(() => {
    fetch("http://localhost:4000/items")
      .then((res) => res.json())
      .then((data) => {
        console.log("data", data);
        setFood(data);
      });
  }, []);

 console.log('my selected items is ',selectedItem)

  return (
    <div>
      <div className="grid grid-cols-4 gap-5 my-10 p-2">
        {food && food.map((da) => (
          <PreacticeItem key={da.idCategory} da={da} itemsInfo={itemsInfo}>
           
          </PreacticeItem>
        ))}
      </div>

     
    </div>
  );
};

export default PracticeItems;

