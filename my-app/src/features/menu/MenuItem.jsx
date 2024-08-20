import { useDispatch, useSelector } from "react-redux";
import { formatCurrency } from "../utils/helpers";
import { addItem, deleteItem, getCurrentQuantityById } from "../cart/cartSlice";
import UpdateCartButton from "../ui/UpdateCartButton";

function MenuItem({ pizza }) {
  const dispatch = useDispatch();

  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;

  const currentQuantity = useSelector(getCurrentQuantityById(id));
  console.log(currentQuantity);

  const isInCart = currentQuantity > 0;

  const handleAddToCart = () => {
    const newItem = {
      pizzaId: id,
      name,
      quantity: 1,
      unitPrice,
      totalPrice: unitPrice * 1,
    };
    dispatch(addItem(newItem));
  };

  const handleDeleteFromCart = () => {
    dispatch(deleteItem(id));
  };

  return (
    <li className="mx-auto w-48">
      <img src={imageUrl} alt={name} />
      <div>
        <p>{name}</p>
        <p>{ingredients.join(", ")}</p>
        <div className="flex justify-between items-center mt-auto">
          {!soldOut ? <p>{formatCurrency(unitPrice)}</p> : <p>Sold out</p>}

          {!isInCart && (
            <button
              className="bg-slate-300 py-1 px-2 rounded-full hover:bg-black hover:text-white"
              onClick={handleAddToCart}
            >
              Add to cart
            </button>
          )}
          {isInCart && (
            <div className="flex justify-center items-center gap-2">
              <UpdateCartButton
                currentQuantity={currentQuantity}
                pizzaId={id}
              />
              <button
                onClick={handleDeleteFromCart}
                className="bg-slate-300 py-1 px-2 rounded-full hover:bg-black hover:text-white"
              >
                Delete
              </button>
            </div>
          )}
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
