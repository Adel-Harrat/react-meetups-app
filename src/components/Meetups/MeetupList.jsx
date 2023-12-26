/* eslint-disable react/prop-types */
import MeetupItem from "./MeetupItem";

export default function MeetupList(props) {
  return (
    <>
      {props.meetups.map((meetup) => (
        <MeetupItem
          key={meetup.id}
          meetup={meetup}
        />
      ))}
    </>
  );
}
