import React from "react";

export const DashboardCard = ({totalOrder, numberOfOrders}) => {
  return (
    <div className="container flex flex-col sm:flex-row justify-between bg-white p-4 rounded-md product-card-border mb-4">
      <div className="flex items-center mb-2 sm:mb-0">
        <div className="mr-4">
          <p className="text-lg font-semibold text-gray-800">{totalOrder}</p>
          <p className="text-sm text-gray-500">{numberOfOrders}</p>
        </div>
      </div>

      <div className="flex items-center">
        <div className="bg-gray-300 p-4 rounded-full">
          <svg
            className="w-6 h-6 text-gray-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  );
};