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
import BookingCard from "../../../components/BookingCard";
import { IoFastFoodSharp } from "react-icons/io5";
import { IoMdFitness } from "react-icons/io";
import { MdCarRental } from "react-icons/md";
import { MdOutlineSmokeFree } from "react-icons/md";
import { MdDryCleaning } from "react-icons/md";
import Services from "../../../components/Services";
import Imageslider from "../../../components/Imageslider";
import TestimonialsCarousel from "../../../components/TestimonialsCarousel";
const Properties = (props) => {
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
        <div className="col-span-8 md:col-span-6 lg:col-span-4">
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
            <Imageslider />
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
          <hr className="my-8 border border-lite_gray rounded dark:bg-gray-700 mr-6" />

          <div>
            <h3 className="text-2xl font-bold text-dodgerBlue">Contact Host</h3>
            <h3 className="text-lg font-bold text-dodgerBlue">+44-326754...</h3>
            <div></div>
          </div>
          <TestimonialsCarousel />
        </div>

        <div className="bg-gray-800 text-white col-span-8 md:col-span-4 flex justify-center flex-shrink-0 z-20">
          <div className="flex justify-center rounded md:p-5">
            <div className="w-full md:w-auto items-center flex flex-col">
              <BookingCard />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Properties;
