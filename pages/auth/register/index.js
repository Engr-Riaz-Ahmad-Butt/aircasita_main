"use client"
import React, { useEffect, useRef, useState } from "react";

import Auth from "../../../layout/Auth";
import { IoIosCamera } from "react-icons/io";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { useRouter } from 'next/router';

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
    <div className="flex justify-center items-center w-full mt-3">
      <div className="w-full max-w-xl m-0">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="flex justify-center">
            <div className="flex justify-center relative ">
              <img
                src={
                  imageUrl ||
                  "https://cdn.iconscout.com/icon/free/png-256/free-avatar-370-456322.png?f=webp"
                }
                alt="userProfile"
                className="w-16 h-16 border  rounded-full"
                onClick={handleCameraIconClick}
              />
              <div className=" rounded-full">
                <IoIosCamera
                  className="absolute bottom-0 right-0 rounded-full h-7 w-6 bg-gray border-gray cursor-pointer"
                  onClick={(e) => {
                    e.preventDefault();
                    handleCameraIconClick();
                  }}
                />
                <input
                  type="file"
                  accept="image/"
                  className="hidden"
                  ref={fileInputRef}
                  onChange={(e) => {
                    handleFileChange(e);
                  }}
                />
              </div>
            </div>
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              for="username"
            >
              Name
            </label>
            <input
              className="shadow appearance-none input-border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="name"
              placeholder="Enter your name"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              for="username"
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
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              for="username"
            >
              Email
            </label>
            <input
              className="shadow appearance-none input-border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="email"
              placeholder="abc@gmail.com"
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              for="password"
            >
              Password
            </label>
            <div className="flex flex-row justify-center items-center input-border border-red-500 rounded w-full py-2 px-3  mb-3 leading-tight focus:outline-none focus:shadow-outline">
              <input
                className=" appearance-none  focus:outline-none w-full h-full"
                type={showPassword ? "text" : "password"}
                placeholder="*********"
                name="password"
                // value="password"
                onClick={(e) => setShowPassword(e.target.value)}
              />
              <span className="password-icon" onClick={handleTogglePassword}>
                {showPassword ? <FaEye /> : <FaEyeSlash />}
              </span>
            </div>
          </div>
          <div className="mb-2">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              for="password"
            >
              Your Identification:
              <span className="text-darkGray text-xs">
                Upload photo of a government ID card 'driver's license-both
                sides;or passport data photo'
              </span>
            </label>
            <input
              className="input-border rounded w-full py-2 px-3 text-gray-700 mb-3 "
              type="file"
            />
          </div>
          <div>
            <button
              className="bg-primary  w-full  hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline "
              type="button"
              onClick={()=>{navigate("/auth/login")}}
            >
              Sign Up
            </button>
          </div>
          <div className="flex ">
            <p className="pr-2 text-sm mt-3 mb-1">
              Already have an acount :
              <a href="/auth/login" className="text-primary pl-1">
                LogIn
              </a>
            </p>
          </div>
          <div className="flex flex-wrap">
            <p className="pr-2 text-sm">
              Your{" "}
              <a href="airCASITA.com" className="text-primary">
                airCASITA.com
              </a>{" "}
              acount:
            </p>
            <p className="text-sm">
              <a href="/auth/register">LogIn</a> by your name & phone number
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;

SignUp.Layout = Auth;
