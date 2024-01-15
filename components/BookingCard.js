import React, { useState } from "react";
import { CiCircleMinus, CiCirclePlus, CiStar } from "react-icons/ci";

const BookingCard = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-full max-w-md p-4 bg-white border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
      <div className="flex items-center justify-between mb-4">
        <span className="line-through text-1xl p-1">$1,999</span>
        <span className="text-1xl font-bold p-1">$1,499</span>
        <span className="text-1xl p-1">/month</span>
        <span className="text-1xl p-1">
          <CiStar />
        </span>
        <span>4.89(9.Reviews)</span>
      </div>
      <div className="border rounded divide-y divide-gray-200 dark:divide-gray-700">
        <div className="flex flex-1 divide-x divide-gray-200 dark:divide-gray-700">
          <div className="p-3 w-full">
            <label className="block text-sm font-medium text-gray-700">
              Check-in
            </label>
            <p className="mt-1 text-sm text-gray-500">3/1/2024</p>
          </div>
          <div className="p-3 w-full">
            <label className="block text-sm font-medium text-gray-700">
              Check-out
            </label>
            <p className="mt-1 text-sm text-gray-500">7/1/2024</p>
          </div>
        </div>

        <div className="relative text-left border-t-2 flex p-3">
          <button
            id="dropdownDefaultButton"
            onClick={toggleDropdown}
            className="text-sm font-medium text-gray-900 truncate dark:text-white bg-blue-700 hover:bg-blue-300 w-full justify-between focus:outline-none focus:ring-blue-300 rounded-lg text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            type="button"
          >
            Guests
            <svg
              className="w-2.5 h-2.5 ms-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 4 4 4-4"
              />
            </svg>
          </button>
          {isOpen && (
            <div className="z-10 mt-10 absolute bg-white divide-y divide-gray-100 rounded-lg shadow w-full dark:bg-gray-700">
              <ul className="py-2 text-sm text-gray-700 dark:text-gray-200 bg-gray">
                <li>
                  <div className="grid grid-cols-2 p-3">
                    <div className="mt-1 text-sm text-gray-500 flex flex-col">
                      <span className="text-xl">Adults</span>
                      <span>Age 13+</span>
                    </div>
                    <div className="mt-1 text-sm text-gray-500 flex justify-evenly items-center">
                      <CiCirclePlus className="text-lg" />
                      <span>1</span>
                      <CiCircleMinus className="text-lg" />
                    </div>
                  </div>
                </li>
                <li>
                  <div className="grid grid-cols-2 p-3">
                    <div className="mt-1 text-sm text-gray-500 flex flex-col">
                      <span className="text-xl">Children</span>
                      <span>Age 2-12</span>
                    </div>
                    <div className="mt-1 text-sm text-gray-500 flex justify-evenly items-center">
                      <CiCirclePlus className="text-lg" />
                      <span>0</span>
                      <CiCircleMinus className="text-lg" />
                    </div>
                  </div>
                </li>
                <li>
                  <div className="grid grid-cols-2 p-3">
                    <div className="mt-1 text-sm text-gray-500 flex flex-col">
                      <span className="text-xl">Infants</span>
                      <span>Under 2</span>
                    </div>
                    <div className="mt-1 text-sm text-gray-500 flex justify-evenly items-center">
                      <CiCirclePlus className="text-lg" />
                      <span>0</span>
                      <CiCircleMinus className="text-lg" />
                    </div>
                  </div>
                </li>
                <li>
                  <div className="grid grid-cols-2 p-3">
                    <div className="mt-1 text-sm text-gray-500 flex flex-col">
                      <span className="text-xl">Pets</span>
                      <span>Bringing a service animal?</span>
                    </div>
                    <div className="mt-1 text-sm text-gray-500 flex justify-evenly items-center">
                      <CiCirclePlus className="text-lg" />
                      <span>0</span>
                      <CiCircleMinus className="text-lg" />
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
      <div className="flow-root">
        <ul
          role="list"
          className="divide-y divide-gray-200 dark:divide-gray-700"
        >
          <li className="py-3 sm:py-4">
            <div className="flex items-center">
              <div className="flex-1 min-w-0 ms-4">
                <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                  Cleaning fee
                </p>
              </div>
              <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                $320
              </div>
            </div>
          </li>
          <li className="py-3 sm:py-4">
            <div className="flex items-center ">
              <div className="flex-1 min-w-0 ms-4">
                <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                  Service fee
                </p>
              </div>
              <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                $3467
              </div>
            </div>
          </li>
          <li className="py-3 sm:py-4">
            <div className="flex items-center">
              <div className="flex-1 min-w-0 ms-4">
                <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                  Travel Credits
                </p>
              </div>
              <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                $67
              </div>
            </div>
          </li>
          <li className="py-3 sm:py-4">
            <div className="flex items-center ">
              <div className="flex-1 min-w-0 ms-4">
                <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                  Total
                </p>
              </div>
              <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                $367
              </div>
            </div>
          </li>
          <li className="pt-3 pb-0 sm:pt-4">
            <div className="flex items-center ">
              <button className="w-full bg-primary text-gray hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Book
              </button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default BookingCard;
