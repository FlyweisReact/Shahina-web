/** @format */

import React from "react";
import { useNavigate } from "react-router-dom";

const MyProfile = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="Backward_Heading step_Heading">
        <div>
          <img src="/Image/1.png" alt="" onClick={() => navigate(-1)} />
        </div>
        <p className="title">Select Services</p>
      </div>


    <div className="profile_div">

        <div className="heading">

        </div>

    </div>


    </>
  );
};

export default MyProfile;
