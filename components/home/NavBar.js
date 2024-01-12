import React, { useState } from "react";
import { MdOutlineLocationOn } from "react-icons/md";
import DestinationModal from "./DestinationModal";
const NavBar = () => {
  return (
    <>
      <div className="   mt-3  w-9/12 m-auto rounded-md">
        <div className="flex pt-1 pb-1 ml-1 mr-1 h-16 rounded">
          <div className="flex    bg-lite_gray rounded-md w-2/4 pt-3 pl-4 pb-3 ">
            <MdOutlineLocationOn className="text-3xl text-darkGray" />
            <input
              type="text"
              placeholder="search your destination"
              className=" hover:bg-transparent focus:border-white focus:outline-none bg-transparent w-full  text-3xl border-b-2 "
            />
          </div>
          <div className="flex  bg-lite_gray rounded-md pt-2 pl-2 pb-2 ml-2 ">
            <input
              type="text"
              placeholder="Move-In date"
              className=" hover:bg-transparent focus:border-white focus:outline-none bg-transparent    border-b-2 "
            />
          </div>
          <div className="flex  bg-lite_gray rounded-md pt-2  pl-2 pb-2 ml-3 ">
            <input
              type="text"
              placeholder="Move-out date"
              className=" hover:bg-transparent focus:border-white focus:outline-none bg-transparent border-b-2 "
            />
          </div>

          <div className="rounded-md ml-3">
            <button class="bg-primary   text-gray  rounded   text-lg  w-52 h-14">
              Search
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
