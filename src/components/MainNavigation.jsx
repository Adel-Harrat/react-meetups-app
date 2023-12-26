import { useContext } from "react";
import { Link } from "react-router-dom";
import FavoritesContext from "../store/favorites-context";

export default function MainNavigation() {
  const favoritesCtx = useContext(FavoritesContext);
  const totalFavorites = favoritesCtx.totalFavorites;

  return (
    <nav className="bg-blue-500">
      <div className="flex items-center justify-between px-40">
        <h1 className="text-white font-bold text-xl">
          <Link to="/">Meetup App</Link>
        </h1>

        <ul className="flex items-center justify-center gap-10 text-lg py-10">
          <li>
            <Link
              className="text-white"
              to="/"
            >
              All meetups
            </Link>
          </li>
          <li>
            <Link
              className="text-white flex items-center justify-between"
              to="/favorites"
            >
              My favorites
              {totalFavorites ? (
                <span className="h-5 w-5 bg-white text-blue-500 font-bold rounded-full ml-2 text-sm  flex items-center justify-center">
                  {totalFavorites}
                </span>
              ) : null}
            </Link>
          </li>
          <li>
            <Link
              className="text-white"
              to="/new-meetup"
            >
              Add new meetup!
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
