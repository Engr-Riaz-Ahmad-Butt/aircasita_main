import React from "react";
import { FaWifi } from "react-icons/fa";
import { GiSmokeBomb } from "react-icons/gi";
import { IoMdFitness } from "react-icons/io";
import { IoFastFoodSharp } from "react-icons/io5";
import { LuParkingCircle } from "react-icons/lu";
import {
  MdCarRental,
  MdDryCleaning,
  MdElevator,
  MdOutlineSmokeFree,
} from "react-icons/md";
import { TbBrandCarbon, TbToolsKitchen2 } from "react-icons/tb";

const Contacthost = () => {
  return (
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
            <span>Internet service 24/7</span>
          </div>
          <div class="bg-gray-200 p-4 flex items-center gap-2">
            <LuParkingCircle />
            <span>Free parking on premises</span>
          </div>
          <div class="bg-gray-200 p-4 flex items-center gap-2">
            <MdOutlineSmokeFree />
            <span>Smoking lounge</span>
          </div>

          <div class="bg-gray-200 p-4 flex items-center gap-2">
            <IoFastFoodSharp />
            <span>Food</span>
          </div>
          <div class="bg-gray-200 p-4 flex items-center gap-2">
            <IoMdFitness />
            <span>Fitness</span>
          </div>
          <div class="bg-gray-200 p-4 flex items-center gap-2">
            <MdCarRental />
            <span>Car rental (if any)</span>
          </div>
          <div class="bg-gray-200 p-4 flex items-center gap-2">
            <MdDryCleaning />
            <span>Laundry</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacthost;
