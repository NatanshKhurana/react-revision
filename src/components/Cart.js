import React from "react";
import { useSelector } from "react-redux";
import ItemList from "./itemList";
import { useDispatch } from "react-redux";
import { clearCart } from "../store/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  }
  

  return (
   <div className="text-center m-auto w-6/12">
    <div className="font-bold text-2xl my-10">Cart</div>
    <button className="bg-black text-white p-2 rounded cursor-pointer mb-4" onClick={handleClearCart}>clear cart</button>
    <div>{cartItems.length === 0 && <p>cart is empty, please add some items</p>}</div>
    <ItemList items={cartItems}/>
   </div>
  );
};

export default Cart;
