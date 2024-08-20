import React from "react";
import { useSelector } from "react-redux";

function Username() {
  const userName = useSelector((state) => state.user.userName);

  if (!userName) return null;
  return <div className="font-semibold hidden sm:block">{userName}</div>;
}

export default Username;
