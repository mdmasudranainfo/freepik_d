import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RxUpload } from "react-icons/rx";
import { MdOutlineNotifications } from "react-icons/md";
import { HiBars3 } from "react-icons/hi2";

const DashBoardNav = ({ setOpenMenu, openMenu }) => {
  const clickHanler = () => {
    setOpenMenu(!openMenu);
  };

  console.log("nav", openMenu);
  return (
    <div className="py-2 px-2 flex justify-between  shadow-md  bg-white sticky top-0 z-50">
      <div className="">
        <div className="flex">
          <button
            onClick={clickHanler}
            className="text-white bg-primary mx-2 px-2 text-2xl cursor-pointer xl:hidden block "
          >
            {" "}
            <HiBars3 />
          </button>
          <button className="flex bg-primary rounded-none text-white px-5 py-1 items-center">
            <RxUpload className="text-lg mr-2 " /> <span>Upload File</span>
          </button>
          <button className="md:flex hidden ml-3 font-semibold border-primary border-2 rounded-none text-primary px-5 py-1 items-center">
            Synchronize FTP
          </button>
        </div>
      </div>
      <div className="flex items-center">
        <div className="">
          {/* notification */}
          <div className="relative mx-2 cursor-pointer">
            <MdOutlineNotifications className="text-2xl" />
            <span className="absolute top-[-10px] right-[-10px] bg-yellow-300 px-1 py-0 rounded-sm">
              1
            </span>
          </div>
        </div>
        {/* account */}
        <div className=" ml-2 flex gap-3 items-center">
          <div className="">
            <img
              className="w-8 h-8 rounded-full"
              src="/image/avator.png"
              alt=""
            />
          </div>
          <div className=" md:block hidden">
            <p className=" font-semibold">bstudiobd</p>
            <p className="">Level 3</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashBoardNav;
