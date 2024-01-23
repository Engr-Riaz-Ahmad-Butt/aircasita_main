// import React, { useState } from "react";

// const Calander = () => {
//   const months = [
//     "January", "February", "March", "April", "May", "June",
//     "July", "August", "September", "October", "November", "December"
//   ];

//   const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

//   const [currentMonth, setCurrentMonth] = useState(0);

//   const handleNextMonth = () => {
//     setCurrentMonth((prevMonth) => (prevMonth + 1) % months.length);
//   };

//   const handlePrevMonth = () => {
//     setCurrentMonth((prevMonth) => (prevMonth - 1 + months.length) % months.length);
//   };

//   const daysInMonth = new Date(2022, currentMonth + 1, 0).getDate();
//   const daysArray = Array.from({ length: daysInMonth }, (_, dayIndex) => dayIndex + 1);

//   return (
//     <div>
//       {/* <div class="flex items-center justify-center my-5 from-red-100 via-red-300 to-red-500 bg-gradient-to-br">
//         <div class="w-full max-w-lg p-6 mx-auto bg-white rounded-2xl product-card-border flex flex-col">
//           <div class="flex justify-between pb-4">
//             <div class="-rotate-90 cursor-pointer">
//               <svg
//                 width="12"
//                 height="7"
//                 viewBox="0 0 12 7"
//                 fill="none"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   d="M11.001 6L6.00098 1L1.00098 6"
//                   stroke="black"
//                   stroke-opacity="0.4"
//                   stroke-width="2"
//                   stroke-linecap="round"
//                   stroke-linejoin="round"
//                 />
//               </svg>
//             </div>
//             <span class="uppercase text-sm font-semibold text-gray-600">
//               january - 2022
//             </span>
//             <div class="rotate-90 cursor-pointer">
//               <svg
//                 width="12"
//                 height="7"
//                 viewBox="0 0 12 7"
//                 fill="none"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   d="M11.001 6L6.00098 1L1.00098 6"
//                   stroke="black"
//                   stroke-opacity="0.4"
//                   stroke-width="2"
//                   stroke-linecap="round"
//                   stroke-linejoin="round"
//                 />
//               </svg>
//             </div>
//           </div>
//           <div class="flex justify-between font-medium uppercase text-xs pt-4 pb-2 border-t">
//             <div class="px-3 border rounded-sm w-14 h-5 flex items-center justify-center border-red-500 text-red-500 shadow-md">
//               sun
//             </div>

//             <span class="px-3 border rounded-sm w-14 h-5 flex items-center justify-center border-green-500 text-green-500 shadow-md">
//               mon
//             </span>

//             <span class="px-3 border rounded-sm w-14 h-5 flex items-center justify-center border-green-500 text-green-500 shadow-md">
//               tue
//             </span>

//             <span class="px-3 border rounded-sm w-14 h-5 flex items-center justify-center border-green-500 text-green-500 shadow-md">
//               wed
//             </span>

//             <span class="px-3 border rounded-sm w-14 h-5 flex items-center justify-center border-green-500 text-green-500 shadow-md">
//               thu
//             </span>

//             <span class="px-3 border rounded-sm w-14 h-5 flex items-center justify-center border-green-500 text-green-500 shadow-md">
//               fri
//             </span>

//             <span class="px-3 border rounded-sm w-14 h-5 flex items-center justify-center border-green-500 text-green-500 shadow-md">
//               sat
//             </span>
//           </div>

//           <div class="flex justify-between font-medium text-sm pb-2">
//             <span class="px-1 text-gray-400 w-14 flex justify-center items-center">
//               30
//             </span>

//             <span class="px-1 text-gray-400 w-14 flex justify-center items-center">
//               31
//             </span>

//             <span class="px-1 w-14 flex justify-center items-center border hover:border-green-500 hover:text-green-500 cursor-pointer">
//               01
//             </span>

//             <span class="px-1 w-14 flex justify-center items-center border hover:border-green-500 hover:text-green-500 cursor-pointer">
//               02
//             </span>

//             <span class="px-1 w-14 flex justify-center items-center border hover:border-green-500 hover:text-green-500 cursor-pointer">
//               03
//             </span>

