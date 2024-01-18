import React from "react";
import logo from "../assets/imgs/airCasita_logo-bg-remove.png";

const Main = () => {
  return (
    <div className="container mx-auto font-Montserrat flex flex-col items-center justify-center p-8 bg-gray-800 text-white">
      <div className="text-center p-6 rounded-md flex justify-center flex-col">
        <h1 className="text-4xl font-bold mb-4 font-Montserrat">
          What we Believe:
        </h1>
        <p className="text-2xl font-bold mb-4 font-Montserrat">
          Hosts should get more rentals & Guests should get better deals!
        </p>
        <img
          src={logo.src}
          alt="Hero Image"
          className="mx-auto w-full md:w-2/3 lg:w-1/2 object-cover"
        />
        <div className="flex flex-col justify-center md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
          <a href="https://aircasita-host.web.app/admin/create-listing ">
            <button className="bg-primary text-gray hover:bg-blue-700 text-white py-2 px-4 rounded font-Montserrat font-semibold">
              Register Rental Property
            </button>
          </a>
          <a href="/home">
            <button className="bg-primary text-gray hover:bg-blue-700 text-white py-2 px-4 rounded font-Montserrat font-semibold">
              Traveler Books A Rental
            </button>
          </a>
        </div>
        <div className="py-5">
          <p className="text-2xl font-bold font-Montserrat">
            The airCasita.com Deal: <br></br> You pay for 2 nights, <br></br>{" "}
            then YOU Stay the 3rd night for free <br></br> (Bookings for small
            rentals to very large, <br></br> USA now & soon all around the
            world)
          </p>
          <span className="font-Montserrat font-bold">
            (Not affiliated with airbnb)
          </span>
        </div>
      </div>
    </div>
  );
};

export default Main;
