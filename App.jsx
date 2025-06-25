import React, { useState } from "react";
import Products from "./components/Products/Products";
import Placement from "./components/Placement/Placement";
import Product from "./components/Product/Product";

function App() {

  const [cart, setCart] = useState([])

  const addToCart = (product) => {
   const newCart = [...cart, product];
   setCart(newCart);
  }

  return (
    <div className="flex gap-x-6">
      <Products addToCart = {addToCart}></Products>
      <Placement cart = {cart}></Placement>
    </div>
  )
}

export default App;