//             <span class="px-1 w-14 flex justify-center items-center border hover:border-green-500 hover:text-green-500 cursor-pointer">
//               04
//             </span>

//             <span class="px-1 w-14 flex justify-center items-center border hover:border-green-500 hover:text-green-500 cursor-pointer">
//               05
//             </span>
//           </div>
//           <div class="flex justify-between font-medium text-sm pb-2">
//             <span class="px-1 w-14 flex justify-center items-center border border-red-500 text-red-500 cursor-pointer">
//               06
//             </span>

//             <span class="px-1 bg-darkGray w-14 flex justify-center items-center border hover:border-green-500 hover:text-green-500 cursor-pointer">
//               07
//             </span>

//             <span class="px-1 bg-darkGray w-14 flex justify-center items-center border hover:border-green-500 hover:text-green-500 cursor-pointer">
//               08
//             </span>

//             <span class="px-1 bg-darkGray w-14 flex justify-center items-center border hover:border-green-500 hover:text-green-500 cursor-pointer">
//               09
//             </span>

//             <span class="px-1 bg-darkGray w-14 flex justify-center items-center border hover:border-green-500 hover:text-green-500 cursor-pointer">
//               10
//             </span>

//             <span class="px-1 w-14 text-primary flex justify-center items-center border hover:border-green-500 hover:text-green-500 cursor-pointer">
//               Free
//             </span>

//             <span class="px-1 w-14 flex justify-center items-center border hover:border-green-500 hover:text-green-500 cursor-pointer">
//               12
//             </span>
//           </div>

//           <div class="flex justify-between font-medium text-sm pb-2">
//             <span class="px-1 w-14 flex justify-center items-center border border-red-500 text-red-500 cursor-pointer">
//               13
//             </span>

//             <span class="px-1 w-14 flex justify-center items-center border hover:border-green-500 hover:text-green-500 cursor-pointer">
//               14
//             </span>

//             <span class="px-1 w-14 flex justify-center items-center border hover:border-green-500 hover:text-green-500 cursor-pointer">
//               15
//             </span>

//             <span class="px-1 w-14 flex justify-center items-center border hover:border-green-500 hover:text-green-500 cursor-pointer">
//               16
//             </span>

//             <span class="px-1 w-14 flex justify-center items-center border hover:border-green-500 hover:text-green-500 cursor-pointer">
//               17
//             </span>

//             <span class="px-1 w-14 flex justify-center items-center border hover:border-green-500 hover:text-green-500 cursor-pointer">
//               18
//             </span>

//             <span class="px-1 w-14 flex justify-center items-center border hover:border-green-500 hover:text-green-500 cursor-pointer">
//               19
//             </span>
//           </div>

//           <div class="flex justify-between font-medium text-sm pb-2">
//             <span class="px-1 w-14 flex justify-center items-center border border-red-500 text-red-500 cursor-pointer">
//               20
//             </span>

//             <span class="px-1 w-14 flex justify-center items-center border hover:border-green-500 hover:text-green-500 cursor-pointer">
//               21
//             </span>

//             <span class="px-1 w-14 flex justify-center items-center border hover:border-green-500 hover:text-green-500 cursor-pointer">
//               22
//             </span>

//             <span class="px-1 w-14 flex justify-center items-center border hover:border-green-500 hover:text-green-500 cursor-pointer">
//               23
//             </span>

//             <span class="px-1 w-14 flex justify-center items-center border hover:border-green-500 hover:text-green-500 cursor-pointer">
//               24
//             </span>

//             <span class="px-1 w-14 flex justify-center items-center border border-green-500 text-white bg-green-500 cursor-pointer shadow-md">
//               25
//             </span>

//             <span class="px-1 w-14 flex justify-center items-center border hover:border-green-500 hover:text-green-500 cursor-pointer">
//               26
//             </span>
//           </div>

//           <div class="flex justify-between font-medium text-sm pb-2">
//             <span class="px-1 w-14 flex justify-center items-center border border-red-500 text-red-500 cursor-pointer">
//               27
//             </span>

