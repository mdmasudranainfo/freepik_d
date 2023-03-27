import React, { useState } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import { RiArrowDownSFill, RiArrowDropUpFill } from "react-icons/ri";
import DashBoardNav from "../../../DashboardComponent/DashBoardNav/DashBoardNav";
import { HiBars3 } from "react-icons/hi2";

const DashboardLayout = () => {
  const [openFile, setOpenFile] = useState(true);

  const [openStats, setStats] = useState(true);
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div>
      <div className="max-w-full flex flex-col-reverse xl:flex-row relative">
        {/* menubar */}
        <div
          className={` ${
            openMenu
              ? "block absolute top-14 z-10 w-[100%] "
              : "hidden max-w-[280px] "
          } xl:w-[20%]  w-full bg-neutral h-screen px-8 text-[#BAC8D3] xl:block  `}
        >
          {/* menu logo */}

          <Link to="/dashboard" className="  my-8 block active:bg-primary">
            <img className="max-w-[180px]" src="/image/logo.svg" alt="" />
          </Link>

          {/* menu items  */}

          <div className="">
            <NavLink className="p-3 block NavLink rounded-md" to="/dashboard">
              Dashboard
            </NavLink>
            <div className={`${!openFile && "bg-[#343C42] my-2"} rounded-md`}>
              <NavLink
                onClick={() => setOpenFile(!openFile)}
                className={` p-3 flex justify-between NavLink rounded-md`}
                to="/dashboard"
              >
                <span>Files</span>

                {openFile ? <RiArrowDownSFill /> : <RiArrowDropUpFill />}
              </NavLink>

              <div className={openFile && "hidden"}>
                <NavLink
                  className="p-3 flex justify-between NavLink2"
                  to="/dashboard"
                >
                  <span> Not yet submitted</span>{" "}
                  <span className=" bg-[#656B70] rounded-full px-1">0</span>
                </NavLink>
                <NavLink
                  className="p-3 flex justify-between NavLink2"
                  to="/dashboard"
                >
                  <span>Under revision</span>{" "}
                  <span className=" bg-[#656B70] rounded-full px-1">163</span>
                </NavLink>
                <NavLink
                  className="p-3 flex justify-between NavLink2"
                  to="/dashboard"
                >
                  <span>Rejections</span>{" "}
                  <span className=" bg-[#656B70] rounded-full px-1">140</span>
                </NavLink>
                <NavLink
                  className="p-3 flex justify-between NavLink2"
                  to="/dashboard"
                >
                  <span>Published</span>{" "}
                  <span className=" bg-[#656B70] rounded-full px-1">3130</span>
                </NavLink>
              </div>
            </div>

            {/* stats */}

            <div className={`${!openStats && "bg-[#343C42] my-2"} rounded-md`}>
              <NavLink
                onClick={() => setStats(!openStats)}
                className="p-3 flex justify-between NavLink rounded-md"
                to="/dashboard"
              >
                <span>State</span>
                {openStats ? <RiArrowDownSFill /> : <RiArrowDropUpFill />}
              </NavLink>

              <div className={`${openStats && "hidden"}`}>
                <NavLink className="p-3 block NavLink2" to="/dashboard/chart">
                  General
                </NavLink>
                <NavLink className="p-3 block NavLink2" to="/dashboard/raking">
                  Contributors ranking
                </NavLink>
              </div>
            </div>
          </div>
          <NavLink className="p-3 block NavLink rounded-md" to="/dashboard">
            Search trends
          </NavLink>
          <NavLink className="p-3 block NavLink rounded-md" to="/dashboard">
            Invoicing and agreements
          </NavLink>
          <NavLink className="p-3 block NavLink rounded-md" to="/dashboard">
            Contact
          </NavLink>
          <NavLink className="p-3 block NavLink rounded-md" to="/dashboard">
            Visual Trends 2023
          </NavLink>
        </div>

        {/* dashbord section */}
        <div className="xl:w-[85%] w-full float-right">
          <div className="">
            <DashBoardNav setOpenMenu={setOpenMenu} openMenu={openMenu} />
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
