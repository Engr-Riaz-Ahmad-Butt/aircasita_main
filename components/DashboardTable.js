import Link from "next/link";
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
        action: "true",
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
    Booking: [
      {
        id: 1,
        properties: "NORTH POLE",
        checkin: 253,
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
    <div className="container font-Montserrat font-bold">
      {/* Tab buttons */}
      <div className="flex overflow-x-scroll sm:flex-row whitespace-nowrap">
        <button
          className={`py-2 px-4   ${
            activeTab === "Completed"
              ? "border-b-2 font-bold  text-primary sm:text-sm "
              : "text-primary"
          }`}
          onClick={() => changeTab("Completed")}
        >
          Completed
        </button>
        <button
          className={`py-2 px-4 ${
            activeTab === "InProgress"
              ? "border-b-2  font-bold  text-primary sm:text-sm "
              : "text-primary"
          }`}
          onClick={() => changeTab("InProgress")}
        >
          In Progress
        </button>
        <button
          className={`py-2 px-4    ${
            activeTab === "Disputes"
              ? "border-b-2  font-bold  text-primary sm:text-sm "
              : " text-primary"
          }`}
          onClick={() => changeTab("Disputes")}
        >
          Disputes
        </button>
        <button
          className={`py-2 px-4    ${
            activeTab === "Booking"
              ? "border-b-2  font-bold  text-primary sm:text-sm "
              : " text-primary"
          }`}
          onClick={() => changeTab("Booking")}
        >
          Booking Request
        </button>
      </div>
      {/* Table content */}
      <div className="overflow-x-scroll">
        <table className="min-w-full border rounded border-none">
          {/* Table header */}
          <thead className="bg-lite_gray whitespace-nowrap">
            <tr className="">
              {activeTab === "Completed" ? (
                <>
                  <th className="text-center py-2 text-primary sm:text-sm ">
                    {" "}
                    Booking Id
                  </th>
                  <th className="text-primary sm:text-sm sm:px-2">
                    Properties
                  </th>
                  <th className="text-primary sm:text-sm px-3">Check In</th>
                  <th className="text-primary sm:text-sm px-3">Check Out</th>
                  <th className="text-primary sm:text-sm px-2">Amount</th>
                  <th className="text-primary sm:text-sm sm:px-2">Action</th>
                </>
              ) : activeTab === "InProgress" ? (
                <>
                  <th className="text-center py-2 text-primary sm:text-sm ">
                    {" "}
                    Booking Id
                  </th>
                  <th className="text-primary sm:text-sm sm:px-2">
                    Properties
                  </th>
                  <th className="text-primary sm:text-sm px-3">Check In</th>
                  <th className="text-primary sm:text-sm px-3">Check Out</th>
                  <th className="text-primary sm:text-sm sm:px-2">Amount</th>
                </>
              ) : (
                <>
                  <th className="text-center py-2 text-primary sm:text-sm ">
                    {" "}
                    Booking Id
                  </th>
                  <th className="text-primary sm:text-sm sm:px-2">
                    Properties
                  </th>
                  <th className="text-primary sm:text-sm px-3">Check In</th>
                  <th className="text-primary sm:text-sm px-3">Check Out</th>
                  <th className="text-primary sm:text-sm px-2">Amount</th>
                  <th className="text-primary sm:text-sm sm:px-2">Action</th>
                </>
              )}
            </tr>
          </thead>
          {/* Table body */}
          <tbody className="border-none whitespace-nowrap">
            {tablesData[activeTab].map((row) => (
              <tr key={row.id} className="border-b border-darkGray">
                {activeTab == "Completed" ? (
                  <>
                    <td className="text-center py-2 sm:text-sm ">{row.id}</td>
                    <td className="text-center sm:text-sm ">
                      {row.properties}
                    </td>
                    <td className="text-center sm:text-sm ">{row.checkin}</td>
                    <td className="text-center sm:text-sm ">{row.checkout}</td>
                    <td className="text-center sm:text-sm ">{row.amount}</td>
                    <td className="text-center sm:text-sm ">
                      <button class="bg-primary  text-text_light font-bold py-1 px-4 rounded">
                        <Link href={`/dashboard/view-page/${encodeURIComponent(row.id)}`}>view</Link>
                      </button>
                    </td>
                  </>
                ) : activeTab === "InProgress" ? (
                  <>
                    <td className="text-center py-2">{row.id}</td>
                    <td className="text-center">{row.properties}</td>
                    <td className="text-center">{row.checkin}</td>
                    <td className="text-center">{row.checkout}</td>
                    <td className="text-center">{row.amount}</td>
                  </>
                ) : activeTab === "Disputes" ? (
                  <>
                    <td className="text-center py-2 sm:text-sm ">{row.id}</td>
                    <td className="text-center sm:text-sm ">
                      {row.properties}
                    </td>
                    <td className="text-center sm:text-sm ">{row.checkin}</td>
                    <td className="text-center sm:text-sm ">{row.checkout}</td>
                    <td className="text-center sm:text-sm ">{row.amount}</td>
                    <td className="text-center sm:text-sm ">
                      <button className="bg-primary text-text_light font-bold py-1 px-4 rounded">
                        view
                      </button>
                    </td>
                  </>
                ) : activeTab === "Booking" ? (
                  <>
                    <td className="text-center py-2 sm:text-sm ">{row.id}</td>
                    <td className="text-center sm:text-sm ">
                      {row.properties}
                    </td>
                    <td className="text-center sm:text-sm ">{row.checkin}</td>
                    <td className="text-center sm:text-sm ">{row.checkout}</td>
                    <td className="text-center sm:text-sm ">{row.amount}</td>
                    <td className="text-center sm:text-sm ">
                      <button className="bg-primary text-text_light font-bold py-1 px-4 rounded">
                        view
                      </button>
                    </td>
                  </>
                ) : (
                  <>
                    <td className="text-center py-2">{row.id}</td>
                    <td className="text-center">{row.properties}</td>
                    <td className="text-center">{row.checkin}</td>
                    <td className="text-center">{row.checkout}</td>
                    <td className="text-center">{row.amount}</td>
                  </>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TabbedTable;
