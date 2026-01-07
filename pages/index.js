import React from "react";
import logo from "../assets/imgs/airCasita_logo-bg-remove.png";
import Link from "next/link";

const Main = () => {
  return (
    <div className="container mx-auto font-Montserrat flex flex-col items-center justify-center p-4 sm:p-6 md:p-8 bg-gray-800 text-white">
      <div className="text-center p-4 sm:p-6 rounded-md flex justify-center flex-col w-full">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 font-Montserrat">
          What we Believe:
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl font-bold mb-4 font-Montserrat px-2">
          Hosts should get more rentals & Guests should get better deals!
        </p>
        <img
          src={logo.src}
          alt="Hero Image"
          className="mx-auto w-full sm:w-4/5 md:w-2/3 lg:w-1/2 object-cover"
        />
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4 mt-6">
          <Link href="https://aircasita-host.web.app/admin/create-listing ">
            <button className="bg-primary text-gray hover:bg-light_primary text-white py-2 px-4 sm:py-3 sm:px-6 rounded font-Montserrat font-semibold w-full sm:w-auto transition-colors">
              Register Rental Property
            </button>
          </Link>
          <Link href="/home">
            <button className="bg-primary text-gray hover:bg-light_primary text-white py-2 px-4 sm:py-3 sm:px-6 rounded font-Montserrat font-semibold w-full sm:w-auto transition-colors">
              Traveler Books A Rental
            </button>
          </Link>
        </div>
        <div className="py-5">
          <p className="text-lg sm:text-xl md:text-2xl font-bold font-Montserrat leading-relaxed">
            The airCasita.com Deal: <br></br> You pay for 2 nights, <br></br>{" "}
            then YOU Stay the 3rd night for free <br></br> (Bookings for small
            rentals to very large, <br></br> USA now & soon all around the
            world)
          </p>
          <span className="font-Montserrat font-bold text-sm sm:text-base mt-2 inline-block">
            (Not affiliated with airbnb)
          </span>
        </div>
      </div>
    </div>
  );
};

export default Main;
