import React from "react";
import { FaHome, FaStar, FaWifi } from "react-icons/fa";
import { LuParkingCircle } from "react-icons/lu";
import Dropdown from "../components/dropDown";
import { TbBrandCarbon, TbToolsKitchen2 } from "react-icons/tb";
import { MdElevator } from "react-icons/md";
import { GiSmokeBomb } from "react-icons/gi";
import { CiStar } from "react-icons/ci";

const properties = (props) => {
  return (
    <div className="flex flex-col sm:flex-row h-screen">
      <div className="flex-1 p-4">
        <div>
          <h3 className="text-2xl font-bold py-2">ENTER APPATRMENT</h3>
          <div className="flex flex-col sm:flex-row justify-between">
            <div>
              <h1 className="text-4xl font-black">
                Graceful SeaView Duplex 2BR @ Georgetown
              </h1>
              <p className="text-2xl font-bold py-2">Georgetown</p>
            </div>
            <figure className="flex flex-col items-center justify-center">
              <img
                src="https://images.travelandleisureasia.com/wp-content/uploads/sites/2/2022/11/05183143/Avatar-1600x900.jpg"
                alt="Trulli"
                className="rounded-full w-20 h-20"
              />
              <figcaption>Italy.</figcaption>
            </figure>
          </div>
          <div>
            <div className="flex items-center gap-3 py-1">
              <FaHome />
              <span className="text-2xl font-bold">Entire apartment</span>
            </div>
            <div className="flex justify-evenly w-96 px-3">
              <span>6 guest</span>
              <span>2 bedroom</span>
              <span>6 beds</span>
              <span>2 baths</span>
            </div>
          </div>
        </div>
        <hr className="my-8 border border-slate-300 rounded dark:bg-gray-700" />
        <div>
          <p>
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
        </div>
        <div className="py-5">
          <Dropdown title="Read more about the space" />
        </div>
        <div>
          <h3 className="text-2xl font-bold">Contact Host</h3>
        </div>
        <hr className="my-8 border border-slate-300 rounded dark:bg-gray-700" />
        <div>
          <h2 className="text-2xl font-bold">Amenities</h2>
          <div>
            <div class="grid grid-cols-2">
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
      <div className="bg-gray-800 text-white w-full sm:w-96 flex items-center justify-center">
        <div class="flex justify-center items-center rounded h-96 p-5">
          <div class="bg-white rounded-md shadow-lg p-6 w-full h-full">
            <div className="flex items-center">
              <span className="line-through text-1xl p-1">$1,999</span>
              <span className="text-2xl font-bold p-1">$1,499</span>
              <span className="text-1xl p-1">/month</span>
              <span className="text-1xl p-1">
                <CiStar />
              </span>
              <span>4.89(9 Reviews)</span>
            </div>
            <div>
              <div className="grid grid-cols-2 border rounded">
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
              <div className="border p-2">
                <Dropdown title="Guests" />
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default properties;
