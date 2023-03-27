import React from "react";
import { Link } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center  ">
      <h2 className="text-primary text-4xl mb-7 ">
        WellCome to FreePik Clone Website{" "}
      </h2>
      <Link to="/dashboard" className="btn btn-primary">
        Go to Dashboard
      </Link>
      <Link to="/login" className="btn btn-primary">
        Login
      </Link>
    </div>
  );
};

export default MainLayout;
