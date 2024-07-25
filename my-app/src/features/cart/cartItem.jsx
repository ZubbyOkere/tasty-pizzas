import { formatCurrency } from "../utils/helpers";

function CartItem({ item }) {
  const { pizzaId, name, quantity, totalPrice } = item;

  return (
    <li>
      <p>
        {quantity}&times; {name}
      </p>
      <div>
        <p>
          {formatCurrency(totalPrice)} {pizzaId}
        </p>
      </div>
    </li>
  );
}

export default CartItem;
