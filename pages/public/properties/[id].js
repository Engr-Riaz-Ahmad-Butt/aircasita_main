import React, { useState } from "react";
import { FaHome, FaStar, FaWifi } from "react-icons/fa";
import { LuParkingCircle } from "react-icons/lu";
import Dropdown from "../../../components/dropDown";
import { TbBrandCarbon, TbToolsKitchen2 } from "react-icons/tb";
import { MdElevator } from "react-icons/md";
import { GiSmokeBomb } from "react-icons/gi";
import { CiCircleMinus, CiCirclePlus, CiStar } from "react-icons/ci";
import BookingCard from "../../../components/BookingCard";

const Properties = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="flex flex-col sm:flex-row md:container md:mx-auto md:h-screen md:p-5 font-customFont">
        <div className="flex-1 p-4 col-span-3 w-full md:w-4/6">
          <h3 className="text-2xl font-bold py-2">ENTER APPATRMENT</h3>
          <div className="flex flex-col sm:flex-row justify-between">
            <div>
              <h1 className="text-4xl font-black">
                Graceful SeaView Duplex 2BR @ Georgetown
              </h1>
              <p className="text-2xl font-bold py-2 text-slate">Georgetown</p>
            </div>
            {/* <figure className="flex flex-col items-center justify-center">
              <img
                src="https://images.travelandleisureasia.com/wp-content/uploads/sites/2/2022/11/05183143/Avatar-1600x900.jpg"
                alt="Trulli"
                className="rounded-full w-20 h-20"
              />
              <figcaption>Italy.</figcaption>
            </figure> */}
          </div>
          <div>
            <div className="flex items-center gap-3 py-1">
              <FaHome />
              <span className="text-2xl font-bold">Entire apartment</span>
            </div>
            <div className="flex justify-evenly w-96 px-3 text-slate">
              <span>6 guest</span>
              <span>2 bedroom</span>
              <span>6 beds</span>
              <span>2 baths</span>
            </div>
          </div>
          <hr className="my-8 border border-lite_gray rounded dark:bg-gray-700 mr-6" />
          <p className="text-slate mr-5">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
            <br></br>
            <br></br>
            It was popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem
            Ipsum.
          </p>
          <div className="py-5">
            <Dropdown title="Read more about the space" />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-dodgerBlue">Contact Host</h3>
          </div>
          <hr className="my-8 border border-lite_gray rounded dark:bg-gray-700 mr-6" />
          <div>
            <h2 className="text-2xl font-bold">Amenities</h2>
            <div>
              <div class="grid grid-cols-2 text-slate">
                <div class="bg-gray-200 p-4 flex items-center gap-2">
                  <TbToolsKitchen2 />
                  <span>Kitchen</span>
                </div>
                <div class="bg-gray-200 p-4 flex items-center gap-2">
                  <MdElevator />
                  <span>Elevator</span>
                </div>
                <div class="bg-gray-200 p-4 flex items-center gap-2">
                  <FaWifi />
                  <span>Wifi</span>
                </div>
                <div class="bg-gray-200 p-4 flex items-center gap-2">
                  <LuParkingCircle />
                  <span>Free parking on premises</span>
                </div>
                <div class="bg-gray-200 p-4 flex items-center gap-2">
                  <GiSmokeBomb />
                  <span>Smoke Detector</span>
                </div>
                <div class="bg-gray-200 p-4 flex items-center gap-2">
                  <TbBrandCarbon />
                  <span>Carbon monoxide Detector</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-800 text-white w-full sm:w-96 flex items-center justify-center flex-shrink-0 z-20">
          <div class="flex justify-center items-center rounded p-5">
            {/* <div class="rounded-md shadow-xl md:p-3 md:fixed w-full md:w-fit items-center flex flex-col justify-center h-auto">
              <div className="flex items-center">
                <span className="line-through text-1xl p-1">$1,999</span>
                <span className="text-1xl font-bold p-1">$1,499</span>
                <span className="text-1xl p-1">/month</span>
                <span className="text-1xl p-1">
                  <CiStar />
                </span>
                <span>4.89(9.Reviews)</span>
              </div>
              <div className="border border-indigo-600 border-slate rounded">
                <div className="grid grid-cols-2">
                  <div className="border-r-2 p-3">
                    <label className="block text-sm font-medium text-gray-700">
                      Check-in
                    </label>
                    <p className="mt-1 text-sm text-gray-500">3/1/2024</p>
                  </div>

                  <div className="p-3">
                    <label className="block text-sm font-medium text-gray-700">
                      Check-out
                    </label>
                    <p className="mt-1 text-sm text-gray-500">3/1/2024</p>
                  </div>
                </div>
                <div className=" border-t-2 border-b-2 p-2">
                  <div className="relative text-left flex">
                    <button
                      id="dropdownDefaultButton"
                      onClick={toggleDropdown}
                      className="text-white bg-blue-700 hover:bg-blue-300 w-full justify-between focus:outline-none focus:ring-blue-300 rounded-lg text-2xl text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
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

                <div className="grid grid-cols-2 p-3 border-b-2">
                  <p className="mt-1 text-sm text-gray-500">$1234 x 2 nights</p>
                  <p className="mt-1 text-sm text-gray-500 text-right">$2468</p>
                </div>
                <div className="grid grid-cols-2 p-3 border-b-2">
                  <p className="mt-1 text-sm text-gray-500">
                    Cleaning fee
                  </p>
                  <p className="mt-1 text-sm text-gray-500 text-right">$800</p>
                </div>
                <div className="grid grid-cols-2 p-3 border-b-2">
                  <p className="mt-1 text-sm text-gray-500">Service fee</p>
                  <p className="mt-1 text-sm text-gray-500 text-right">$2345</p>
                </div>
                <div className="grid grid-cols-2 p-3 border-b-2">
                  <p className="mt-1 text-sm text-gray-500">Travel credit</p>
                  <p className="mt-1 text-sm text-gray-500 text-right">$234</p>
                </div>
                <div className="grid grid-cols-2 p-3 border-b-2">
                  <p className="mt-1 text-sm text-gray-500">Total</p>
                  <p className="mt-1 text-sm text-gray-500 text-right">$7653</p>
                </div>
                <div className="grid p-3">
                  <button className="w-full bg-primary text-gray hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Book
                  </button>
                </div>
              </div>
            </div> */}
            <div className=" md:fixed w-full md:w-fit items-center flex flex-col justify-center h-auto">
              <BookingCard />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Properties;
