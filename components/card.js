import React, { useState, useEffect } from "react";
import { MdKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from "react-icons/md";
import { FaRegCircle } from "react-icons/fa";

export const Card = ({ title, description, slider, viewed,date, price }) => {
  const [curr, setCurr] = useState(0);
  const [activeDot, setActiveDot] = useState(0);

  const prev = () => {
    const prevIndex = curr === 0 ? slider.length - 1 : curr - 1;
    setCurr(prevIndex);
    setActiveDot(prevIndex);
  };

  const next = () => {
    const nextIndex = curr === slider.length - 1 ? 0 : curr + 1;
    setCurr(nextIndex);
    setActiveDot(nextIndex);
  };

//   useEffect(() => {
//     const autoSlideInterval = 5000;
//     const slideInterval = setInterval(next, autoSlideInterval);
//     return () => clearInterval(slideInterval);
//   }, [curr]);

  const handleDotClick = (index) => {
    setCurr(index);
    setActiveDot(index);
  };

  return (
    <div className="mt-6 max-w-md mx-auto cursor-pointer overflow-hidden sm:max-w-lg product-card-border rounded-xl dark:bg-gray-800 dark:border-gray-700">
      <div className="relative h-56 overflow-hidden">
        <div
          className="flex transition-transform ease-out duration-500"
          style={{ transform: `translateX(-${curr * 100}%)` }}
        >
          {slider.map((item, index) => (
            <img
              key={index}
              src={item}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
          ))}
        </div>
        <div className="absolute inset-0 flex items-center justify-between p-4">
          <button
            onClick={prev}
            className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
          >
            <MdKeyboardArrowLeft className="text-2xl" />
          </button>
          <button
            onClick={next}
            className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
          >
            <MdOutlineKeyboardArrowRight className="text-2xl" />
          </button>
        </div>

        {/* <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
          {slider.map((_, index) => (
            <button
              key={index}
              type="button"
              aria-current={curr === index}
              aria-label={`Slide ${index + 1}`}
              data-carousel-slide-to={index}
              onClick={() => handleDotClick(index)}
            >
              <FaRegCircle
                className={`w-3 h-3 rounded-full ${
                  activeDot === index ? "bg-primary" : "bg-opacity-50"
                }`}
              />
            </button>
          ))}
        </div> */}
      </div>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 font-customFont">{title}</div>
        <p className="text-gray-700 text-base font-customFont">{viewed}</p>
        <p className="text-gray-700 text-base font-customFont">{date}</p>
        <p className="font-bold">{price}</p>
      </div>
      {/* <div className="px-6 pb-4">
        <button className="bg-primary text-light hover:bg-blue-700 text-white py-2 px-4 rounded">
          Button
        </button>
      </div> */}
    </div>
  );
};
