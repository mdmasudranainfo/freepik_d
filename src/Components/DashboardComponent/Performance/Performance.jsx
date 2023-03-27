import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { AiOutlineBarChart, AiOutlineHeart } from "react-icons/ai";
import { BsDownload } from "react-icons/bs";
import { IoIosImages } from "react-icons/io";
import { AiOutlineInfoCircle } from "react-icons/ai";

const Performance = () => {
  return (
    <div className="mx-4">
      {/* titiles and botton see more  */}
      <div className="flex justify-between my-6 items-center">
        <h1 className="font-bold leading-6">Performance overview</h1>
        <button className="text-primary flex items-center font-bold gap-2">
          <span>All data</span>
          <BsArrowRight className="text-xl" />
        </button>
      </div>

      {/* grid cards */}
      <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 xs:grid-cols-1    gap-4">
        <div className="border p-5 rounded-md">
          <p className="flex items-center gap-2">
            <span>Estimated earnings</span> <AiOutlineInfoCircle />
          </p>
          <h1 className="text-[22px] my-2 font-bold">17.24 €</h1>

          {/*  */}
          <div className="flex items-center justify-between m-0 p-0">
            <div className="">
              <p>Last Month</p>
              <p className="font-semibold">3 €</p>
            </div>

            <AiOutlineBarChart className="text-3xl text-[#2bc48a]" />
          </div>
        </div>

        {/*  */}
        <div className="border p-5 rounded-md">
          <p className="">Downloads</p>
          <h1 className="text-[22px] my-2 font-bold">218</h1>

          {/*  */}
          <div className="flex items-center justify-between m-0 p-0">
            <div className="">
              <p>Last Month</p>
              <p className="font-semibold">42</p>
            </div>

            <BsDownload className="text-2xl text-primary" />
          </div>
        </div>

        {/*  */}
        <div className="border p-5 rounded-md">
          <p className="">Like</p>
          <h1 className="text-[22px] my-2 font-bold">15</h1>

          {/*  */}
          <div className="flex items-center justify-between m-0 p-0">
            <div className="">
              <p>Last Month</p>
              <p className="font-semibold">42</p>
            </div>

            <AiOutlineHeart className="text-3xl text-[#fb5252]" />
          </div>
        </div>
        {/*  */}
        <div className="border p-5 rounded-md">
          <p className="">Files</p>
          <h1 className="text-[22px] my-2 font-bold">2,649</h1>

          {/*  */}
          <div className="flex items-center justify-between m-0 p-0">
            <div className="">
              <p>Last Month</p>
              <p className="font-semibold">475</p>
            </div>

            <IoIosImages className="text-3xl " />
          </div>
        </div>
      </div>

      <p className="mt-2">
        {" "}
        <span className="font-bold">Estimated earnings:</span> This amount is an
        estimate based on your earnings from last month. Actual earnings will be
        displayed at the end of the month.
      </p>
    </div>
  );
};

export default Performance;
