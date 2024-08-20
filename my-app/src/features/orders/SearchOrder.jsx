import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchOrder() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!query) return;
    navigate(`/order/${query}`);
    setQuery("");
  };
  return (
    <form onSubmit={handleSubmit} className="">
      <input
        placeholder="search for your order here"
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className=" rounded-full w-28 sm:w-40 md:w-96 px-4 py-2 outline-none"
      />
    </form>
  );
}

export default SearchOrder;
