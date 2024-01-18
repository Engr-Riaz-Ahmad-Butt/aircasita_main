"use client";

import React, { useEffect, useRef, useState } from "react";
import { IoIosCamera } from "react-icons/io";
import { FaEye, FaEyeSlash, FaTrash } from "react-icons/fa";
import { useRouter } from "next/router";

const Profile = () => {
  const router = useRouter();
  const fileInputRef = useRef(null);
  const [imageUrl, setImageUrl] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [showPassword, setShowPassword] = useState(false);

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
    <div className="container m-auto flex justify-center items-center w-full mt-3 sm:px-3 md:px-4">
      <div className="w-full m-0">
        <h1 className="text-3xl font-bold py-5">Profile</h1>
        <form className="bg-white shadow-md rounded px-8 md:px-20 pt-6 pb-8 mb-4">
          <div>
            <div className="flex justify-center">
              <div className="flex justify-center relative ">
                <img
                  src={
                    imageUrl ||
                    "https://cdn.iconscout.com/icon/free/png-256/free-avatar-370-456322.png?f=webp"
                  }
                  alt="userProfile"
                  className="w-16 h-16 border rounded-full"
                  onClick={handleCameraIconClick}
                />
                <div className="rounded-full">
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
            <div className="flex justify-center align-middle font-Montserrat">
              <h1 className="text-1xl font-bold">Edit Image</h1>
            </div>
          </div>
          <div className="mb-4 mt-5 flex flex-wrap justify-between font-Montserrat">
            <div className="w-full md:w-1/2 pr-2 mb-4 md:mb-0">
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
                readOnly
              />
            </div>
            <div className="w-full md:w-1/2 pr-2 mb-4 md:mb-0">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="useremail"
              >
                PayPal Email
              </label>
              <input
                className="shadow appearance-none input-border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="useremail"
                type="email"
                placeholder="abc@gmail.com"
                readOnly
              />
            </div>
          </div>
          <div className="mb-4 mt-5 flex flex-wrap justify-between font-Montserrat">
            <div className="w-full md:w-1/2 pr-2 mb-4 md:mb-0">
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

            <div className="w-full md:w-1/2 pr-2 mb-4 md:mb-0">
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
          </div>
          <div className="mb-2 font-Montserrat">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              for="password"
            >
              Your Identification:
              {/* <span className="text-darkGray text-xs">
                Upload photo of a government ID card 'driver's license-both
                sides or passport data photo'
              </span> */}
            </label>
            <div className="flex gap-3">
              <div className="relative group w-20 h-20 upload-img-border mb-5 rounded overflow-hidden">
                <img
                  src="https://static.thenounproject.com/png/145683-200.png"
                  alt="Uploaded"
                  className="w-full h-full object-cover transition-opacity duration-300 ease-in-out group-hover:opacity-70"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="p-1">
                    <FaTrash className="text-red-500 cursor-pointer" />
                  </div>
                  <div className="p-1">
                    <FaEye className="text-blue-500 cursor-pointer" />
                  </div>
                </div>
              </div>
              <div className="relative group w-20 h-20 upload-img-border mb-5 rounded overflow-hidden">
                <img
                  src="https://static.thenounproject.com/png/145683-200.png"
                  alt="Uploaded"
                  className="w-full h-full object-cover transition-opacity duration-300 ease-in-out group-hover:opacity-70"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="p-1">
                    <FaTrash className="text-red-500 cursor-pointer" />
                  </div>
                  <div className="p-1">
                    <FaEye className="text-blue-500 cursor-pointer" />
                  </div>
                </div>
              </div>
            </div>
            <input
              className="input-border rounded w-full py-2 px-3 text-gray-700 mb-3 "
              type="file"
            />
          </div>
          <div>
            <button
              className="bg-primary w-full md:w-48 text-text_light hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline "
              type="button"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Profile;
