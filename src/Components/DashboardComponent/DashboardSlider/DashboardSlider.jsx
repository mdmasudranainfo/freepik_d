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
    <div>
      <Slider {...settings}>
        {/* slide 1 */}
        <div className="mx-4">
          <div className="">
            <div className="relative">
              <img
                src="https://static-contributor-fp.cdnpk.net/assets/0428d11f7c222c50218c0e66112428f9.webp"
                alt=""
              />
              <div className="absolute top-0 left-0 w-full h-full text-white flex justify-center flex-col p-5">
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
        <div>
          <div className="grid grid-cols-2">
            <div className=""></div>
            <div className="">
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
