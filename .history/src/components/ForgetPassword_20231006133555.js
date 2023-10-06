/** @format */

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { userSendOtp } from "../Repository/Api";

const ForgetPassword = () => {
  const [email, setEmail] = useState("");
  const payload = { email };


  const otpSender = (e) => {
    
      userSendOtp(payload);
  }

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="Backward_Heading step_Heading">
        <p>Forgot Password?</p>
      </div>

      <div className="forget-password">
        <p className="title">Please Enter the following Details to Verify </p>

        <form>
          <div className="otp">
            <div>
              <p>Email Address</p>
              <input type="text" onChange={(e) => setEmail(e.target.value)} />
            </div>

            <button className="sendOtp" onClick={() => otpSender()}>
              SEND OTP
            </button>
          </div>

          <div className="mt-4">
            <p>Enter 6 Digit OTP</p>
            <input type="text" />
          </div>

          <Link to="/changePassword">
            <button className="verify">VERIFY</button>
          </Link>
        </form>
      </div>
    </>
  );
};

export default ForgetPassword;
