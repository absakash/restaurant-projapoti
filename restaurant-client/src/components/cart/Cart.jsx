import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import Mymodal from "../modal/Mymodal";

const Cart = () => {
 const navigate=useNavigate()
  const [carts, setCarts] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  localStorage.setItem('totalPrice',totalPrice)
  useEffect(() => {
    fetch("http://localhost:4000/cart")
      .then((res) => res.json())
      .then((data) => {
      //   console.log("carts data ", data);
        // Add a count property to each cart object with an initial value of 1
        const cartsWithCount = data.map((cart) => ({ ...cart, count: 1 }));
        console.log("main carts data ",cartsWithCount)
        setCarts(cartsWithCount);
      });
  }, []);


  const handleIncrement = (index) => {
    // Create a new array with the updated count for the specific item
    const updatedCarts = [...carts];
//     console.log("updateds increment carts ",updatedCarts)
    updatedCarts[index].count = updatedCarts[index].count + 1;
    setCarts(updatedCarts);
  };

  const handleDecrement = (index) => {
    // Create a new array with the updated count for the specific item
    const updatedCarts = [...carts];
    updatedCarts[index].count = Math.max(1, updatedCarts[index].count - 1);
    setCarts(updatedCarts);
  };

  useEffect(() => {
      // Calculate the total price whenever the carts or their counts change
      const calculatedTotalPrice = carts.reduce(
        (acc, cart) => acc + cart.price * cart.count,
        0
      );
      setTotalPrice(calculatedTotalPrice);
    }, [carts]);

    const removeCart = (cartItem) => {
      const result = window.confirm('Are you sure you want to remove this item?');
      
      if (result) {
        // Perform removal logic here
        const updatedCarts = carts.filter(item => item._id !== cartItem._id); // Assuming each item has a unique identifier like '_id'
        
        // Update the state with the new carts
        setCarts(updatedCarts);
        
        // Make a request to the server to update the cart
        fetch('http://localhost:4000/deletecart', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(cartItem)
        })
        .then(res => res.json())
        .then(data => {
          console.log(data);
          if (data.deletedCount > 0) {
            toast.success('Successfully removed from your cart');
          }
        })
        .catch(error => {
          console.error('Error removing item:', error);
          // If there's an error, revert the local state to the previous state
          setCarts([...carts]);
        });
      }
    };

    const handlePayment = () => {
      // Assuming you want to update the payment status to 'Pending' for each item in the cart
      const updatedCarts = carts.map((cart) => ({ ...cart, payment: 'Pending' }));
     
      // Make a request to the server to update the cart with the new payment status
      fetch('http://localhost:4000/updatecart', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedCarts),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          // Handle the response as needed
          if (data.updatedCount > 0) {
            toast.success('insert address ');
            // You may want to clear the local cart state or perform other actions after successful payment
          } else {
            toast.error(' Please try again.');
          }
        })
        .catch((error) => {
          console.error('Error updating cart:', error);
          // Handle the error, if any
        });
    
      // Navigate to the address page after processing payment
      navigate('/address');
    };
    
    
    
    
    
  return (
      <div className="ml-2 mr-2 p-2 md:max-w-7xl md:mx-auto">
      <div>
        <div className="overflow-x-auto">
          <div className="">
          <div className="mt-10 sm:ml-10 ml-1 lg:p-10 md:p-5 sm:p-3 p-2">
              {carts.map((cart, index) => (
                <div className="grid grid-flow-col items-center mb-10" key={cart._id}>
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
                      <div title={cart.strCategory} className="font-bold">{cart.strCategory.substring(0, 5)}</div>

                        <div className="text-sm opacity-50 md:hidden">
                          {cart.count}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="">
                    <p>{cart.price * cart.count}</p>
                  </div>
                  <div className="hidden md:block"> {cart.count} </div>
                  <div>
                    <span
                      onClick={() => handleIncrement(index)}
                      className="btn btn-outline btn-info md:mr-2"
                    >
                      +
                    </span>
                    <span
                      onClick={() => handleDecrement(index)}
                      className="btn btn-outline btn-primary"
                    >
                      -
                    </span>
                  </div>
                  <div className="">
                    <button onClick={()=>removeCart(cart)} className="btn btn-outline btn-info btn-md md:mr-5">
                      Remove
                    </button>
                    {/* <button className="btn btn-outline btn-info btn-md ">
                      {cart.payment || 'Pay Now'}
                    </button> */}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
      <div>
            {
                  carts.length>0? <div className="text-center mt-5">

                  <h1 className="text-center text-3xl text-red-500 mb-3">Total price - {totalPrice}</h1>
                  {/* <button onClick={handlePayment} className="btn btn-outline bg-info">Pay Now</button> */}
                  <button onClick={handlePayment} className="btn btn-outline btn-info">Pay now </button>

                  </div>:
                  <div className="text-center"><h1 className="text-center text-3xl">Your cart is Empty </h1>
                   <Link className="text-center w-32 mx-auto underline text-blue-700" to='/items'>Go to Items</Link>
                  </div>
            }
      </div>
     
   
    
    </div>
  );
};

export default Cart;
