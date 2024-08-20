import { useDispatch } from "react-redux";
import { formatCurrency } from "../utils/helpers";
import { deleteItem } from "./cartSlice";
import UpdateCartButton from "../ui/UpdateCartButton";

function CartItem({ item }) {
  const { pizzaId, name, quantity, totalPrice } = item;

  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteItem(pizzaId));
  };

  return (
    <li className="flex justify-between items-center px-8 mt-9">
      <p>
        {quantity}&times; {name}
      </p>
      <div className="flex justify-between items-center space-x-4">
        <p>
          {formatCurrency(totalPrice)} {pizzaId}
        </p>
        <UpdateCartButton pizzaId={pizzaId} />
        <button
          className="bg-slate-300 py-2 px-4 rounded-full hover:bg-black hover:text-white"
          onClick={handleDelete}
        >
          Delete
        </button>
      </div>
    </li>
  );
}

export default CartItem;
