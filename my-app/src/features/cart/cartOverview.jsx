import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getTotalCartPrice, getTotalCartQauntity } from "./cartSlice";
import { formatCurrency } from "../utils/helpers";

function CartOverview() {
  const totalCartQuantity = useSelector(getTotalCartQauntity);
  const totalCartPrice = useSelector(getTotalCartPrice);

  if (!totalCartQuantity) return null;
  return (
    <div className="flex items-center space-x-4 bg-slate-800 p-4 text-white">
      <p className="space-x-2 font-semibold text-stone-300">
        <span>{totalCartQuantity} pizzas</span>
        <span>{formatCurrency(totalCartPrice)}</span>
      </p>
      <Link to={"/cart"}>Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
