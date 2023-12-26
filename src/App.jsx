import "./App.css";

import { Route, Routes } from "react-router-dom";
import AllMeetupsPage from "./pages/AllMeetups";
import NewMeetupPage from "./pages/NewMeetup";
import FavoritesPage from "./pages/Favorites";
import MainNavigation from "./components/MainNavigation";

function App() {
  return (
    <div>
      <MainNavigation />

      <section className="bg-white max-w-3xl mx-auto mt-10 px-10 py-10 text-lg shadow-md rounded-md mb-10">
        <Routes>
          <Route
            path="/"
            element={<AllMeetupsPage />}
          />

          <Route
            path="/new-meetup"
            element={<NewMeetupPage />}
          />

          <Route
            path="/favorites"
            element={<FavoritesPage />}
          />
        </Routes>
      </section>
    </div>
  );
}

export default App;
