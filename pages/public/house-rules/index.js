// import React from "react";
// import HouseRules from "../../houserules";
// const index = () => {
//   return (
//     <div>
//       <HouseRules />
//     </div>
//   );
// };

// export default index;


import React, { useState } from "react";
import Picture1 from "../../../assets/imgs/Picture1.png";
import Picture2 from "../../../assets/imgs/Picture2.png";
import Picture3 from "../../../assets/imgs/Picture3.png";
import Picture4 from "../../../assets/imgs/Picture4.jpg";
import Picture5 from "../../../assets/imgs/Picture5.png";
import Picture6 from "../../../assets/imgs/Picture6.png";
import Picture7 from "../../../assets/imgs/Picture7.png";
import Picture8 from "../../../assets/imgs/Picture8.jpg";
import Picture9 from "../../../assets/imgs/Picture9.jpg";
import Picture10 from "../../../assets/imgs/Picture10.jpg";
import Picture11 from "../../../assets/imgs/Picture11.jpg";
import Picture12 from "../../../assets/imgs/Picture12.png";
import Picture13 from "../../../assets/imgs/Picture13.jpg";
import Picture14 from "../../../assets/imgs/Picture14.jpg";
import Picture15 from "../../../assets/imgs/Picture15.png";

const HouseRules = () => {
  const houseRulesData = [
    {
      img: Picture1.src,
      description: "1. No parties or under-age drinking or events allowed",
      expanded: false,
    },
    {
      img: Picture2.src,
      description: "2. No smoking allowed",
      expanded: false,
    },
    {
      img: Picture3.src,
      description: "3. No pets allowed (Can Edit)",
      expanded: false,
    },
    {
      img: Picture4.src,
      description: "4. Suitable for toddlers and children (Can Edit)",
      expanded: false,
    },
    {
      img: Picture5.src,
      cancelImg: Picture3.src,
      description: "5. No unregistered guests allowed",
      expanded: false,
    },
    {
      img: Picture6.src,
      description: "6. Please don't eat or drink in the bedroom",
      expanded: false,
    },
    {
      img: Picture7.src,
      description: "7. Please respect the noise curfew",
      expanded: false,
    },
    {
      img: Picture8.src,
      description: "8. Please turn off the AC when you go out",
      expanded: false,
    },
    {
      img: Picture9.src,
      description: "9. Please respect check-in and check-out times",
      expanded: false,
    },
    {
      img: Picture10.src,
      description:
        "10. Please take extra care of your keys and valuables. Lost keys incur a replacement fee. We are not responsible for lost or stolen valuables.",
      expanded: false,
    },
    {
      img: Picture11.src,
      description:
        "11. Please take care of the furnishings. You must pay for damages that exceed the security deposit.",
      expanded: false,
    },
    {
      img: Picture12.src,
      cancelImg: Picture3.src,
      description: "12. Please don’t rearrange the furniture",
      expanded: false,
    },
    {
      img: Picture13.src,
      description: "13. Please do your dishes",
      expanded: false,
    },
    {
      img: Picture14.src,
      description: "14. Please take the trash out before you leave",
      expanded: false,
    },
    {
      img: Picture15.src,
      description: "15. No illegal substances allowed on the premises",
      expanded: false,
    },
  ];

  const [showMore, setShowMore] = useState(
    new Array(houseRulesData.length).fill(false)
  );

  const toggleExpanded = (index) => {
    const updatedShowMore = [...showMore];
    updatedShowMore[index] = !updatedShowMore[index];
    setShowMore(updatedShowMore);
  };

  return (
    <div className="md:container md:mx-auto p-5">
      <div className="flex h-screen justify-center8">
        <div className="flex-1 p-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {houseRulesData.map((items, index) => (
              <div className="p-2 flex flex-col items-center justify-center sm:justify-start sm:items-start">
                <div className="">
                  <img
                    src={items.img}
                    alt="Image 1"
                    className="h-20 object-cover mb-4 rounded-md"
                  />
                </div>
                <p className="text-gray-800">
                  {showMore[index]
                    ? items.description
                    : `${items.description.slice(0, 30)}${
                        items.description.length > 30 ? "..." : ""
                      }`}
                </p>
                {items.description.length > 30 && (
                  <button
                    className="btn text-sm font-medium text-gray-900 hover:text-linkColor"
                    onClick={() => toggleExpanded(index)}
                  >
                    {showMore[index] ? "Show less" : "Show more"}
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="w-1/4 p-4 hidden sm:block">
          <h1 className="font-bold text-5xl p-2 leading-relaxed">
            HERE’S A QUICK VISUAL SUMMARY OF{" "}
            <span className="underline underline-offset-2">SOME</span> of{" "}
            <span className="underline underline-offset-2">
              our HOUSE RULES{" "}
            </span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default HouseRules;
