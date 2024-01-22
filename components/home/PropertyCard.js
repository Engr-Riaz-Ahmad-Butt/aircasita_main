import Image from "next/image";
import Link from "next/link";
import React from "react";

export const PropertyCard = ({
  title,
  image,
  distance,
  guests,
  bedrooms,
  beds,
  baths,
  price,
  cancellation,
}) => {
  return (
    <div className="h-full max-w-md mx-auto mt-8 ">
      <div className="bg-white overflow-hidden rounded-lg shadow-md">
        <Image
          src={image}
          alt="Listing Image"
          className="w-full h-48 object-cover object-center"
        />

        <div className="p-5">
          <h2 className="text-xl font-semibold mb-2">{title}</h2>
          <p className="text-gray-600 mb-2">{distance} kilometers away</p>
          <p className="text-gray-600 mb-2">Mar 25 - 30</p>

          <div className="flex items-center justify-between mb-2">
            <div>
              <span className="text-green-500">${price}</span>
              <span className="text-gray-500">/night</span>
            </div>
          </div>

          <div className="text-right">
            <Link href="#" className="text-blue-500 hover:underline">
              View details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
