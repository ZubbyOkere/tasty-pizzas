import React from "react";
import { Link } from "react-router-dom";
import SearchOrder from "../orders/SearchOrder";
import Username from "../users/Username";

function Header() {
  return (
    <header className="bg-slate-500 uppercase tracking-widest px-4 py-3 border-b border-stone-600 sm:px-6 flex justify-between space-x-3 items-center">
      <Link to={"/"} className="tracking-widest">
        Pizza Co.
      </Link>
      <SearchOrder />
      <Username />
    </header>
  );
}

export default Header;
