import React, { useEffect, useState } from "react";

const Order = () => {
  const [orders, setOrders] = useState([]);
  const [expandedOrders, setExpandedOrders] = useState([]);
  const todayDate = new Date().toLocaleDateString();
  useEffect(() => {
    fetch("http://localhost:4000/order")
      .then((res) => res.json())
      .then((data) => {
        setOrders(data);
        setExpandedOrders(new Array(data.length).fill(false));
      });
  }, []);

  const toggleOrderDetails = (index) => {
    setExpandedOrders((prevExpanded) => {
      const newExpanded = [...prevExpanded];
      newExpanded[index] = !newExpanded[index];
      return newExpanded;
    });
  };

  return (
    <div>
      <div className="ml-2 mr-2 p-2 md:max-w-7xl md:mx-auto">
        {orders.map((order, index) => (

          <div key={order._id} className="border-2 p-5 rounded-xl">
          <h1 className="text-2xl font-bold mb-4">Orders - {todayDate}</h1>
            <div className="grid grid-flow-col items-center mb-10 ">
              <div className="">
                <h1>Transaction ID: {order.tranjectionId}</h1>
                {order.orderInfo.carts.map((cartItem) => (
                  <div className="flex items-center gap-3" key={cartItem._id}>
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={cartItem.strCategoryThumb} alt={cartItem.strCategory} />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{cartItem.strCategory}</div>
                      <div>Quantity: {cartItem.count}</div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="hidden md:block">{order.count}</div>
              <div className="">
                <button
                  className="btn btn-outline btn-info btn-md"
                  onClick={() => toggleOrderDetails(index)}
                >
                  {expandedOrders[index] ? "Show Less" : "Show More"}
                </button>
              </div>
            </div>
            {expandedOrders[index] && (
              <div className="order-details">
                <h2>Delivery Details:</h2>
                <p>Name: {order.orderInfo.data.name}</p>
                <p>Phone: {order.orderInfo.data.phone}</p>
                <p>Pincode: {order.orderInfo.data.Pincode}</p>
                <p>Home: {order.orderInfo.data.home}</p>
                {/* Add more details as needed */}
              </div>
            )}
          </div>
        ))}
        <h1>
          {orders.length <= 0 ? (
            <p className="text-3xl text-center mt-10">Order is Empty</p>
          ) : (
            ""
          )}
        </h1>
      </div>
    </div>
  );
};

export default Order;
