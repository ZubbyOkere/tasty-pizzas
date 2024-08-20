import { useState } from "react";
import { Form, redirect, useNavigate } from "react-router-dom";
import { createOrder } from "../services/apiRestaurant";
import { useDispatch, useSelector } from "react-redux";
import { getCart, getTotalCartPrice } from "../cart/cartSlice";
import { fetchAddress } from "../users/userSlice";

// https://uibakery.io/regex-library/phone-number
const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str
  );

function CreateOrder() {
  const { userName, status, position, address, error } = useSelector(
    (state) => state.user
  );
  console.log("User state:", userName, status, position, address);

  const isLoadingAddress = status === "loading";
  const navigation = useNavigate();
  const isSubmiting = navigation.state === "submitting";
  const [withPriority, setWithPriority] = useState(false);
  const cart = useSelector(getCart);
  const totalCartPrice = useSelector(getTotalCartPrice);
  const dispatch = useDispatch();

  const priorityPrice = withPriority ? totalCartPrice * 0.2 : 0;
  const finalPrice = totalCartPrice + priorityPrice;

  return (
    <div className="flex flex-col justify-center items-center bg-red-600 p-8">
      <h2 className="font-bold text-2xl">Ready to order? Let's go!</h2>

      <Form method="POST" action="/order" className="flex flex-col w-1/3">
        <div className="flex flex-col">
          <label>First Name</label>
          <input
            type="text"
            name="customer"
            required
            className="sm:py-2 sm:px-4 outline-none rounded-full"
            defaultValue={userName}
          />
        </div>

        <div>
          <label>Phone number</label>
          <div>
            <input
              type="tel"
              name="phone"
              required
              className="w-full  outline-none rounded-full sm:py-2 sm:px-4"
            />
          </div>
        </div>

        <div className="relative">
          <label>Address</label>
          <div>
            <input
              type="text"
              name="address"
              required
              className="w-full  outline-none rounded-full sm:py-2 sm:px-4"
              disabled={isLoadingAddress}
              defaultValue={address}
            />
            {address === "error" && (
              <p className="text-red-600">There was an error {error}</p>
            )}
          </div>
          {(!position || !position.latitude || !position.longitude) &&
            !isSubmiting && (
              <button
                onClick={(e) => {
                  e.preventDefault();
                  dispatch(fetchAddress());
                }}
                className="absolute right-0 top-7 bg-red-600 py-1 px-2 rounded-full"
                disabled={isSubmiting || isLoadingAddress}
              >
                Get Position
              </button>
            )}
        </div>

        <div>
          <input
            type="checkbox"
            name="priority"
            id="priority"
            checked={withPriority}
            onChange={(e) => setWithPriority(e.target.checked)}
          />
          <label htmlFor="priority">Want to yo give your order priority?</label>
        </div>

        <div>
          <input type="hidden" name="cart" value={JSON.stringify(cart)} />
          {!address && (
            <button
              disabled={isSubmiting}
              className="bg-blue-400 py-2 px-4 rounded-full hover:bg-black hover:text-white inline-block transition-colors duration-300"
            >
              {isSubmiting === "submitting"
                ? "placing order"
                : `Order now from ${finalPrice}`}
            </button>
          )}
        </div>
      </Form>
    </div>
  );
}

export async function createAction({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  console.log(data);

  const order = {
    ...data,
    cart: JSON.parse(data.cart),
    priority: data.priority === "on",
  };

  const newOrder = await createOrder(order);
  console.log(newOrder);

  return redirect(`/order/${newOrder.id}`);
}

export default CreateOrder;
