/* eslint-disable react/prop-types */

import { useContext } from "react";
import FavoritesContext from "../../store/favorites-context";
export default function MeetupItem(props) {
  const { meetup } = props;

  const favoritesCtx = useContext(FavoritesContext);

  const itemIsFavorite = favoritesCtx.itemIsFavorite(meetup.id);

  function toggleFavoriteStatusHandler() {
    if (itemIsFavorite) {
      favoritesCtx.removeFavorite(meetup.id);
    } else {
      favoritesCtx.addFavorite({
        id: meetup.id,
        title: meetup.title,
        image: meetup.image,
        adress: meetup.adress,
        description: meetup.description,
      });
    }
  }

  return (
    <div className="flex items-stretch justify-between gap-5">
      <div className="basis-1/2">
        <img
          src={meetup.image ? meetup.image : "/no-image.png"}
          className="rounded-lg w-full h-48 object-cover"
        />
      </div>

      <div className="basis-1/2 flex flex-col">
        <h2 className="text-2xl font-bold mt-5">{meetup.title}</h2>
        <span className="text-blue-500 font-bold text-xs mt-1">
          {meetup.adress}
        </span>
        <p className="text-gray-600 text-base mt-5">{meetup.description}</p>
        <div className="flex items-center justify-end mt-auto">
          <button
            onClick={toggleFavoriteStatusHandler}
            className="cursor-pointer hover:bg-blue-100 rounded-full p-2 transition-all duration-300 ease-in-out group "
          >
            {itemIsFavorite ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6 text-blue-600"
              >
                <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                />
              </svg>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
