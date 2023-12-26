import { useEffect } from "react";
import MeetupList from "../components/Meetups/MeetupList";
import { useState } from "react";

function AllMeetups() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedMeetups, setLoadedMeetups] = useState([]);

  useEffect(() => {
    setIsLoading(true);

    fetch(
      "https://meetup-app-b5b97-default-rtdb.europe-west1.firebasedatabase.app/meetups.json"
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        const meetups = [];

        for (const key in data) {
          const meetup = {
            id: key,
            ...data[key],
          };

          meetups.push(meetup);
        }

        setIsLoading(false);
        setLoadedMeetups(meetups);
      });
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  return (
    <div>
      <h1 className="text-sm font-bold uppercase text-blue-600 tracking-wider mb-5">
        All meetups
      </h1>

      <section className="space-y-10">
        <MeetupList meetups={loadedMeetups} />
      </section>
    </div>
  );
}

export default AllMeetups;