//             <span class="px-1 w-14 flex justify-center items-center border hover:border-green-500 hover:text-green-500 cursor-pointer">
//               28
//             </span>

//             <span class="px-1 w-14 flex justify-center items-center border hover:border-green-500 hover:text-green-500 cursor-pointer">
//               29
//             </span>

//             <span class="px-1 w-14 flex justify-center items-center border hover:border-green-500 hover:text-green-500 cursor-pointer">
//               30
//             </span>

//             <span class="px-1 text-gray-400 w-14 flex justify-center items-center">
//               01
//             </span>

//             <span class="px-1 text-gray-400 w-14 flex justify-center items-center">
//               02
//             </span>

//             <span class="px-1 text-gray-400 w-14 flex justify-center items-center">
//               03
//             </span>
//           </div>
//         </div>
//       </div> */}

  
// <div className="flex items-center justify-center my-5 from-red-100 via-red-300 to-red-500 bg-gradient-to-br">
//         <div className="w-full max-w-lg p-6 mx-auto bg-white rounded-2xl product-card-border flex flex-col">
//           <div className="flex justify-between pb-4">
//             <div className="-rotate-90 cursor-pointer" onClick={handlePrevMonth}>
//               <svg
//                 width="12"
//                 height="7"
//                 viewBox="0 0 12 7"
//                 fill="none"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   d="M11.001 6L6.00098 1L1.00098 6"
//                   stroke="black"
//                   strokeOpacity="0.4"
//                   strokeWidth="2"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                 />
//               </svg>
//             </div>
//             <span className="uppercase text-sm font-semibold text-gray-600">
//               {months[currentMonth]} - 2022
//             </span>
//             <div className="rotate-90 cursor-pointer" onClick={handleNextMonth}>
//               <svg
//                 width="12"
//                 height="7"
//                 viewBox="0 0 12 7"
//                 fill="none"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   d="M11.001 6L6.00098 1L1.00098 6"
//                   stroke="black"
//                   strokeOpacity="0.4"
//                   strokeWidth="2"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                 />
//               </svg>
//             </div>
//           </div>
//           <div className="flex font-medium uppercase text-xs pt-4 pb-2 border-t">
//             {daysOfWeek.map((day, index) => (
//               <div key={index} className="px-3 border rounded-sm w-14 h-5 flex items-center justify-center border-green-500 text-green-500 shadow-md">
//                 {day}
//               </div>
//             ))}
//           </div>
//           <div className="flex flex-wrap">
//             {daysArray.map((day, index) => (
//               <span key={index} className="px-1 w-14 flex justify-center items-center border hover:border-green-500 hover:text-green-500 cursor-pointer">
//                 {day}
//               </span>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Calander;


// import React, { useState } from "react";

// const Calendar = () => {
//   const months = [
//     "January", "February", "March", "April", "May", "June",
//     "July", "August", "September", "October", "November", "December"
//   ];

//   const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

//   const [currentMonth, setCurrentMonth] = useState(0);

//   const handleNextMonth = () => {
//     setCurrentMonth((prevMonth) => (prevMonth + 1) % months.length);
//   };

//   const handlePrevMonth = () => {
//     setCurrentMonth((prevMonth) => (prevMonth - 1 + months.length) % months.length);
//   };

//   const daysInMonth = new Date(2022, currentMonth + 1, 0).getDate();
//   const daysArray = Array.from({ length: daysInMonth }, (_, dayIndex) => dayIndex + 1);

//   // Array of dates to be highlighted with gray background
//   const highlightedDates = [9, 10, 11, 12, 13, 14];

//   const chunkArray = (arr, chunkSize) => {
//     const result = [];
//     for (let i = 0; i < arr.length; i += chunkSize) {
//       result.push(arr.slice(i, i + chunkSize));
//     }
//     return result;
//   };

//   const chunkedDays = chunkArray(daysArray, 7);

