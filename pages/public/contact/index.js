// ... (use client import remains unchanged)
import React, { useRef } from "react";
import Auth from "../../../layout/Auth";
import { useRouter } from "next/router";

const Contact = () => {
  const router = useRouter();
  const fileInputRef = useRef(null);

  const navigate = (url) => {
    router.push(url);
  };

  return (
    <div className="container m-auto flex flex-col justify-center items-center w-full my-5">
      <div className="flex justify-start w-full">
        <h1 className="text-4xl font-bold">Contact Us</h1>
      </div>
      <div className="w-full max-w-xl m-0">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4 font-Montserrat">
            <label
              className="block text-gray-700 text-sm font-bold mb-2 "
              htmlFor="username"
            >
              Name
            </label>
            <input
              className="shadow appearance-none input-border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Enter your name"
            />
          </div>
          <div className="mb-4 font-Montserrat">
            <label
              className="block text-gray-700 text-sm font-bold mb-2 "
              htmlFor="usernumber"
            >
              Phone Number
            </label>
            <input
              className="shadow appearance-none input-border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline "
              id="usernumber"
              type="tel"
              placeholder="0123456789"
            />
          </div>
          <div className="mb-2 font-Montserrat">
            <label
              className="block text-gray-700 text-sm font-bold mb-2 "
              htmlFor="message"
            >
              Message:
            </label>
            <textarea
              className="shadow appearance-none input-border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-3 h-32 resize-none"
              id="message"
              placeholder="Type your message here..."
            />
          </div>
          <div>
            <button
              className="bg-primary text-text_light w-full hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline font-Montserrat "
              type="button"
              onClick={() => {
                navigate("/");
              }}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;

Contact.Layout = Auth;
