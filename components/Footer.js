import React from "react";
import { RiInstagramFill } from "react-icons/ri";
import { FaYoutube } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import logo from "../assets/imgs/airCasita_logo-bg-remove.png";
const Footer = () => {
  return (
    <>
      <div className="mt-32 md:mt-24 bg-primary">
        <div className="max-w-screen-lg container m-auto w-full text-gray font-Montserrat mt-4">
          <div className="text-gray-800 sm:grid md:grid-cols-4 sm:grid-cols-2 mx-auto pt-6">
            <div className="flex justify-center md:justify-start items-center cursor-pointer sm:32">
              <a href="#">
                <img src={logo.src} className="w-40" />
              </a>
            </div>
            <div className="flex justify-center items-center flex-col">
              <div className="text-sm uppercase text-indigo-600 font-bold font-Montserrat">
                Resources
              </div>

              <a className="my-3 block font-Montserrat" href="/public/safety">
                Safety
              </a>
            </div>
            <div className="flex justify-center items-center flex-col">
              <div className="text-sm uppercase text-indigo-600 font-bold font-Montserrat">
                Support
              </div>

              <a className="my-3 block font-Montserrat" href="/public/safety">
                Privacy Policy{" "}
              </a>
              <a
                className="my-3 block font-Montserrat"
                href="/public/houseRules"
              >
                Conditions
              </a>
            </div>
            <div className="flex justify-center items-center flex-col">
              <div className="text-sm uppercase text-indigo-600 font-bold font-Montserrat">
                Contact us
              </div>

              <a className="my-3 block font-Montserrat" href="/#">
                contact@company.com
              </a>
            </div>
          </div>
          <div className="bg-primary pb-3 ">
            <div
              className="flex pb-5 px-3 m-auto pt-5   text-sm flex-col
            max-w-screen-lg items-center"
            >
              <div className="md:flex-auto md:flex-row-reverse  flex-row flex ">
                <a href="/#" className="w-6 mx-1">
                  <RiInstagramFill className="text-text_light text-2xl" />
                </a>
                <a href="/#" className="w-6 mx-1">
                  <FaYoutube className="text-text_light text-2xl" />
                </a>
                <a href="/#" className="w-6 mx-1">
                  <FaFacebook className="text-text_light text-2xl" />
                </a>
                <a href="/#" className="w-6 mx-1">
                  <FaTwitter className="text-text_light text-2xl" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;


