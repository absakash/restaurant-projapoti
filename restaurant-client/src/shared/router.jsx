import { createBrowserRouter } from "react-router-dom";
import Home from "../components/homePages/Home";
import MainLayout from "../layout/MainLayout";
import Items from "../components/items/Items";
import ItemInfo from "../components/items/ItemInfo";
import PracticeItems from "../components/practice/PracticeItems";
import Cart from "../components/cart/Cart";
import Order from "../components/order/Order";
import Address from "../components/order/Address";
import Fail from "../components/payment/Fail";
import Success from "../components/payment/Success";
import Orders from "../components/order/Orders";
import Dashboard from "../components/dashboard/Dashboard";

const router=createBrowserRouter([
      {
            path:'/',
            element:<MainLayout></MainLayout>,
            children:[
                  {
                        path:'/',
                        element:<Home></Home>
                  },
                  {
                        path:'/items',
                        element:<Items></Items>
                  },
                  {
                        path:'/itemInfo/:_id',
                        element:<ItemInfo></ItemInfo>,
                        loader: ({params}) => fetch(`http://localhost:4000/items/${params._id}`)
                  },
                  {
                        path:'/cart',
                        element:<Cart></Cart>
                  },
                  {
                        path:'/practItems',
                        element:<PracticeItems></PracticeItems>
                  },
                  {
                        path:'/ordered',
                        element:<Order></Order>
                  },
                  {
                        path:'/address',
                        element:<Address></Address>
                  },
                  {
                        path:'/ordered',
                        element:<Order></Order>
                  },
                  {
                        path:'/orders',
                        element:<Orders></Orders>
                  },
                  {
                        path:'/payment/success/:tranId',
                        element:<Success></Success>
                  },
                  {
                        path:'/payment/fail/:tranId',
                        element:<Fail></Fail>
                  },
                  {
                        path:'*',
                        element:<div>delopint pahase</div>
                  }
            ]
      },
      {
            path:'/dashboard',
            element:<Dashboard></Dashboard>,
            children:[
                 {
                  path:'*',
                  element:<div>coming soon </div>
                 }
                  
            ]
      }
])

export default router