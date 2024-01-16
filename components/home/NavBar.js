import React, { useState } from "react";
import { MdOutlineLocationOn } from "react-icons/md";
import DatePicker from "react-datepicker";
const NavBar = () => {
  const [date, setDate] = useState(new Date());
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();

  const handleChange = (range) => {
    const [startDate, endDate] = range;
    setStartDate(startDate);
    setEndDate(endDate);
  };

  return (
    <>
      <div className=" flex flex-col justify-center bg-primary p-4 md:justify-center items-center">
        <div className="flex flex-col sm:flex-row pt-1 pb-1   md:my-24 sm:my-3 sm:mx-6 sm:h-16 rounded w-full sm:w-9/12 align-middle">
          <div className="flex bg-lite_gray rounded-md sm:w-2/4 sm:mr-2 mb-2 sm:mb-0">
            <MdOutlineLocationOn className="text-3xl text-darkGray self-center ml-2" />
            <input
              type="text"
              placeholder="Search your destination"
              className="hover:bg-transparent focus:border-white focus:outline-none bg-transparent text-xl  pt-2 pb-2 pr-2 overflow-hidden font-Montserrat"
            />
          </div>

          <div className="flex bg-lite_gray rounded-md sm:mr-2 mb-2 sm:mb-0">
            <DatePicker
              placeholderText="Move-in date"
              className="hover:bg-transparent focus:border-white focus:outline-none bg-transparent p-4 font-Montserrat"
              selectsStart
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              startDate={startDate}
            />
          </div>

          <div className="flex bg-lite_gray rounded-md mb-2 sm:mb-0">
            <DatePicker
              placeholderText="Move-out date"
              className="hover:bg-transparent focus:border-white focus:outline-none bg-transparent p-4 font-Montserrat"
              selectsEnd
              selected={endDate}
              onChange={(date) => setEndDate(date)}
              endDate={endDate}
              startDate={startDate}
              minDate={startDate}
            />
          </div>

          <div className="rounded-md md:ml-3 mt-2 sm:mt-0">
            <button class="bg-secondary text-text_dark rounded text-lg w-full sm:w-52 h-14 font-Montserrat font-bold">
              Search
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
