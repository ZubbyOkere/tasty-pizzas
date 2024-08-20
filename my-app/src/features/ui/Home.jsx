import { useSelector } from "react-redux";
import CreateUser from "../users/CreateUser";
import { Link } from "react-router-dom";
function Home() {
  const username = useSelector((state) => state.user.userName);
  return (
    <div className="my-10 text-center px-4">
      <h1 className="font-bold text-center md:text-3xl">
        The best pizza.
        <br />
        Straight out of the oven, straight to you.
      </h1>
      {username === "" ? (
        <CreateUser />
      ) : (
        <button>
          <Link to={"/menu"} className="font-bold text-slate-700">
            Continue to ordering, {username}
          </Link>
        </button>
      )}
    </div>
  );
}

export default Home;
