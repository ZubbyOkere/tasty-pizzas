import React from "react";
import { Link } from "react-router-dom";
import SearchOrder from "../orders/SearchOrder";

function Header() {
  return (
    <header>
      <SearchOrder />
      <Link to={"/"}>Pizza Co.</Link>
      <p>Zubby</p>
    </header>
  );
}

export default Header;