//   return (
//     <div className="flex items-center justify-center my-5 from-red-100 via-red-300 to-red-500 bg-gradient-to-br">
//       <div className="w-full max-w-lg p-6 mx-auto bg-white rounded-2xl product-card-border">
//         <div className="flex justify-between pb-4">
//           <div className="-rotate-90 cursor-pointer" onClick={handlePrevMonth}>
//             <svg
//               width="12"
//               height="7"
//               viewBox="0 0 12 7"
//               fill="none"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 d="M11.001 6L6.00098 1L1.00098 6"
//                 stroke="black"
//                 strokeOpacity="0.4"
//                 strokeWidth="2"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//               />
//             </svg>
//           </div>
//           <span className="uppercase text-sm font-semibold text-gray-600">
//             {months[currentMonth]} - 2024
//           </span>
//           <div className="rotate-90 cursor-pointer" onClick={handleNextMonth}>
//             <svg
//               width="12"
//               height="7"
//               viewBox="0 0 12 7"
//               fill="none"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 d="M11.001 6L6.00098 1L1.00098 6"
//                 stroke="black"
//                 strokeOpacity="0.4"
//                 strokeWidth="2"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//               />
//             </svg>
//           </div>
//         </div>

//         <table className="w-full">
//           <thead>
//             <tr>
//               {daysOfWeek.map((day, index) => (
//                 <th key={index} className="px-2 py-1 text-center border">{day}</th>
//               ))}
//             </tr>
//           </thead>
//           <tbody>
//             {chunkedDays.map((row, rowIndex) => (
//               <tr key={rowIndex}>
//                 {row.map((day, index) => (
//                   <td
//                     key={index}
//                     className={`px-2 py-1 text-center border hover:border-green-500 hover:text-green-500 cursor-pointer ${
//                       highlightedDates.includes(day) ? 'bg-primary' : ''
//                     }`}
//                   >
//                     {day}
//                   </td>
//                 ))}
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default Calendar;


import React, { useState } from "react";

const Calendar = () => {
  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const [currentMonth, setCurrentMonth] = useState(0);

  const handleNextMonth = () => {
    setCurrentMonth((prevMonth) => (prevMonth + 1) % months.length);
  };

  const handlePrevMonth = () => {
    setCurrentMonth((prevMonth) => (prevMonth - 1 + months.length) % months.length);
  };

  const daysInMonth = new Date(2022, currentMonth + 1, 0).getDate();
  const daysArray = Array.from({ length: daysInMonth }, (_, dayIndex) => dayIndex + 1);

  // Array of dates to be highlighted with gray background
  const highlightedDates = [9, 10, 11, 12];

  // Mapping of day indices to free text
  const freeTextDays = { 13: "Free" };

  const chunkArray = (arr, chunkSize) => {
    const result = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
      result.push(arr.slice(i, i + chunkSize));
    }
    return result;
  };

  const chunkedDays = chunkArray(daysArray, 7);

  return (
    <div className="flex items-center justify-center my-5 from-red-100 via-red-300 to-red-500 bg-gradient-to-br">
      <div className="w-full max-w-lg p-6 mx-auto bg-white rounded-2xl product-card-border">
        <div className="flex justify-between pb-4">
          <div className="-rotate-90 cursor-pointer" onClick={handlePrevMonth}>
            <svg
              width="12"
              height="7"
              viewBox="0 0 12 7"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.001 6L6.00098 1L1.00098 6"
                stroke="black"
                strokeOpacity="0.4"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <span className="uppercase text-sm font-semibold text-gray-600">
            {months[currentMonth]} - 2024
          </span>
          <div className="rotate-90 cursor-pointer" onClick={handleNextMonth}>
            <svg
              width="12"
              height="7"
              viewBox="0 0 12 7"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.001 6L6.00098 1L1.00098 6"
                stroke="black"
                strokeOpacity="0.4"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>

        <table className="w-full">
          <thead>
            <tr>
              {daysOfWeek.map((day, index) => (
                <th key={index} className="px-2 py-1 text-center border">{day}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {chunkedDays.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {row.map((day, index) => (
                  <td
                    key={index}
                    className={`px-2 py-1 text-center border hover:border-green-500 hover:text-green-500 cursor-pointer ${
                      highlightedDates.includes(day) ? 'bg-primary' : ''
                    }`}
                  >
                    {freeTextDays[day] || day}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Calendar;
