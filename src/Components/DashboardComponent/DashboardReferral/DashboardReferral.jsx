import React from "react";
import { Link } from "react-router-dom";
import { RxCopy } from "react-icons/rx";
import { BsFacebook, BsLinkedin, BsWhatsapp } from "react-icons/bs";

const DashboardReferral = () => {
  return (
    <div className="mx-5">
      <div className="grid lg:grid-cols-2 grid-cols-1 mt-5 gap-5">
        <div className=" ">
          <h1 className="text-[26px] font-bold mb-2">Contributor Referral</h1>
          <h2 className="text-2xl mb-2">
            Refer a friend and
            <span className="font-bold">earn 10% commission</span> on every
            referral
          </h2>
          <p>
            *From April 2021 onwards, Referral Program is subject to new{" "}
            <Link className="text-primary font-semibold">
              terms and conditions.
            </Link>
          </p>

          {/* input  */}
          <div className=" mt-10">
            <label className="font-semibold " htmlFor="">
              Invite via email
            </label>
            <div className="flex mt-1">
              <input
                className="w-full input input-bordered focus:outline-none"
                type="text"
              />
              <button className="bg-primary w-[200px] text-white ml-[-10px] rounded-r-md ">
                Send invitation
              </button>
            </div>
          </div>
          {/* input  */}
          <div className=" mt-10">
            <label className="font-semibold " htmlFor="">
              Share the link
            </label>
            <div className="md:flex block mt-1">
              <div className="flex w-full">
                <input
                  className="w-full input input-bordered focus:outline-none"
                  type="text"
                />
                <button className="border-primary flex items-center justify-center border-2 bg-white w-[200px] text-primary ml-[-5px]  rounded-r-md ">
                  <RxCopy />
                  <span> Copy Link</span>
                </button>
              </div>
              <div className="flex md:mt-0 mt-3 ">
                <button className=" border-2 px-2 md:py-0 py-2 hover:bg-[#F8F9FB] ml-2 rounded-md">
                  <BsFacebook className="text-2xl text-primary" />
                </button>
                <button className=" border-2 px-2 md:py-0 py-2 hover:bg-[#F8F9FB] ml-2 rounded-md">
                  <BsWhatsapp className="text-2xl text-[#59DC8B]" />
                </button>
                <button className=" border-2 px-2 md:py-0 py-2 hover:bg-[#F8F9FB] ml-2 rounded-md">
                  <BsLinkedin className="text-2xl text-[#0072b1]" />
                </button>
              </div>
            </div>
          </div>

          {/* How does it work?  */}
          <div className=" mt-10">
            <h2 className="text-lg">How does it work?</h2>
            {/*  */}
            <div className=" flex gap-4 mt-4">
              <img
                className="max-w-[80px]"
                src="https://contributor.freepik.com/media/img/referral/megaphone.svg"
                alt=""
              />
              <div className="">
                <p className="font-bold">Share</p>
                <p>
                  Your friend has to{" "}
                  <span className="font-semibold">register</span> through your
                  referral link and get{" "}
                  <span className="font-semibold">content published.</span>
                </p>
              </div>
            </div>
            {/*  */}
            <div className=" flex gap-4 mt-4">
              <img
                className="max-w-[80px]"
                src="https://contributor.freepik.com/media/img/referral/diamond.svg"
                alt=""
              />
              <div className="">
                <p className="font-bold">Earn</p>
                <p>
                  Receive 10% commission from the earnings generated by each
                  referral during a year.
                </p>
              </div>
            </div>
            {/*  */}
            <div className=" flex gap-4 mt-4">
              <img
                className="max-w-[80px]"
                src="https://contributor.freepik.com/media/img/referral/graphics.svg"
                alt=""
              />
              <div className="">
                <p className="font-bold">Grow</p>
                <p>The more friends you have, the more money you earn.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <div className="flex  items-center justify-center gap-2 mb-5">
            <span>Filter</span>
            <select className=" border p-1 px-2 rounded-md focus:outline-none ">
              <option selected>All</option>
              <option>Homer</option>
              <option>Marge</option>
              <option>Bart</option>
              <option>Lisa</option>
              <option>Maggie</option>
            </select>
          </div>

          {/*  */}
          <div className=" border p-5 text-center rounded-sm ">
            <h2 className="text-[26px] text-primary font-semibold">0 €</h2>
            <p className="text-[#869fb2]">EARNINGS*</p>
          </div>
          <p className="text-right text-[#869fb2] my-3">
            *The Referral Program’s earnings will be included in your monthly
            invoice.
          </p>

          {/*  */}
          <div className=" border rounded-sm flex flex-col justify-center items-center py-12 p-5">
            <img
              className="max-w-full"
              src="https://static-contributor-fp.cdnpk.net/assets/eff9626468a6ec890d4c2c4a2196a776.svg"
              alt=""
            />
            <p className="font-semibold my-4">No referrals to show</p>
            <p className="mb-20">
              As soon as your referred friends content is published, they will
              appear here
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardReferral;
