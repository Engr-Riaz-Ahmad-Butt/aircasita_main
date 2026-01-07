"use client";
import React, { useEffect, useRef, useState } from "react";

import Auth from "../../../layout/Auth";
import { IoIosCamera } from "react-icons/io";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { useRouter } from "next/router";
import Link from "next/link";
const SignUp = () => {
  const router = useRouter();
  const fileInputRef = useRef(null);
  const [imageUrl, setImageUrl] = useState("");

  const [selectedFile, setSelectedFile] = useState(null);

  const [showPassword, setShowPassword] = useState(false);
  const navigate = (url) => {
    router.push(url);
  };
  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleCameraIconClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (e) => {
    e.preventDefault();
    const file = e.target.files[0];

    if (file) {
      setSelectedFile(file);
      const objectURL = URL.createObjectURL(file);
      setImageUrl(objectURL);
    }
  };

  return (
    <div className="flex justify-center items-center w-full min-h-screen px-4 py-8">
      <div className="w-full max-w-md sm:max-w-lg md:max-w-xl">
        <form className="bg-white shadow-md rounded px-6 sm:px-8 pt-6 pb-8 mb-4">
          <div className="flex justify-center mb-6">
            <div className="flex justify-center relative">
              <img
                src={
                  imageUrl ||
                  "https://cdn.iconscout.com/icon/free/png-256/free-avatar-370-456322.png?f=webp"
                }
                alt="userProfile"
                className="w-20 h-20 sm:w-24 sm:h-24 border rounded-full object-cover cursor-pointer"
                onClick={handleCameraIconClick}
              />
              <div className="rounded-full">
                <IoIosCamera
                  className="absolute bottom-0 right-0 rounded-full h-7 w-7 sm:h-8 sm:w-8 bg-gray border-gray cursor-pointer"
                  onClick={(e) => {
                    e.preventDefault();
                    handleCameraIconClick();
                  }}
                />
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  ref={fileInputRef}
                  onChange={(e) => {
                    handleFileChange(e);
                  }}
                />
              </div>
            </div>
          </div>
          <div className="mb-4 font-Montserrat">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="username"
            >
              Name
            </label>
            <input
              className="shadow appearance-none input-border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Enter your name"
            />
          </div>
          <div className="mb-4 font-Montserrat">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="usernumber"
            >
              Phone Number
            </label>
            <input
              className="shadow appearance-none input-border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="usernumber"
              type="number"
              placeholder="0123456789"
            />
          </div>
          <div className="mb-4 font-Montserrat">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="paypal-email"
            >
              PayPal Email
            </label>
            <input
              className="shadow appearance-none input-border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="paypal-email"
              type="email"
              placeholder="abc@gmail.com"
            />
          </div>

          <div className="mb-4 font-Montserrat">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="id-upload"
            >
              Your Identification:
              <span className="block text-darkGray text-xs mt-1 font-normal">
                Upload photo of a government ID card 'driver's license-both
                sides; or passport data photo'
              </span>
            </label>
            <input
              className="input-border rounded w-full py-2 px-3 text-gray-700 text-sm file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-primary file:text-white hover:file:bg-light_primary"
              id="id-upload"
              type="file"
            />
          </div>
          <div>
            <button
              className="bg-primary text-text_light w-full hover:bg-light_primary text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline font-Montserrat transition-colors"
              type="button"
              onClick={() => {
                navigate("/auth/login");
              }}
            >
              Sign Up
            </button>
          </div>
          <div className="flex font-Montserrat mt-3">
            <p className="text-sm text-center w-full">
              Already have an acount:
              <Link href="/auth/login" className="text-primary pl-1 hover:underline">
                LogIn
              </Link>
            </p>
          </div>
          <div className="flex flex-col sm:flex-row font-Montserrat mt-2 text-center sm:text-left">
            <p className="text-sm">
              Your{" "}
              <Link href="/" className="text-primary hover:underline">
                airCASITA.com
              </Link>{" "}
              acount:
            </p>
            <p className="text-sm sm:ml-1">
              <Link href="/auth/login" className="hover:underline">LogIn</Link> by your PayPal & phone
              number
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;

SignUp.Layout = Auth;
