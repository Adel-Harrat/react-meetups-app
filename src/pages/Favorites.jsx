import { useContext } from "react";
import FavoritesContext from "../store/favorites-context";
import MeetupList from "../components/Meetups/MeetupList";

function Favorites() {
  const favoritesCtx = useContext(FavoritesContext);

  let content;

  if (favoritesCtx.totalFavorites === 0) {
    content = <p>You got no favorites yet, Start adding some?</p>;
  } else {
    content = <MeetupList meetups={favoritesCtx.favorites} />;
  }

  return (
    <div>
      <h1 className="text-sm font-bold uppercase text-blue-600 tracking-wider mb-5">
        My favorites
      </h1>

      <section className="space-y-10">{content}</section>
    </div>
  );
}

export default Favorites;
