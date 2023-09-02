import React, { useState } from "react";
import stars from "../assets/images/stars.png";
import spikey from "../assets/images/spiky-thing.png"
import shades from "../assets/images/shades.png"
import "../App.css";
export default function Reviews() {
  const [activeReview, setActiveReview] = useState("second");
  console.log("active review: ", activeReview);
  // const handleActiveReview = () => {
  //   setActiveReview();
  // };

  return (
    <div className="bg-red-300 pt-24 -mt-16 md:-mt-24">
      <div className="relative py-12">
        <div className="overflow-hidden relative h-[85vh] flex items-center justify-center">
          {/* Review Boxes */}
          <div
            className={`reviews flex items-center w-[200vw] justify-center space-x-[25vw] transition-all
            ${
              activeReview === "first"
                ? "rotate-[24deg] translate-x-[58.5vw] mt-[25rem]"
                : activeReview === "second"
                ? "rotate-0 translate-x-[1.5vw]"
                : activeReview === "third"
                ? "rotate-[-24deg] translate-x-[-55vw] mt-[25rem]"
                : ""
            }
          `}
          >
            <div className="relative flex flex-col items-center justify-between w-[35vw] -rotate-[24deg] mt-36 rounded-2xl border-2 border-black bg-purple-300 text-center font-semibold">
              <img className="w-28 mt-12 mb-1" src={stars} alt="" />
              <p className="px-[8%] pt-6 pb-14 bg-purple-300 leading-relaxed text-lg">
                We've been using Juice Labs as our go-to source for healthy
                drinks in the office, and the results have been nothing short of
                amazing. Productivity has increased and sick days have decreased
                since introducing these tasty and nourishing beverages to our
                team. Thanks, Juice Labs!
              </p>
              <div className="rounded-b-2xl py-4 bg-black text-white w-full font-medium">
                Fave A, Daily Bugle
              </div>
              <img className="absolute w-28 -bottom-8 -right-16 -z-10" src={spikey} alt="" />
              <img className="absolute w-48 -bottom-7 -right-20 " src={shades} alt="" />
            
            </div>
            <div className="relative flex flex-col items-center justify-between w-[35vw] -mt-60 rounded-2xl border-2 border-black bg-yellow-500 text-center font-semibold">
              <img className="w-28 mt-12 mb-1" src={stars} alt="" />
              <p className="w-10/12 mb-6 p-6 leading-relaxed text-lg">
                We've been using Juice Labs as our go-to source for healthy
                drinks in the office, and the results have been nothing short of
                amazing. Productivity has increased and sick days have decreased
                since introducing these tasty and nourishing beverages to our
                team. Thanks, Juice Labs!
              </p>
              <div className="rounded-b-2xl py-4 bg-black text-white w-full font-medium">
                Tresh, Genie Labs
              </div>
              <img className="absolute w-28 -bottom-8 -right-16 -z-10" src={spikey} alt="" />
              <img className="absolute w-48 -bottom-7 -right-20 " src={shades} alt="" />
            </div>
            <div className=" flex flex-col items-center justify-between w-[35vw] rounded-2xl bg-green-400 rotate-[24deg] mt-36 right  border-2 border-black text-center font-semibold">
              <img className="w-28 mt-12 mb-1" src={stars} alt="" />
              <p className="px-[8%] pt-6 pb-14 bg-green-400 leading-relaxed text-lg">
                We've been using Juice Labs as our go-to source for healthy
                drinks in the office, and the results have been nothing short of
                amazing. Productivity has increased and sick days have decreased
                since introducing these tasty and nourishing beverages to our
                team. Thanks, Juice Labs!
              </p>
              <div className="rounded-b-2xl py-4 bg-black text-white w-full font-medium">
                Zay, Zig Zag Zee
              </div>
              <img className="absolute w-28 -bottom-8 -right-16 -z-20" src={spikey} alt="" />
              <img className="absolute w-48 -bottom-7 -right-20 " src={shades} alt="" />
            
            </div>
          </div>

          {/* Custom Pagination */}
          <div className="absolute bottom-40 pagination flex items-center justify-center space-x-16">
            <div className="relative">
              <div className="absolute p-4 w-12 h-12 border-2 border-black text-lg font-bold rounded-full py-3.5 transition-all text-center bg-black text-black">
                1
              </div>
              <button
                onClick={() => setActiveReview("first")}
                className={`w-12 h-12 -mt-1 active:mt-0 absolute border-2 border-black text-lg font-bold rounded-full transition-all first-letter:
                ${
                  activeReview === "first"
                    ? "bg-purple-300 hover:bg-purple-400"
                    : "bg-stone-100 hover:bg-stone-200"
                    
                }
                `}
              >
                1
              </button>
            </div>
            <div className="relative">
              <div className="absolute p-4 w-12 h-12 border-2 border-black text-lg font-bold rounded-full py-3.5 transition-all text-center bg-black text-black">
                2
              </div>
              <button 
              onClick={() => setActiveReview("second")}
              className={`w-12 h-12 -mt-1 active:mt-0 absolute border-2 border-black text-lg font-bold rounded-full transition-all
              ${
                activeReview === "second"
                  ? "bg-yellow-500 hover:bg-yellow-600 "
                  : "bg-stone-100 hover:bg-stone-200"
                  
              }
              `}>
                2
              </button>
            </div>
            <div className="relative">
              <div className="absolute p-4 w-12 h-12 border-2 border-black text-lg font-bold rounded-full py-3.5 transition-all text-center bg-black text-black">
                3
              </div>
              <button 
              onClick={() => setActiveReview("third")}
              className={`w-12 h-12 -mt-1 active:mt-0 absolute border-2 border-black text-lg font-bold rounded-full transition-all
              ${
                activeReview === "third"
                  ? "bg-green-400 hover:bg-green-500"
                  : "bg-stone-100 hover:bg-stone-200"
                  
              }
              
              `}>
                3
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
