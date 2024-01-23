import React, { useState } from "react";
import { IoNotifications } from "react-icons/io5";
import { IoIosSettings } from "react-icons/io";
import { FaArrowRight } from "react-icons/fa";
const JobSelectionModal = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleToggleModal = () => {
    setModalOpen(!modalOpen);
  };

  return (
    <li>
      <button
        className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm py-1 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        type="button"
        onClick={handleToggleModal}
      >
        <IoNotifications className="text-text_light" />
      </button>

      <div
        id="select-modal"
        tabIndex="-1"
        aria-hidden={!modalOpen}
        className={`${
          modalOpen
            ? "block overflow-y-auto overflow-x-hidden fixed w-full h-full m-auto  z-auto  justify-center align-middle  items-center  md:inset-0 max-h-full"
            : "hidden"
        }`}
      >
        <div className="relative p-4 w-full max-w-md max-h-full flex justify-center items-center  ml-96 mt-10 ">
          <div className="absolute w-96 bg-gray flex justify-center flex-col items-center rounded-lg px-5 top-3 left-52 ">
            <div className="flex w-full items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Notifications
              </h3>
              <button
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm h-8 w-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                data-modal-toggle="select-modal"
                onClick={handleToggleModal}
              >
                <IoIosSettings />
                <span className="sr-only">Close modal</span>
              </button>
            </div>
            <div className="text-sm w-full ">
              <ul className="space-y-4 mb-4">
                <li className="  bg-light my-3 rounded-md text-sm">
                  <div className="block">
                    <div className="w-full border pb-4 pt-4 pl-3 product-card-border rounded">
                      New Contact
                    </div>
                  </div>
                </li>
                <li>
                  <div className="block">
                    <div className="w-full border pb-4 pt-4 pl-3 product-card-border rounded">
                      New Contact
                    </div>
                  </div>
                </li>
                <li>
                  <div className="block">
                    <div className="w-full border pb-4 pt-4 pl-3 product-card-border rounded">
                      New Contact
                    </div>
                  </div>
                </li>
              </ul>
              <button className="text-white bg-primary inline-flex w-full justify-center rounded-lg items-center gap-2 mb-4 text-text_light px-5 py-2.5 text-center ">
                View All
                <FaArrowRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

export default JobSelectionModal;
