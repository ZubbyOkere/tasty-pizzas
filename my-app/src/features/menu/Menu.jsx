import { useLoaderData } from "react-router-dom";
import { getMenu } from "../services/apiRestaurant";
import MenuItem from "./MenuItem";

function Menu() {
  const menu = useLoaderData();
  return (
    <ul className="grid sm:grid-cols-3 gap-4 lg:grid-cols-4 mx-auto">
      {menu.map((pizza) => (
        <MenuItem pizza={pizza} key={pizza.id} />
      ))}
    </ul>
  );
}

export async function menuLoader() {
  const menu = await getMenu();
  return menu;
}

export default Menu;
