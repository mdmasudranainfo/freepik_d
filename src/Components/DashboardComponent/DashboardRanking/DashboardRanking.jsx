import React from "react";
import { RakingData } from "../../AllData/AllData";
import { IoIosArrowBack, IoIosArrowForward, IoMdImages } from "react-icons/io";
import { BsDownload } from "react-icons/bs";
import { RiUserHeartLine } from "react-icons/ri";

const DashboardRanking = () => {
  return (
    <div className="m-4">
      <div className="grid 2xl:grid-cols-6 xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xs:gird-cols-1 gap-5">
        {RakingData?.map((raking, i) => (
          <div
            className={`${
              i == 0 && "border border-primary"
            } p-5 rounded-sm rakingShadow relative overflow-hidden`}
          >
            <p className="p-4 absolute top-0 right-0">
              # {i == 0 ? "35208" : i}
            </p>
            <div className="flex gap-4 items-center">
              <img
                className="rounded-full w-16 h-16"
                src={raking?.img}
                alt=""
              />
              <p>{raking?.name}</p>
            </div>
            {/* icons */}
            <div className=" mt-5 flex justify-between">
              <div className="flex flex-col justify-center items-center">
                <IoMdImages />
                <span>{raking?.files}</span>
              </div>
              <div className="flex flex-col justify-center items-center">
                <BsDownload />
                <span>{raking?.download}</span>
              </div>
              <div className="flex flex-col justify-center items-center">
                <RiUserHeartLine />
                <span>{raking?.user}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* pagination */}
      <div className="flex justify-center mt-7">
        <div className=" flex gap-2">
          <button className="text-primary font-semibold cursor-pointer ">
            First
          </button>
          <div className=" rounded-md w-11 h-11 bg-primary flex justify-center items-center text-white text-xl cursor-pointer">
            <IoIosArrowBack />
          </div>
          <div className=" rounded-md w-11 h-11 bg-primary flex justify-center items-center text-white text-xl cursor-pointer">
            <span>1</span>
          </div>
          <div className=" rounded-md w-11 h-11 bg-primary flex justify-center items-center text-white text-xl cursor-pointer">
            <span>2</span>
          </div>
          <div className=" rounded-md w-11 h-11 bg-primary sm:flex hidden justify-center items-center text-white text-xl cursor-pointer">
            <span>3</span>
          </div>

          <div className=" rounded-md w-11 h-11 bg-primary flex justify-center items-center text-white text-xl cursor-pointer">
            <IoIosArrowForward />
          </div>
          <button className="text-primary font-semibold cursor-pointer">
            Last
          </button>
        </div>
      </div>
    </div>
  );
};

export default DashboardRanking;
