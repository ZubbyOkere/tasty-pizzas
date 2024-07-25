import React from "react";
import Header from "./Header";
import CartOverview from "../cart/cartOverview";
import { Outlet, useNavigation } from "react-router-dom";
import LoadingSpinner from "./LoadingSpinner";

function AppLayout() {
  const navigate = useNavigation();
  const isLoading = navigate.state === "loading";
  return (
    <div className="layout">
      {isLoading && <LoadingSpinner />}
      <Header />

      <main>
        <h1>Content</h1>
        <Outlet />
      </main>

      <CartOverview />
    </div>
  );
}

export default AppLayout;
