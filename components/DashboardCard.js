import React from "react";

export const DashboardCard = ({status, numberOfOrders}) => {
  return (
    <div className="flex flex-row sm:flex-row justify-between bg-white p-4 rounded-md product-card-border h-full">
      <div className="flex items-center flex-1">
        <div className="flex flex-col items-start gap-2 w-full">
          <p className="text-base sm:text-lg font-semibold text-gray-800 truncate">{status}</p>
          <p className="text-sm sm:text-base text-gray-500">{numberOfOrders}</p>
        </div>
      </div>

      <div className="flex items-center ml-4">
        <div className="bg-gray-300 p-3 sm:p-4 rounded-full flex-shrink-0">
          <svg
            className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600"
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