import React from "react"
import Navbar from "./components/Navbar";
import Homepage from "./components/Homepage";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { electronics, vehicle, furniture } from "./storage"
import ProductComponent from "./components/ProductComponent";
import Purchase from "./components/Purchase";
import AddToCart from "./components/AddToCart";
import BuyNow from "./components/BuyNow";
import Login from "./components/Login";
import Register from "./components/Register";

export default function App() {
  

  return (
    <>

      {/* <Login/> */}
      <BrowserRouter >

        <Routes>
          // only for "" allowed otherwise we have to use outlet  here
          // thus for every parent page use "" and content inside index tab
          <Route path="/" element={""}>
            <Route index element={<Homepage />} />
            <Route path="/electronic" element={""} >
              <Route index element={<ProductComponent type={electronics} />} />
              <Route path="*" element={<Purchase type={electronics} />} />
            </Route>
            <Route path="/vehicle" element={""} >
              <Route index element={<ProductComponent type={vehicle} />} />
              <Route path="*" element={<Purchase type={vehicle} />} />
            </Route>
            <Route path="/furniture" element={""} >
              <Route index element={<ProductComponent type={furniture} />} />
              <Route path="*" element={<Purchase type={furniture} />} />
            </Route>


            <Route path="*" element={"404 Page Not Found"} />

            <Route path="cart" element={<AddToCart />} />
            <Route path="buy" element={<BuyNow />} />
            <Route path="login" element={<Login/>}/>
            <Route path="register" element={<Register/>}/>


          </Route>
        </Routes>
      </BrowserRouter>

      {/* <ProductComponent type={vehicle} />
      <Homepage/> */}
    </>


  )
}