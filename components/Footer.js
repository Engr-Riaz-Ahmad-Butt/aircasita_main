import React from "react";
import { RiInstagramFill } from "react-icons/ri";
import { FaYoutube } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import logo from "../assets/imgs/airCasita_logo-bg-remove.png";
import Link from "next/link";
const Footer = () => {
  return (
    <>
      <div className="mt-10 md:mt-32 bg-primary bottom-0">
        <div className="max-w-screen-lg container m-auto w-full text-gray font-Montserrat mt-4">
          <div className="text-gray-800 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mx-auto pt-6 px-4">
            <div className="flex justify-center md:justify-start items-center cursor-pointer">
              <Link href="#">
                <img src={logo.src} className="w-32 sm:w-36 md:w-40" alt="AirCasita Logo" />
              </Link>
            </div>
            <div className="flex justify-center items-center flex-col">
              <div className="text-sm uppercase text-indigo-600 font-bold font-Montserrat mb-2">
                Resources
              </div>

              <Link
                className="my-2 block font-Montserrat hover:text-secondary transition-colors"
                href="/public/safety"
              >
                Safety
              </Link>
            </div>
            <div className="flex justify-center items-center flex-col">
              <div className="text-sm uppercase text-indigo-600 font-bold font-Montserrat mb-2">
                Support
              </div>

              <Link
                className="my-2 block font-Montserrat hover:text-secondary transition-colors"
                href="/public/house-rules"
              >
                House Rules
              </Link>
            </div>
            <div className="flex justify-center items-center flex-col">
              <div className="text-sm uppercase text-indigo-600 font-bold font-Montserrat mb-2">
                Contact us
              </div>

              <Link className="my-2 block font-Montserrat hover:text-secondary transition-colors" href="/#">
                contact@company.com
              </Link>
            </div>
          </div>
          <div className="bg-primary pb-3">
            <div
              className="flex pb-5 px-3 m-auto pt-5 text-sm flex-col max-w-screen-lg items-center"
            >
              <div className="flex flex-row gap-4">
                <Link href="/#" className="hover:opacity-80 transition-opacity">
                  <RiInstagramFill className="text-text_light text-2xl sm:text-3xl" />
                </Link>
                <Link href="/#" className="hover:opacity-80 transition-opacity">
                  <FaYoutube className="text-text_light text-2xl sm:text-3xl" />
                </Link>
                <Link href="/#" className="hover:opacity-80 transition-opacity">
                  <FaFacebook className="text-text_light text-2xl sm:text-3xl" />
                </Link>
                <Link href="/#" className="hover:opacity-80 transition-opacity">
                  <FaTwitter className="text-text_light text-2xl sm:text-3xl" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
