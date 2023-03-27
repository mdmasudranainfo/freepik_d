import React from "react";
import { RiCloseLine } from "react-icons/ri";

const UploadFile = ({ setUpload, OpenUpload }) => {
  return (
    <div className="">
      <div>
        <RiCloseLine
          onClick={() => setUpload(!OpenUpload)}
          className="text-3xl text-primary  cursor-pointer"
        />
      </div>
    </div>
  );
};

export default UploadFile;
