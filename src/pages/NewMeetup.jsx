import NewMeetupForm from "../components/Meetups/NewMeetupForm";

import { useNavigate } from "react-router-dom";

function NewMeetup() {
  const navigate = useNavigate();

  function postNewMeetup(meetup) {
    fetch(
      "https://meetup-app-b5b97-default-rtdb.europe-west1.firebasedatabase.app/meetups.json",
      {
        method: "POST",
        body: JSON.stringify(meetup),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then(() => navigate("/"));
  }

  return (
    <div>
      <NewMeetupForm postNewMeetup={postNewMeetup} />
    </div>
  );
}

export default NewMeetup;
