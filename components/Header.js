"use client";
import React, { useEffect, useRef, useState } from "react";
import logo from "../public/logo.svg";
import Image from "next/image";
import { RxCross2 } from "react-icons/rx";
import { useRouter } from "next/navigation";
import logoAircasita from "../assets/imgs/airCasita_logo-bg-remove.png";
export const Header = () => {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleDropDown = () => setIsDropDownOpen(!isDropDownOpen);

  const dropdownRef = useRef(null);

  const closeDropDown = () => {
    setIsDropDownOpen(false);
  };
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        event.target.id !== "user-menu-button"
      ) {
        closeDropDown();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  const handleDropdownClick = (event) => {
    event.stopPropagation();
  };

  const navigate = (url) => {
    router.push(url);
  };

  return (
    <nav className="bg-primary  shadow-sm  dark:bg-gray-900">
      <div className="max-w-screen-lg flex flex-wrap items-center justify-between mx-auto ">
        <a href="" className="flex items-center space-x-3 rtl:space-x-reverse">
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-secondary">
            <img src={logoAircasita.src} className="w-36" />
          </span>
        </a>
        <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse relative">
          <button
            type="button"
            className="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
            id="user-menu-button"
            aria-expanded="false"
            data-dropdown-toggle="user-dropdown"
            data-dropdown-placement="bottom"
            onClick={toggleDropDown}
          >
            <span className="sr-only">Open user menu</span>
            <img
              className="w-8 h-8 rounded-full"
              src={
                "https://sm.ign.com/t/ign_pk/cover/a/avatar-gen/avatar-generations_rpge.300.jpg"
              }
              alt="user photo"
            />
          </button>
          {/* <!-- Dropdown menu --> */}

          <div
            className={`z-50 absolute top-5 right-0 my-4  bg-light text-base list-none dark:divide-y dark:divide-gray-200 rounded-lg shadow ${
              isDropDownOpen ? "block" : "hidden"
            }`}
            ref={dropdownRef}
          >
            <div className="px-4 py-3">
              <span className="block text-sm text-gray-900 dark:text-white">
                Bonnie Green
              </span>
              <span className="block text-sm text-gray-500 truncate dark:text-gray-400">
                name@flowbite.com
              </span>
            </div>
            <ul className="py-2" aria-labelledby="user-menu-button ">
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                >
                  Dashboard
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                >
                  Settings
                </a>
              </li>
              <li>
                <a
                  href="/auth/login"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                >
                  Sign out
                </a>
              </li>
            </ul>
          </div>

          <button
            data-collapse-toggle="navbar-user"
            type="button"
            onClick={toggleMenu}
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 z-50"
            aria-controls="navbar-user"
            aria-expanded={isMenuOpen}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>

        <div
          className={`fixed inset-y-0 right-0 z-50 bg-light dark:bg-gray-900 overflow-hidden transform ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          } transition-transform duration-300 md:hidden w-full`}
        >
          <div className=" text-center  h-full p-2">
            <div className="flex justify-end text-end">
              <button onClick={toggleMenu}>
                <RxCross2 />
              </button>
            </div>

            <ul className="flex flex-col space-y-4">
              <li>
                <a
                  href="/home"
                  className="block  px-3 text-primary  hover:text-secondary bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500 font-Montserrat font-bold"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className="block  px-3 text-primary hover:text-secondary bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500 font-Montserrat font-bold"
                  aria-current="page"
                >
                  about
                </a>
              </li>
              <li>
                <a
                  href="/public/safety"
                  className="block px-3 text-primary hover:text-secondary bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500 font-Montserrat font-bold"
                  aria-current="page"
                >
                  safety
                </a>
              </li>
              <li>
                <a
                  href="/public/houseRules"
                  className="block px-3 text-primary hover:text-secondary bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500 font-Montserrat font-bold"
                  aria-current="page"
                >
                  houseRules
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block  px-3 text-primary hover:text-secondary bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500 font-Montserrat font-bold"
                  aria-current="page"
                >
                  contant
                </a>
              </li>
              <li>
                <a
                  href="/public/auth/register"
                  className="block  px-3 text-primary hover:text-secondary bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500 font-Montserrat font-bold"
                  aria-current="page"
                >
                  SignUp
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* `items-center justify-between w-full md:flex md:w-auto md:order-1
           ${isMenuOpen ? "block" : "hidden"}` */}
        <div className="hidden md:block" id="navbar-user ">
          <ul className="flex flex-col font-medium p-4 md:p-0  mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <a
                href="/home"
                className="block py-2 px-3 text-text_light  hover:text-secondary bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500 font-Montserrat"
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/about"
                className="block py-2 px-3 text-text_light  hover:text-secondary rounded  md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 font-Montserrat"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="/public/safety"
                className="block py-2 px-3  rounded text-text_light  hover:text-secondary md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 font-Montserrat"
              >
                Safety
              </a>
            </li>
            <li>
              <a
                href="/public/houseRules"
                className="block py-2 px-3  rounded text-text_light  hover:text-secondary  md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 font-Montserrat"
              >
                HouseRules
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="block py-2 px-3 rounded  text-text_light  hover:text-secondary  md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 font-Montserrat"
              >
                Contact
              </a>
            </li>
            <li>
              <a
                href="/public/auth/register"
                className="block  px-3  text-text_light  hover:text-secondary   rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500 font-Montserrat font-bold"
                aria-current="page"
              >
                SignUp
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
