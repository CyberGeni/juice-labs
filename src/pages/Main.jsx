import React from "react";
import heroImg from "../assets/images/hero-img.png";
import smiley from "../assets/images/smiley.png";
import dino from "../assets/images/dino.png";
import rainbow from "../assets/images/rainbow.png";
import fruit from "../assets/images/fruit.png";
import "../App.css";
import Marquee from "../components/Marquee";
import DrinkSelection from "../components/DrinkSelection";
import "animate.css";
import banner from "../assets/images/banner.png";
import Reviews from "../components/Reviews";
import pinkWaves from "../assets/images/pink-waves.svg";
import footerImage from "../assets/images/bottom-hero-image.png";

function Main() {
  return (
    <div className="font-athletics overflow-x-hidden relative">
      <img
        className="absolute w-1/3 mx-auto inset-0 animate__animated animate__bounceInDown animate__delay-3s"
        src={banner}
        alt=""
      />
      {/* hero */}
      <section>
        <h1 className="px-[5%] sm:hidden text-center font-ppformulaNormal my-10 text-8xl text-[#EF4200]">
          DELICIOUS <br /> & <br /> HEALTHY
        </h1>
        {/* <h1 className="hidden sm:flex px-[5%] text-center leading-relaxed text-[#EF4200] font-ppformulaLight sm:text-[12.46vw]">
          DELICIOUS & HEALTHY
        </h1> */}
        <h1 className="hidden sm:flex mx-auto justify-center px-[5%] text-[14.5rem] tracking-tight leading-relaxed font-ppformulaLight text-[#EF4200] text-center">
        DELICIOUS & HEALTHY
          </h1>
        <div className="relative">
          <img className="dino absolute w-24 -top-[5.4rem]" src={dino} alt="" />
          <img className="h-80 object-cover sm:h-auto" src={heroImg} alt="" />
          <img
            className="absolute right-14 top-14 w-5 sm:w-16"
            src={smiley}
            alt=""
          />
        </div>
      </section>

      {/* marquee section */}
      <div className="relative overflow-hidden">
        <section className="px-[5%] py-36 grid grid-cols-5">
          <span className="w-3/5 col-span-2 inline h-fit">
            <span className="text-4xl text-[#25513A] leading leading-normal">
              Your trusted source for bebidos muy{" "}
              <span className="underline">deliciosos.</span>
            </span>
            <img className="w-16 h-fit -mt-7 inline " src={fruit} alt="" />
          </span>
          <img className="col-span-1 -mt-20" src={rainbow} alt="" />
          <div className="col-span-2 text-right">
            <p className="text-lg w-3/5 ml-auto">
              Discover the perfect balance of taste and nutrition with Juice
              Labs. Our selection of healthy drinks is sure to satisfy your
              thirst and nourish your body. From refreshing waters to energizing
              smoothies, we have something for everyone.
            </p>
            <div className="relative w-fit text-right ml-auto">
              <div className="absolute z-10 w-full border-2 border-black text-lg font-bold rounded-full py-2 transition-all text-center bg-black text-black">
                add to cart
              </div>
              <button className="relative z-10 -top-1 active:top-0 text-white bg-[#25513A] px-4  w-fit border-2 border-black text-lg rounded-full py-2 transition-all">
                add to cart
              </button>
            </div>
          </div>
        </section>
        <Marquee />
      </div>

      {/* drink carousel section */}
      <div>
        <DrinkSelection />
      </div>
      <div>
        <Reviews />
      </div>
      {/* experience the benefits of juice labs today */}
      <div>
        <div className="bg-red-300">
          <img className="w-full relative" src={pinkWaves} alt="" />
          <div className="h-[91vh] flex overflow-hidden relative">
            <img className="w-full absolute" src={footerImage} alt="" />
            <div className="bg-[#DD1953] h-fit relative w-1/3 m-[5%] p-8 rounded-2xl border-2 border-black shadow-[0px_5px_0px_0px_#000]">
              <div>
                <h1 className="text-white text-3xl">
                  Experience the Benefits of Juice Labs Today.
                </h1>
                <p className="text-white my-5 text-lg">
                  Don't just take our word for it, try Juice Labs for yourself
                  and discover the delicious and nourishing difference. Shop our
                  wide range of healthy drinks now and experience the benefits
                  of a balanced lifestyle.
                </p>
                <div className="relative w-full text-right ml-auto">
                  <div className="absolute z-10 w-full border-2 border-black text-lg font-bold rounded-full py-2 transition-all text-center bg-black text-black">
                    shop now
                  </div>
                  <button className="relative w-full z-10 -top-1 active:top-0 text-white bg-[#DD1953] px-4 border-2 border-black text-lg rounded-full py-2 transition-all">
                    shop now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* before footer */}
      <div>
        <div>
          <h1>
            Say hey <span>@Juicelabs</span>
          </h1>
          <p>
            Join the Juice Labs community, as we work to become healthy one
            drink at a time.
          </p>
        </div>
      </div>
      {/* footer */}
      
    </div>
  );
}

export default Main;
