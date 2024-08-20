// Test ID: IIDSAT
import OrderItem from "../orders/OrderItem";

import { useLoaderData } from "react-router-dom";
import { getOrder } from "../services/apiRestaurant";
import { calcMinutesLeft, formatCurrency, formatDate } from "../utils/helpers";

function Order() {
  const order = useLoaderData();
  const {
    id,
    status,
    priority,
    priorityPrice,
    orderPrice,
    estimatedDelivery,
    cart,
  } = order;
  const deliveryIn = calcMinutesLeft(estimatedDelivery);

  return (
    <div className="space-y-6">
      <div className="flex justify-between px-9">
        <h1 className="text-xl font-semibold">Order ID is #{id} Status</h1>

        <div>
          {priority && (
            <span className="bg-red-600 text-black rounded-full py-2 px-4">
              Priority
            </span>
          )}
          <span className="bg-green-600 text-black rounded-full py-2 px-4">
            {status} order
          </span>
        </div>
      </div>

      <div>
        <p>
          {deliveryIn >= 0
            ? `Only ${calcMinutesLeft(estimatedDelivery)} minutes left 😃`
            : "Order should have arrived"}
        </p>
        <p>(Estimated delivery: {formatDate(estimatedDelivery)})</p>
      </div>

      <ul>
        {cart.map((item) => (
          <OrderItem item={item} key={item.id} />
        ))}
      </ul>
      <div>
        <p>Price pizza: {formatCurrency(orderPrice)}</p>
        {priority && <p>Price priority: {formatCurrency(priorityPrice)}</p>}
        <p>To pay on delivery: {formatCurrency(orderPrice + priorityPrice)}</p>
      </div>
    </div>
  );
}

export async function orderLoader({ params }) {
  const order = await getOrder(params.orderId);
  return order;
}

export default Order;
