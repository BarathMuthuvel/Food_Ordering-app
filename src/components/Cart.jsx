import React from "react";

import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/CartSlice";


const Cart = () => {

   const cartItems = useSelector((store) => store.cart.items);

   const dispatch = useDispatch()

   const clearCartHandlear = () => {
      dispatch(clearCart())
   }

    return (
        <div className="text-center m-4 p-4">
            <h2 className="text-2xl font-bold">Cart</h2>
            <div className="w-6/12 m-auto">
                <button className="m-2 p-1 rounded-lg bg-red-400" onClick={clearCartHandlear}>Clear Cart</button>
                <ItemList items={cartItems}/>
                {cartItems.length === 0 && <div className="m-5 font-serif">Your Cart is empty! Please Add Items to Your Cart</div>}
            </div>
        </div>
    )
}

export default Cart;