import React, { useState } from "react";
import { FaHome, FaStar, FaWifi } from "react-icons/fa";
import { LuParkingCircle } from "react-icons/lu";
import Dropdown from "../../../components/dropDown";
import { TbBrandCarbon, TbToolsKitchen2 } from "react-icons/tb";
import {
  MdElevator,
  MdKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import { GiSmokeBomb } from "react-icons/gi";
import { CiCircleMinus, CiCirclePlus, CiStar } from "react-icons/ci";
import DatePicker from "react-datepicker";

const Properties = (props) => {
  const [bookingSuccess, setBookingSuccess] = useState(false);
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const [currentIndex, setCurrentIndex] = useState(1);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const images = [
    "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aG91c2V8ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGhvdXNlfGVufDB8fDB8fHww",
    "https://plus.unsplash.com/premium_photo-1661915661139-5b6a4e4a6fcc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGhvdXNlfGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aG91c2V8ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGhvdXNlfGVufDB8fDB8fHww",
    "https://plus.unsplash.com/premium_photo-1661915661139-5b6a4e4a6fcc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGhvdXNlfGVufDB8fDB8fHww",
  ];

  return (
    <>
      <div className="grid grid-cols-8 md:grid-cols-6 lg:grid-cols-8 md:container md:mx-auto p-5 md:p-5 font-customFont">
        <div className="col-span-8 md:col-span-4">
          <h3 className="text-2xl font-bold py-2">ENTER APPATRMENT</h3>
          <div className="flex flex-col sm:flex-row justify-between">
            <div>
              <h1 className="text-4xl font-black">
                Graceful SeaView Duplex 2BR @ Georgetown
              </h1>
              <p className="text-2xl font-bold py-2 text-slate">Georgetown</p>
            </div>
          </div>
          <div>
            <div className="flex items-center gap-3 py-1">
              <FaHome />
              <span className="text-2xl font-bold">Entire apartment</span>
            </div>
            <div className="flex justify-evenly flex-col sm:flex-row md:w-96 px-3 text-slate">
              <span className="sm:block mb-2">6 guests</span>
              <span className="sm:block mb-2">2 bedrooms</span>
              <span className="sm:block mb-2">6 beds</span>
              <span className="sm:block mb-2">2 baths</span>
            </div>
          </div>
          <hr className="my-8 border border-lite_gray rounded dark:bg-gray-700 mr-6" />

          <div>
            <div className="relative overflow-hidden product-card-border rounded-md">
              <div
                className="flex transition-transform ease-out duration-300"
                style={{
                  transform: `translateX(-${currentIndex * (100 / 3)}%)`,
                }}
              >
                {images.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`Slide ${index + 1}`}
                    className="w-52 h-48 object-cover p-3 rounded"
                  />
                ))}
              </div>

              <button
                onClick={prevSlide}
                className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 text-white rounded-full shadow bg-primary/70 text-gray-800 hover:bg-white"
              >
                <MdKeyboardArrowLeft className="text-3xl" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 text-white rounded-full shadow bg-primary/70 text-gray-800 hover:bg-white"
              >
                <MdOutlineKeyboardArrowRight className="text-3xl" />
              </button>
            </div>
          </div>

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
        <div className="bg-gray-800 text-white col-span-8 md:col-span-4 flex justify-center flex-shrink-0 z-20">
          <div className="flex justify-center rounded md:p-5">
            <div className="w-full md:w-auto items-center flex flex-col">
              <div className="max-w-md bg-white border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
                {bookingSuccess ? (
                  <div className="p-4">
                    <div className="flex items-center border-b-2 pb-1">
                      <div className="flex-1 min-w-0 ms-4 w-40">
                        <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                          Total
                        </p>
                      </div>
                      <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                        $367
                      </div>
                    </div>
                    <div className="payPal mt-10">
                      <Link href="/dashboard" className="responsivePayPal">
                        <img src={PaypalLogo.src} alt="Check out with PayPal" />
                      </Link>
                    </div>
                  </div>
                ) : (
                  <>
                    <div className="flex items-center justify-between mb-4">
                      <span className="line-through text-1xl p-1">$1,999</span>
                      <span className="text-1xl font-bold p-1">$1,499</span>
                      {/* <span className="text-1xl p-1">/night</span> */}
                      {/* <span className="text-1xl p-1">
                        <CiStar />
                      </span> */}
                      {/* <span>4.89(9.Reviews)</span> */}
                    </div>
                    <div className="border rounded divide-y divide-gray-200 dark:divide-gray-700">
                      <div className="flex flex-1 divide-x divide-gray-200 dark:divide-gray-700">
                        <div className="md:p-3 w-full">
                          <label className="block text-sm font-medium text-gray-700">
                            Check-in
                          </label>
                          <div className="flex justify-center">
                            <DatePicker
                              placeholderText="Check-in date"
                              className="hover:bg-transparent focus:border-white focus:outline-none bg-transparent font-customFont"
                              selectsStart
                              selected={startDate}
                              onChange={(date) => setStartDate(date)}
                              startDate={startDate}
                            />
                          </div>
                        </div>
                        <div className="md:p-3 w-full">
                          <label className="block text-sm font-medium text-gray-700">
                            Check-out
                          </label>
                          <div className="">
                            <DatePicker
                              placeholderText="Check-out date"
                              className="hover:bg-transparent focus:border-white focus:outline-none bg-transparent font-customFont"
                              selectsEnd
                              selected={endDate}
                              onChange={(date) => setEndDate(date)}
                              endDate={endDate}
                              startDate={startDate}
                              minDate={startDate}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="relative text-left border-t-2 flex p-3">
                        <button
                          id="dropdownDefaultButton"
                          onClick={toggleDropdown}
                          className="text-sm font-medium text-gray-900 truncate dark:text-white bg-blue-700 hover:bg-blue-300 w-full justify-between focus:outline-none focus:ring-blue-300 rounded-lg text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                          type="button"
                        >
                          Numbers of Guests
                          {/* <svg
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
                          </svg> */}
                        </button>
                        {/* {isOpen && (
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
                        )} */}
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
                          {/* <div className="flex items-center ">
                  <button
                    onClick={handleBookClick}
                    className="w-full bg-primary text-gray hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  >
                    Book
                  </button>
                </div> */}
                        </li>
                      </ul>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Properties;
