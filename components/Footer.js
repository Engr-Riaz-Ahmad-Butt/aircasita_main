import React from "react";
import { RiInstagramFill } from "react-icons/ri";
import { FaYoutube } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import logo from "../assets/imgs/airCasita_logo-bg-remove.png";
const Footer = () => {
  return (
    <>
      <div className="mt-72 max-w-full">
        <div className="bg-primary  left-0 bottom-0 w-full text-gray font-Montserrat mt-4">
          <div className="max-w-screen-lg px-4 sm:px-6 text-gray-800 sm:grid md:grid-cols-4 sm:grid-cols-2 mx-auto pt-6">
            <div className=" cursor-pointer sm:32 flex justify-center">
              <a href="#">
                <img src={logo.src} className="w-40" />
              </a>
            </div>
            <div>
              <div className="text-sm uppercase text-indigo-600 font-bold font-Montserrat">
                Resources
              </div>
              <a className="my-1 block font-Montserrat" href="/#">
                Documentation{" "}
                <span className="text-teal-600 text-xs p-1"></span>
              </a>
              <a className="my-1 block font-Montserrat" href="/#">
                Tutorials <span className="text-teal-600 text-xs p-1"></span>
              </a>
              <a className="my-1 block font-Montserrat" href="/#">
                Support <span className="text-teal-600 text-xs p-1">New</span>
              </a>
            </div>
            <div>
              <div className="text-sm uppercase text-indigo-600 font-bold font-Montserrat">
                Support
              </div>
              <a className="my-3 block font-Montserrat" href="/#">
                Help Center{" "}
              </a>
              <a className="my-3 block font-Montserrat" href="/#">
                Privacy Policy{" "}
              </a>
              <a className="my-3 block font-Montserrat" href="/#">
                Conditions
              </a>
            </div>
            <div className="">
              <div className="text-sm uppercase text-indigo-600 font-bold font-Montserrat">
                Contact us
              </div>
              <a className="my-1 block font-Montserrat" href="/#">
                Floor 4 San Francisco, CA
              </a>
              <a className="my-1 block font-Montserrat" href="/#">
                contact@company.com
              </a>
            </div>
          </div>
        </div>
        <div className="bg-primary pb-3 ">
          <div
            className="flex pb-5 px-3 m-auto pt-5   text-sm flex-col
      max-w-screen-lg items-center"
          >
            <div className="md:flex-auto md:flex-row-reverse  flex-row flex ">
              <a href="/#" className="w-6 mx-1">
                <RiInstagramFill className="text-text_light" />
              </a>
              <a href="/#" className="w-6 mx-1">
                <FaYoutube className="text-text_light" />
              </a>
              <a href="/#" className="w-6 mx-1">
                <FaFacebook className="text-text_light" />
              </a>
              <a href="/#" className="w-6 mx-1">
                <FaTwitter className="text-text_light" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
