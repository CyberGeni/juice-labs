import React, { useState } from "react";
import greenWaves from "../assets/images/green-waves.svg";
// import { Splide, SplideTrack, SplideSlide } from "@splidejs/react-splide";
// import "@splidejs/react-splide/css/core";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import gingerLemon from "../assets/images/ginger-lemon.png";
import classicGrape from "../assets/images/classic-grape.png";
import strawberryVanilla from "../assets/images/strawberry-vanilla.png";
import cherryVanilla from "../assets/images/cherry-vanilla.png";
import shadow from "../assets/images/drink-bottom-shadow.svg";
import lemon from "../assets/images/lemon.png";
import grape from "../assets/images/grape.png";
import strawberry from "../assets/images/strawberry.png";
import cherry from "../assets/images/cherry-thumbnail.png";

function DrinkSelection() {
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  const handleTabSelect = (index) => {
    setActiveTabIndex(index);
  };

  const thumbnails = [
    {
      id: 1,
      image: lemon,
      title: "Ginger Lemon",
      price: "$6.99",
    },
    {
      id: 2,
      image: grape,
      title: "Green Tea Latte",
      price: "$6.99",
    },
    {
      id: 3,
      image: strawberry,
      title: "Superfood Smoothie",
      price: "$6.99",
    },
    {
      id: 4,
      image: cherry,
      title: " Coconut water with ELectrolytes",
      price: "$6.99",
    },
    // Add more slides here
  ];

  const slides = [
    { image: gingerLemon },
    { image: classicGrape },
    { image: strawberryVanilla },
    { image: cherryVanilla },
  ];

  return (
    <div className="font-athletics border-t-2 border-black">
      <div className="bg-[#25513A] py-28 px-12 lg:px-20">
        <div>
          <Tabs
            onSelect={handleTabSelect}
            selectedIndex={activeTabIndex}
            className="grid grid-cols-2 text-white gap-8"
          >
            <TabList>
              <h1 className="text-4xl xl:text-5xl font-medium mb-8 max-w-md xl:max-w-xl">
                Explore Our Wide Range of Healthy Drink Options
              </h1>
              <div className="space-y-9 my-6">
                {thumbnails.map((item, index) => (
                  <Tab
                    key={item.id}
                    className="text-amber-50 flex items-center active:outline-none focus:outline-none space-x-6"
                  >
                    <div
                      className={`transition-all w-20 rounded-lg ring-offset-[6px] ring-offset-[#25513A] ${
                        activeTabIndex === index
                          ? "ring-2 ring-amber-50"
                          : "activeTabIndex === 1"
                      }`}
                    >
                      <img
                        className="w-full object-cover mx-auto rounded-lg"
                        src={item.image}
                        alt=""
                      />
                    </div>
                    <div>
                      <h4 className="text-xl font-medium">{item.title}</h4>
                      <span className="text-lg">{item.price}</span>
                    </div>
                  </Tab>
                ))}
              </div>
              <div className="relative max-w-md mt-9">
                <div className="absolute w-full border-2 border-black text-lg font-bold rounded-full py-3.5 transition-all text-center bg-black text-black">add to cart</div>
                <button className="-mt-1 active:mt-0 hover:bg-stone-400 absolute w-full border-2 border-black text-green-900 bg-stone-200 text-lg font-bold rounded-full py-3.5 transition-all">
                  add to cart
                </button>
              </div>
            </TabList>
            <div className="max-w-lg ml-auto w-full">
              <div
                className={`transition-all flex items-center justify-center h-full w-5/6 mx-auto rounded-3xl p-4 border-2 border-b-8 border-black
              ${
                activeTabIndex === 0
                  ? "bg-yellow-500"
                  : activeTabIndex === 1
                  ? "bg-purple-500"
                  : activeTabIndex === 2
                  ? "bg-orange-500"
                  : activeTabIndex === 3
                  ? "bg-pink-400"
                  : ""
              }
              `}
              >
                <TabPanel
                  className={`transition-transform my-auto
              ${
                activeTabIndex === 0
                  ? "tab-content active translate-x-0"
                  : "tab-content inactive translate-x-[100%]"
              }
            `}
                >
                  <img className="w-48 mx-auto " src={gingerLemon} alt="" />
                  <img
                    className="w-48 mx-auto -mt-0.5 relative -z-20"
                    src={shadow}
                    alt=""
                  />
                </TabPanel>
                <TabPanel
                  className={`transition-transform
                ${
                  activeTabIndex === 1
                    ? "tab-content active translate-x-0"
                    : "tab-content inactive translate-x-[100%]"
                }
              `}
                >
                  <img className="w-48 mx-auto" src={classicGrape} alt="" />
                  <img
                    className="w-48 mx-auto -mt-0.5 relative -z-20"
                    src={shadow}
                    alt=""
                  />
                </TabPanel>
                <TabPanel
                  className={`transition-transform
                ${
                  activeTabIndex === 2
                    ? "tab-content active translate-x-0"
                    : "tab-content inactive translate-x-[100%]"
                }
              `}
                >
                  <img
                    className="w-48 mx-auto"
                    src={strawberryVanilla}
                    alt=""
                  />
                  <img
                    className="w-48 mx-auto -mt-0.5 relative -z-20"
                    src={shadow}
                    alt=""
                  />
                </TabPanel>
                <TabPanel
                  className={`transition-transform
                ${
                  activeTabIndex === 3
                    ? "tab-content active translate-x-0"
                    : "tab-content inactive translate-x-[100%]"
                }
              `}
                >
                  <img className="w-48 mx-auto" src={cherryVanilla} alt="" />
                  <img
                    className="w-48 mx-auto -mt-0.5 relative -z-20"
                    src={shadow}
                    alt=""
                  />
                </TabPanel>
              </div>
            </div>

            {/* Add more TabPanels as needed */}
          </Tabs>
        </div>
      </div>
      <img src={greenWaves} className="w-full" alt="" />
    </div>
  );
}

export default DrinkSelection;
