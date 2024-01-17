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
      <div className="  bg-primary px-3 lg:px-20 md:px-20 sm:px-20 h-60 py-12">
        <div className="grid xl:grid-cols-5 grid-cols-2 gap-3 sm:m-auto  sm:h-16 rounded  align-middle col-span-full md:col-span-2  lg:col-span-3 xl:col-span-4  m-auto">
          {/* --------------------------------------- */}
          <div className="flex  bg-lite_gray rounded-md sm:w-full xl:col-span-2 col-span-2 lg:w-full xl:w-full">
            <MdOutlineLocationOn className="text-3xl text-darkGray self-center ml-2" />
            <input
              type="text"
              placeholder="Search your destination"
              className="hover:bg-transparent focus:border-white focus:outline-none bg-transparent text-lg p-2 overflow-hidden font-Montserrat w-full"
            />
          </div>

          <div className="flex  bg-lite_gray rounded-md sm:w-full xl:col-span-1 col-span-1 xl:w-full">
            <DatePicker
              placeholderText="Move-in date"
              className="hover:bg-transparent focus:border-white focus:outline-none bg-transparent p-2 xl:py-4 font-Montserrat text-lg overflow-hidden"
              selectsStart
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              startDate={startDate}
            />
          </div>

          <div className="flex  bg-lite_gray rounded-md sm:w-full xl:col-span-1 col-span-1 xl:w-full ">
            <DatePicker
              placeholderText="Move-out date"
              className="hover:bg-transparent focus:border-white focus:outline-none bg-transparent p-2 xl:py-4 font-Montserrat text-lg sm:overflow-hidden"
              selectsEnd
              selected={endDate}
              onChange={(date) => setEndDate(date)}
              endDate={endDate}
              startDate={startDate}
              minDate={startDate}
            />
          </div>

          <div className="rounded xl:col-span-1 col-span-2">
            <button className="bg-secondary text-text_dark rounded text-lg h-10 w-full xl:h-full font-Montserrat font-bold">
              Search
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
