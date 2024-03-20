import { FaHandshake } from "react-icons/fa6";

function GetInTouch() {
  return (
    <div className="mt-10">
      <h1 className="text-4xl font-bold leading-relaxed flex gap-4 items-center">
        <span className="bg-basic p-3 rounded-full">
          <FaHandshake className="bg-basic" />
        </span>
        Get In Touch
      </h1>
      <div className="mt-10 m-auto p-5 flex flex-col gap-6 sm:w-3/4">
        <div>
          <input
            type="text"
            name="userName"
            id="userName"
            placeholder="Your Name*"
            className="placeholder:text-formTextColor bg-background p-3 w-full rounded-full
            focus:outline-none focus:ring-4 focus:ring-stone-700 focus:ring-offset-2 focus:ring-offset-btnBackground"
          />
        </div>
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="w-full lg:w-1/2">
            <input
              type="email"
              name="userEmail"
              id="userEmail"
              placeholder="Your Email*"
              className="placeholder:text-formTextColor bg-background p-3 w-full rounded-full
              focus:outline-none focus:ring-4 focus:ring-stone-700 focus:ring-offset-2 focus:ring-offset-btnBackground"
            />
          </div>
          <div className="w-full lg:w-1/2">
            <input
              type="text"
              name="userPhone"
              id="userPhone"
              placeholder="Your Number*"
              className="placeholder:text-formTextColor bg-background p-3 w-full rounded-full
              focus:outline-none focus:ring-4 focus:ring-stone-700 focus:ring-offset-2 focus:ring-offset-btnBackground"
            />
          </div>
        </div>
        <div>
          <textarea
            name="message"
            id="message"
            cols="30"
            rows="10"
            placeholder="Your Message Here..."
            className="placeholder:text-formTextColor bg-background p-3 w-full rounded-3xl
            focus:outline-none focus:ring-4 focus:ring-stone-700 focus:ring-offset-2 focus:ring-offset-btnBackground"
          ></textarea>
        </div>
        <div>
          <button className="p-1 px-6 bg-basic rounded-full text-stone-950 font-semibold float-end">
            Send Message
          </button>
        </div>
      </div>
    </div>
  );
}

export default GetInTouch;
