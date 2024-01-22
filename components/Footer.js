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
          <div className="text-gray-800 sm:grid md:grid-cols-4 sm:grid-cols-2 mx-auto pt-6">
            <div className="flex justify-center md:justify-start items-center cursor-pointer sm:32">
              <Link href="#">
                <img src={logo.src} className="w-40" />
                </Link>
            </div>
            <div className="flex justify-center items-center flex-col">
              <div className="text-sm uppercase text-indigo-600 font-bold font-Montserrat">
                Resources
              </div>

              <Link className="my-3 block font-Montserrat" href="/public/safety">
                Safety
              </Link>
            </div>
            <div className="flex justify-center items-center flex-col">
              <div className="text-sm uppercase text-indigo-600 font-bold font-Montserrat">
                Support
              </div>

              <Link
                className="my-3 block font-Montserrat"
                href="/public/house-rules"
              >
                House Rules
              </Link>
            </div>
            <div className="flex justify-center items-center flex-col">
              <div className="text-sm uppercase text-indigo-600 font-bold font-Montserrat">
                Contact us
              </div>

              <Link className="my-3 block font-Montserrat" href="/#">
                contact@company.com
              </Link>
            </div>
          </div>
          <div className="bg-primary pb-3 ">
            <div
              className="flex pb-5 px-3 m-auto pt-5 text-sm flex-col
            max-w-screen-lg items-center"
            >
              <div className="md:flex-auto md:flex-row-reverse  flex-row flex ">
                <Link href="/#" className="w-6 mx-1">
                  <RiInstagramFill className="text-text_light text-2xl" />
                </Link>
                <Link href="/#" className="w-6 mx-1">
                  <FaYoutube className="text-text_light text-2xl" />
                </Link>
                <Link href="/#" className="w-6 mx-1">
                  <FaFacebook className="text-text_light text-2xl" />
                </Link>
                <Link href="/#" className="w-6 mx-1">
                  <FaTwitter className="text-text_light text-2xl" />
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
