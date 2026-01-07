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
      <div className=" bg-primary">
        <div className="container max-w-screen-lg m-auto flex min-h-[240px] py-6 md:py-12 px-4 md:px-5 lg:px-3">
          <div className="grid xl:grid-cols-5 md:grid-cols-4 grid-cols-1 gap-3 w-full m-auto rounded align-middle">
            <div className="flex bg-lite_gray rounded-md w-full xl:col-span-2 md:col-span-4 col-span-1">
              <MdOutlineLocationOn className="text-2xl md:text-3xl text-darkGray self-center ml-2 flex-shrink-0" />
              <input
                type="text"
                placeholder="Search your destination"
                className="hover:bg-transparent focus:border-white focus:outline-none bg-transparent text-base md:text-lg p-2 overflow-hidden font-Montserrat w-full"
              />
            </div>

          <div className="flex bg-lite_gray rounded-md w-full xl:col-span-1 md:col-span-2 col-span-1">
            <DatePicker
              placeholderText="Move-in date"
              className="hover:bg-transparent focus:border-white w-full focus:outline-none bg-transparent p-2 px-3 md:px-4 xl:py-4 font-Montserrat text-sm md:text-base lg:text-lg"
              selectsStart
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              startDate={startDate}
            />
          </div>

          <div className="flex bg-lite_gray rounded-md w-full xl:col-span-1 md:col-span-2 col-span-1">
            <DatePicker
              placeholderText="Move-out date"
              className="hover:bg-transparent focus:border-white w-full focus:outline-none bg-transparent p-2 px-3 md:px-4 xl:py-4 font-Montserrat text-sm md:text-base lg:text-lg"
              selectsEnd
              selected={endDate}
              onChange={(date) => setEndDate(date)}
              endDate={endDate}
              startDate={startDate}
              minDate={startDate}
            />
          </div>

            <div className="rounded xl:col-span-1 md:col-span-4 col-span-1">
              <button className="bg-secondary text-text_dark rounded text-base md:text-lg h-12 md:h-10 w-full xl:h-full font-Montserrat font-bold">
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
