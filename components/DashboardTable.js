// import React, { useState } from "react";
// import CompletedTable from "./CompletedTable";
// // import InProgressTable from "./InProgressTable";
// import DisputesTable from "./DisputesTable";
// import { useState } from "react";
// const DashboardTable = () => {
//   const [activeTab, setActiveTab] = useState("completed");

//   const handleTabClick = (tabId) => {
//     setActiveTab(tabId);
//   };
//   return (
//     <div className="p-4">
//       <div className="mb-4 border-b border-gray-200 dark:border-gray-700">
//         <ul className="flex flex-wrap -mb-px text-sm font-medium text-center">
//           <li className="me-2" onClick={() => handleTabClick("completed")}>
//             <button
//               className={`inline-block p-4 border-b-2 rounded-t-lg ${
//                 activeTab === "completed" ? "border-blue-500" : ""
//               }`}
//             >
//               Completed
//             </button>
//           </li>
//           <li className="me-2" onClick={() => handleTabClick("inProgress")}>
//             <button
//               className={`inline-block p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 ${
//                 activeTab === "inProgress" ? "border-blue-500" : ""
//               }`}
//             >
//               In Progress
//             </button>
//           </li>
//           <li className="me-2" onClick={() => handleTabClick("disputes")}>
//             <button
//               className={`inline-block p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 ${
//                 activeTab === "disputes" ? "border-blue-500" : ""
//               }`}
//             >
//               Disputes
//             </button>
//           </li>
//         </ul>
//       </div>
//       <div id="default-tab-content">
//         {activeTab === "completed" && <CompletedTable />}
//         {activeTab === "inProgress" && <InProgressTable />}
//         {activeTab === "disputes" && <DisputesTable />}
//       </div>
//     </div>
//   );
// };

// export default DashboardTable;

import React, { useState } from "react";

const TabbedTable = () => {
  // State to keep track of the active tab
  const [activeTab, setActiveTab] = useState("Completed");
  // Data for different tables
  const tablesData = {
    Completed: [
      {
        id: 1,
        properties: "NORTH POLE",
        checkin: 2,
        checkout: 24,
        amount: "200$",
      },
      {
        id: 2,
        properties: "NORTH POLE",
        checkin: 25,
        checkout: 24,
        amount: "200$",
      },
      {
        id: 3,
        properties: "NORTH POLE",
        checkin: 25,
        checkout: 24,
        amount: "200$",
      },
      {
        id: 4,
        properties: "NORTH POLE",
        checkin: 25,
        checkout: 24,
        amount: "200$",
      },
      {
        id: 5,
        properties: "NORTH POLE",
        checkin: 25,
        checkout: 24,
        amount: "200$",
      },
    ],
    InProgress: [
      {
        id: 1,
        properties: "NORTH POLE",
        checkin: 25,
        checkout: 24,
        amount: "200$",
      },

      {
        id: 2,
        properties: "NORTH POLE",
        checkin: 25,
        checkout: 24,
        amount: "200$",
      },
      {
        id: 3,
        properties: "NORTH POLE",
        checkin: 25,
        checkout: 24,
        amount: "200$",
      },
      {
        id: 4,
        properties: "NORTH POLE",
        checkin: 25,
        checkout: 24,
        amount: "200$",
      },
      {
        id: 5,
        properties: "NORTH POLE",
        checkin: 25,
        checkout: 24,
        amount: "200$",
      },
    ],
    Disputes: [
      {
        id: 1,
        properties: "NORTH POLE",
        checkin: 25,
        checkout: 24,
        amount: "200$",
      },
      {
        id: 2,
        properties: "NORTH POLE",
        checkin: 25,
        checkout: 24,
        amount: "200$",
      },
      {
        id: 3,
        properties: "NORTH POLE",
        checkin: 25,
        checkout: 24,
        amount: "200$",
      },
      {
        id: 4,
        properties: "NORTH POLE",
        checkin: 25,
        checkout: 24,
        amount: "200$",
      },
      {
        id: 5,
        properties: "NORTH POLE",
        checkin: 25,
        checkout: 24,
        amount: "200$",
      },
    ],
  };
  // Function to switch between tabs
  const changeTab = (tab) => {
    setActiveTab(tab);
  };
  return (
    <div className="container  p-4 md:w-full  ">
      {/* Tab buttons */}
      <div className="flex border-b border-darkGray  flex-col md:flex-row">
        <button
          className={`py-2 px-4 ml-4  ${
            activeTab === "Completed"
              ? "border-b-2 font-bold  text-primary"
              : "text-primary"
          }`}
          onClick={() => changeTab("Completed")}
        >
          Completed
        </button>
        <hr />
        <button
          className={`py-2 px-4 ml-4  ${
            activeTab === "InProgress"
              ? "border-b-2  font-bold  text-primary"
              : "text-primary"
          }`}
          onClick={() => changeTab("InProgress")}
        >
          In Progress
        </button>
        <button
          className={`py-2 px-4 ml-4 ${
            activeTab === "Disputes"
              ? "border-b-2  font-bold  text-primary"
              : " text-primary"
          }`}
          onClick={() => changeTab("Disputes")}
        >
          Disputes
        </button>
      </div>
      {/* Table content */}
      <table className="min-w-full  border rounded border-none ">
        {/* Table header */}
        <thead className="bg-lite_gray">
          <tr>
            {activeTab === "Completed" ? (
              <>
                <th className="text-center py-2"> Booking ID</th>
                <th>Properties</th>
                <th>Check In</th>
                <th>Check Out</th>
                <th>Amount</th>
              </>
            ) : activeTab === "InProgress" ? (
              <>
                <th className="text-center py-2"> Booking ID</th>
                <th>Properties</th>
                <th>Check In</th>
                <th>Check Out</th>
                <th>Amount</th>
              </>
            ) : (
              <>
                <th className="text-center py-2"> Booking ID</th>
                <th>Properties</th>
                <th>Check In</th>
                <th>Check Out</th>
                <th>Amount</th>
              </>
            )}
          </tr>
        </thead>
        {/* Table body */}
        <tbody className="border-none">
          {tablesData[activeTab].map((row) => (
            <tr key={row.id} className="border-b border-darkGray">
              {activeTab === "Completed" ? (
                <>
                  <td className="text-center py-2 ">{row.id}</td>
                  <td className="text-center">{row.properties}</td>
                  <td className="text-center">{row.checkin}</td>
                  <td className="text-center">{row.checkout}</td>
                  <td className="text-center">{row.amount}</td>
                </>
              ) : (
                <>
                  <td className="text-center py-2">{row.id}</td>
                  <td className="text-center">{row.properties}</td>
                  <td className="text-center">{row.checkin}</td>
                  <td className="text-center">{row.checkout}</td>
                  <td className="text-center">{row.amount}</td>
                  {/* <td className="text-center">{row.product}</td>
                  <td className="text-center">{row.price}</td> */}
                </>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TabbedTable;
