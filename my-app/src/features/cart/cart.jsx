import { Link } from "react-router-dom";
import CartItem from "../cart/cartItem";
import EmptyCart from "./EmptyCart";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, deleteItem, getCart } from "./cartSlice";

function Cart() {
  const username = useSelector((state) => state.user.userName);

  const dispatch = useDispatch();

  const cart = useSelector(getCart);

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  if (!cart.length) return <EmptyCart />;
  return (
    <div>
      <Link
        to="/menu"
        className="bg-blue-400 py-2 px-4 rounded-full hover:bg-black hover:text-white"
      >
        &larr; Back to menu
      </Link>

      <h2 className="mt-4">Your cart, {username}</h2>
      <ul>
        {cart.map((item) => (
          <CartItem item={item} key={item.pizzaId} />
        ))}
      </ul>

      <div>
        <Link
          to="/order"
          className="bg-blue-400 py-2 px-4 rounded-full hover:bg-black hover:text-white"
        >
          Order pizzas
        </Link>
        <button
          className="bg-blue-400 py-2 px-4 rounded-full hover:bg-black hover:text-white"
          onClick={handleClearCart}
        >
          Clear cart
        </button>
      </div>
    </div>
  );
}

export default Cart;
