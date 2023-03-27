import React from "react";
import Slider from "react-slick";
import { FaGooglePlay } from "react-icons/fa";

const DashboardSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    appendDots: (dots) => (
      <div>
        <ul style={{ margin: "0px" }}> {dots} </ul>
        <style>
          {`
          .slick-active button:before {
            color: #1273EB !important;
          }
          
          .slick-dots li button:before {
            font-size: 15px !important;
          }
          
        `}
        </style>
      </div>
    ),
  };
  return (
    <div className="mx-4">
      <Slider {...settings}>
        {/* slide 1 */}
        <div className=" ">
          <div className="">
            <div className="relative">
              <div className="">
                <img
                  className="h-[220px]"
                  src="https://static-contributor-fp.cdnpk.net/assets/0428d11f7c222c50218c0e66112428f9.webp"
                  alt=""
                />
              </div>
              <div className="absolute flex  top-0 left-0 w-full h-full text-white lg:bg-transparent bg-primary  justify-center flex-col lg:p-5 p-2">
                <h1 className="text-2xl ">
                  Download the new Freepik contributor app. <br /> Now available
                  in your country!
                </h1>
                <div className="">
                  <button className="bg-black flex items-center text-lg p-3 gap-3 rounded-md mt-2 ">
                    <span> Get it on Google Play</span> <FaGooglePlay />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* slide 2 */}
        <div className=" ">
          <div className="grid lg:grid-cols-2 grid-cols-1">
            <div className="flex  w-full h-full justify-center flex-col p-5">
              <p className="text-sm">Search trends</p>
              <h1 className="text-2xl text-primary ">
                Discover the most popular search terms <br /> and keywords
              </h1>
              <div className="">
                <button className="  rounded-md mt-2 p-2 px-3 border-2 border-primary text-primary font-semibold ">
                  Explore trends
                </button>
              </div>
            </div>
            <div className="lg:block hidden">
              <img
                src="https://static-contributor-fp.cdnpk.net/assets/b32459cafacc882abba3df53d6f927aa.webp"
                alt=""
              />
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default DashboardSlider;
