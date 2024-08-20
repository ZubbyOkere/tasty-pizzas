import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decreaseQuantity,
  getCurrentQuantityById,
  increaseQuantity,
} from "../cart/cartSlice";

const UpdateCartButton = ({ pizzaId }) => {
  const currentQuantity = useSelector(getCurrentQuantityById(pizzaId));

  const dispatch = useDispatch();

  const handleDecrement = () => {
    dispatch(decreaseQuantity(pizzaId));
  };
  const handleIncrement = () => {
    dispatch(increaseQuantity(pizzaId));
  };
  return (
    <div>
      <span
        onClick={handleDecrement}
        className="bg-slate-300 py-1 px-2 rounded-full hover:bg-black hover:text-white cursor-pointer"
      >
        -
      </span>
      {currentQuantity}
      <span
        onClick={handleIncrement}
        className="bg-slate-300 py-1 px-2 rounded-full hover:bg-black hover:text-white cursor-pointer"
      >
        +
      </span>
    </div>
  );
};

export default UpdateCartButton;
