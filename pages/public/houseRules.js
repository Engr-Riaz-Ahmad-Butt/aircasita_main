import React from "react";
import Picture1 from "../../assets/imgs/Picture1.jpg";
import Picture2 from "../../assets/imgs/Picture2.jpg";
import Picture3 from "../../assets/imgs/Picture3.png";
import Picture16 from "../../assets/imgs/Picture16.jpg";
import Picture4 from "../../assets/imgs/Picture4.jpg";
import Picture6 from "../../assets/imgs/Picture6.jpg";
import Picture7 from "../../assets/imgs/Picture7.png";
import Picture8 from "../../assets/imgs/Picture8.jpg";
import Picture9 from "../../assets/imgs/Picture9.jpg";
import Picture10 from "../../assets/imgs/Picture10.jpg";
import Picture11 from "../../assets/imgs/Picture11.jpg";
import Picture12 from "../../assets/imgs/Picture12.jpg";
import Picture13 from "../../assets/imgs/Picture13.jpg";
import Picture14 from "../../assets/imgs/Picture14.jpg";
import Picture17 from "../../assets/imgs/Picture17.jpg";

const houseRules = () => {
  return (
    <div className="md:container md:mx-auto p-3">
      <div className="flex h-screen">
        <div className="flex-1 p-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            <div className="p-4">
              <div className="relative flex justify-center">
                <img
                  src={Picture3.src}
                  alt="Image 3"
                  className="h-20 object-cover absolute"
                />
                <img
                  src={Picture1.src}
                  alt="Image 1"
                  className="h-20 object-cover mb-4 rounded-md"
                />
              </div>
              <p className="text-gray-800">
                1. No parties or under-age drinking or events allowed
              </p>
            </div>
            <div className="p-4">
              <div className="relative flex justify-center">
                <img
                  src={Picture3.src}
                  alt="Image 3"
                  className="h-20 object-cover absolute"
                />
                <img
                  src={Picture2.src}
                  alt="Image 1"
                  className="h-20 object-cover mb-4 rounded-md"
                />
              </div>
              <p className="text-gray-800">2. No smoking allowed</p>
            </div>
            <div className="p-4">
              <div className="relative flex justify-center">
                <img
                  src={Picture3.src}
                  alt="Image 3"
                  className="h-20 object-cover absolute"
                />
                <img
                  src={Picture16.src}
                  alt="Image 1"
                  className="h-20 object-cover mb-4 rounded-md"
                />
              </div>
              <p className="text-gray-800">3. No pets allowed (Can Edit)</p>
            </div>
            <div className="p-4">
              <div className="flex justify-center">
                <img
                  src={Picture4.src}
                  alt="Image 1"
                  className="h-20 object-cover mb-4 rounded-md"
                />
              </div>
              <p className="text-gray-800">
                4. Suitable for toddlers and childrens (Can Edit)
              </p>
            </div>
            <div className="p-4">
              <div className="relative flex justify-center">
                <img
                  src={Picture3.src}
                  alt="Image 3"
                  className="h-20 object-cover absolute"
                />
                <h1 className="h-20 text-3xl font-black pt-3 mb-4">
                  UNREGIS Guest
                </h1>
              </div>
              <p class="text-gray-800">5. No unregistered guests allowed</p>
            </div>
            <div className="p-4">
              <div className="relative flex justify-center">
                <img
                  src={Picture3.src}
                  alt="Image 3"
                  className="h-20 object-cover absolute"
                />
                <img
                  src={Picture6.src}
                  alt="Image 1"
                  className="h-20 object-cover mb-4 rounded-md"
                />
              </div>
              <p className="text-gray-800">
                6. Please don't eat or drink in the badroom
              </p>
            </div>
            <div className="p-4">
                <div className="flex justify-center">
              <img
                src={Picture7.src}
                alt="Image 1"
                className="h-20 object-cover mb-4 rounded-md"
              />
              </div>
              <p className="text-gray-800">
                7. Please respect the noise curfew
              </p>
            </div>
            <div className="p-4">
                <div className="flex justify-center">
              <img
                src={Picture8.src}
                alt="Image 1"
                className="h-20 object-cover mb-4 rounded-md"
              />
              </div>
              <p className="text-gray-800">
                8. Please turn off the AC when you go out
              </p>
            </div>
            <div className="p-4">
                <div className="flex justify-center">
              <img
                src={Picture9.src}
                alt="Image 1"
                className="h-20 object-cover mb-4 rounded-md"
              />
              </div>
              <p className="text-gray-800">
                9. Please respect check-in and check-out times
              </p>
            </div>
            <div className="p-4 grid justify-items-center">
              <div className="flex justify-center">
                <img
                  src={Picture10.src}
                  alt="Image 1"
                  className="h-20 object-cover mb-4 rounded-md"
                />
              </div>
              <p className="text-gray-800">
                10. Please take extra care of your keys and valuables. Lost keys
                incur a replacement fee. We are not responsible for lost or
                stolen valuables.
              </p>
            </div>
            <div className="p-4">
                <div className="flex justify-center">
              <img
                src={Picture11.src}
                alt="Image 1"
                className="h-20 object-cover mb-4 rounded-md"
              />
              </div>
              <p className="text-gray-800">
                11. Please take care of the furnishings. You must pay for
                damages which exceed the security deposit.
              </p>
            </div>
            <div className="p-4">
              <div className="relative flex justify-center">
                <img
                  src={Picture3.src}
                  alt="Image 3"
                  className="h-20 object-cover absolute"
                />
                <img
                  src={Picture12.src}
                  alt="Image 1"
                  className="h-20 object-cover mb-4 rounded-md"
                />
              </div>
              <p className="text-gray-800">
                12. Please don’t rearrange the furniture
              </p>
            </div>
            <div className="p-4">
                <div className="flex justify-center">
              <img
                src={Picture13.src}
                alt="Image 1"
                className="h-20 object-cover mb-4 rounded-md"
              />
              </div>
              <p className="text-gray-800">13. Please do your dishes</p>
            </div>
            <div className="p-4">
                <div className="flex justify-center">
              <img
                src={Picture14.src}
                alt="Image 1"
                className="h-20 object-cover mb-4 rounded-md"
              />
              </div>
              <p className="text-gray-800">
                14. Please take the trash out before you leave
              </p>
            </div>
            <div className="p-4">
              <div className="relative flex justify-center">
                <img
                  src={Picture3.src}
                  alt="Image 3"
                  className="h-20 object-cover absolute"
                />
                <img
                  src={Picture17.src}
                  alt="Image 1"
                  className="h-20 object-cover mb-4 rounded-md"
                />
              </div>
              <p className="text-gray-800">
                15. No illegal substances allowed on the premises
              </p>
            </div>
          </div>
        </div>
        <div className="w-1/4 p-4 hidden sm:block">
          <h1 className="font-bold text-6xl p-2 leading-relaxed">
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

export default houseRules;
