import React from "react";
import DashboardRightSidebar from "../DashboardRightSidebar/DashboardRightSidebar";
import DashboardSlider from "../DashboardSlider/DashboardSlider";
import Performance from "../Performance/Performance";
import PublishDownload from "../PublishDownload/PublishDownload";
import Suggestions from "../Suggestions/Suggestions";

const DashboardHome = () => {
  return (
    <div className="px-2 mt-2  ">
      <div className="flex xl:flex-row flex-col gap-7">
        {/* content */}
        <div className="xl:w-[80%] w-full">
          <DashboardSlider />
          <Performance />
          <PublishDownload />
          <Suggestions />
        </div>
        {/* sidebar */}
        <div className="xl:w-[20%] w-full">
          <DashboardRightSidebar />
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
