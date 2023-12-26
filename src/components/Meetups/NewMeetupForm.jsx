/* eslint-disable react/prop-types */
import { useRef } from "react";

export default function NewMeetupForm(props) {
  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const adressInputRef = useRef();
  const descriptionInputRef = useRef();

  function handleFormSubmit(event) {
    event.preventDefault();

    const enteredTitle = titleInputRef.current.value;
    const enteredImage = imageInputRef.current.value;
    const enteredAdress = adressInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;

    const newMeetup = {
      title: enteredTitle,
      image: enteredImage,
      adress: enteredAdress,
      description: enteredDescription,
    };

    props.postNewMeetup(newMeetup);
  }

  return (  
    <form onSubmit={handleFormSubmit}>
      <div>
        <label
          htmlFor="title"
          className="text-blue-500 cursor-pointer"
        >
          Title
        </label>
        <input
          type="text"
          id="title"
          className="border border-zinc-900/10 focus:outline-none focus:border-blue-400 px-3 py-1 rounded-md w-full"
          ref={titleInputRef}
        />
      </div>

      <div className="mt-5">
        <label
          htmlFor="image"
          className="text-blue-500 cursor-pointer"
        >
          Image Url
        </label>
        <input
          type="text"
          id="image"
          className="border border-zinc-900/10 focus:outline-none focus:border-blue-400 px-3 py-1 rounded-md w-full"
          ref={imageInputRef}
        />
      </div>

      <div className="mt-5">
        <label
          htmlFor="adress"
          className="text-blue-500 cursor-pointer"
        >
          Adress
        </label>
        <input
          type="text"
          id="adress"
          className="border border-zinc-900/10 focus:outline-none focus:border-blue-400 px-3 py-1 rounded-md w-full"
          ref={adressInputRef}
        />
      </div>

      <div className="mt-5">
        <label
          htmlFor="description"
          className="text-blue-500 cursor-pointer"
        >
          Description
        </label>
        <textarea
          id="description"
          rows="5"
          className="border border-zinc-900/10 focus:outline-none focus:border-blue-400 px-3 py-1 rounded-md w-full"
          ref={descriptionInputRef}
        ></textarea>
      </div>

      <div className="flex items-center justify-end mt-5">
        <button className="bg-blue-500 text-white px-5 py-1 rounded-md hover:bg-blue-400 transition-all ease-in-out duration-300">
          Submit form
        </button>
      </div>
    </form>
  );
}
