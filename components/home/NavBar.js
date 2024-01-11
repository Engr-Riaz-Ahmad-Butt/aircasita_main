import React from "react";

const NavBar = () => {
  return (
    <div className=" bg-primary  border mt-3 h-16 w-2/3 rounded-full m-auto">
      <div className="flex">
        <div className="mt-1 ml-1">
          <div className="flex flex-col bg-darkGray  w-72 rounded-3xl pt-2 pl-2">
            <div>
              <label>Where</label>
            </div>
            <div>
              <input
                type="text"
                placeholder="search your destination"
                className=""
              />
            </div>
          </div>
        </div>
        <div>check In</div>
        <div>check out</div>
      </div>
    </div>
  );
};

export default NavBar;
