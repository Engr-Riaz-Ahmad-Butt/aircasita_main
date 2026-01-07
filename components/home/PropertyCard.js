import Image from "next/image";
import React from "react";
import Link from "next/link";
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
    <div className="h-full w-full max-w-sm sm:max-w-md mx-auto mt-6 sm:mt-8">
      <div className="bg-white overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow">
        <Image
          src={image}
          alt="Listing Image"
          className="w-full h-40 sm:h-48 object-cover object-center"
        />

        <div className="p-4 sm:p-5">
          <h2 className="text-lg sm:text-xl font-semibold mb-2 truncate">{title}</h2>
          <p className="text-gray-600 mb-2 text-sm sm:text-base">{distance} kilometers away</p>
          <p className="text-gray-600 mb-2 text-sm sm:text-base">Mar 25 - 30</p>

          <div className="flex items-center justify-between mb-2">
            <div>
              <span className="text-green-500 text-base sm:text-lg font-semibold">${price}</span>
              <span className="text-gray-500 text-sm sm:text-base">/night</span>
            </div>
          </div>

          <div className="text-right">
            <Link href="#" className="text-blue-500 hover:underline text-sm sm:text-base">
              View details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
