import React, { useState } from "react";
import { FaHome, FaStar, FaWifi } from "react-icons/fa";
import { LuParkingCircle } from "react-icons/lu";
// import Dropdown from "../../../components/dropDown";
import { TbBrandCarbon, TbToolsKitchen2 } from "react-icons/tb";
import {
  MdElevator,
  MdKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import { MdLocalAirport } from "react-icons/md";
import { MdSecurity } from "react-icons/md";
import { GiSmokeBomb } from "react-icons/gi";
// import { CiCircleMinus, CiCirclePlus, CiStar } from "react-icons/ci";
import DatePicker from "react-datepicker";
import { IoFastFoodSharp } from "react-icons/io5";
import { IoMdFitness } from "react-icons/io";
import { MdCarRental } from "react-icons/md";
import { MdOutlineSmokeFree } from "react-icons/md";
import { MdDryCleaning } from "react-icons/md";
import Services from "../../../components/Services";
import Imageslider from "../../../components/Imageslider";
// import { FaHome } from "react-icons/fa";
const Properties = (props) => {
  const [bookingSuccess, setBookingSuccess] = useState(false);
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const isDisabled = (date) => date.getDate() % 2 !== 0;

  return (
    <>
      <div className="grid grid-cols-8 md:grid-cols-6 lg:grid-cols-8 md:container md:mx-auto p-5 md:p-5 font-customFont">
        <div className="col-span-8 md:col-span-6 lg:col-span-4">
          <h3 className="text-2xl font-bold py-2">ENTER APPATRMENT</h3>
          <div className="flex flex-col sm:flex-row justify-between">
            <div>
              <h1 className="text-xl font-black">
                Graceful SeaView Duplex 2BR @ Georgetown
              </h1>
              <p className="text-lg font-bold py-2 text-slate">Georgetown</p>
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
            <Imageslider />
          </div>
          <h1 className="text-2xl py-3">General Description</h1>
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
          <hr className="my-8 border border-lite_gray rounded dark:bg-gray-700 mr-6" />

          <div>
            <h3 className="text-xl font-bold text-dodgerBlue">Contact Host</h3>
            <h3>+44238404...</h3>
          </div>
          <div>
            <div>
              <div class="grid grid-cols-1 text-slate">
                <Services />
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-800 text-white col-span-8 md:col-span-4 flex justify-center flex-shrink-0 z-20  ">
          <div className="flex justify-center rounded md:p-5">
            <div className="w-full md:w-auto items-center flex flex-col">
              <div className="max-w-md bg-white border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
                <div className="border rounded divide-y divide-gray-200 dark:divide-gray-700">
                  <div className="flex flex-1 divide-x divide-gray-200 dark:divide-gray-700">
                    <div className="md:p-3 w-full">
                      <label className="block text-sm font-medium text-gray-700">
                        Check-in
                      </label>
                      <div className="flex justify-center">
                        <DatePicker
                          placeholderText="Check-in date"
                          className="hover:bg-transparent text-xs md:text-base focus:border-white focus:outline-none bg-transparent font-customFont"
                          selectsStart
                          selected={startDate}
                          onChange={(date) => setStartDate(date)}
                          startDate={startDate}
                          minDate={new Date()}
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
                          className="hover:bg-transparent text-xs md:text-base focus:border-white focus:outline-none bg-transparent font-customFont"
                          selectsEnd
                          selected={endDate}
                          onChange={(date) => setEndDate(date)}
                          endDate={endDate}
                          startDate={startDate}
                          // maxDate={new Date()}
                          isDisabled={isDisabled}
                        />
                      </div>
                    </div>
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
                            Number of Guest
                          </p>
                        </div>
                        <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                          2
                        </div>
                      </div>
                    </li>
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
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Properties;
