import React from "react";
import Auth from "../../layout/Auth";
import logo from "../../assets/imgs/airCasita_logo.png";

const signUp = () => {
  return (
    <div class="container flex justify-center">
      <div class="w-full max-w-xl">
        <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div class="flex justify-center">
            <div class="flex justify-center">
              <img src={logo.src} class="w-2/4" />
            </div>
          </div>
          <div class="mb-4">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="username"
            >
              Name
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="name"
              placeholder="user name"
            />
          </div>
          <div class="mb-4">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="username"
            >
              Email
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="email"
              placeholder="user email"
            />
          </div>
          <div class="mb-6">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="password"
            >
              Password
            </label>
            <input
              class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="******************"
            />
            <p class="text-primary text-xs italic">Please choose a password.</p>
          </div>
          <div class="mb-4">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="username"
            >
              Phone Number
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="usernumber"
              type="number"
              placeholder="user number"
            />
          </div>
          <div class="mb-2">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="password"
            >
              Your Identification: (Upload photo of a government ID card
              ('driver's license-both sides;or passport data photo'))
            </label>
            <input
              class=" border rounded w-full py-2 px-3 text-gray-700 mb-3 "
              type="file"
            />
          </div>
          <div class="mb-4">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="username"
            >
              Your Selfie
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="usernumber"
              type="file"
            />
          </div>

          <div>
            <button
              class="bg-secondary  w-full  hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline "
              type="button"
            >
              Sign Up
            </button>
          </div>
          <div class="flex ">
            <p class="pr-2 text-sm mt-3 mb-1">
              Already have an acount :
              <a href="/auth/signIn" class="text-primary pl-1">
                Sign In
              </a>
            </p>
          </div>
          <div class="flex flex-wrap">
            <p class="pr-2 text-sm">
              Your{" "}
              <a href="airCASITA.com" class="text-secondary">
                airCASITA.com
              </a>{" "}
              acount:
            </p>
            <p class="text-sm">
              <a href="signIn">signIn</a> by your name & phone number
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default signUp;
