/** @format */

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { userRegistration } from "../Repository/Api";

const IndivisualAppointment = () => {
  const [show, setShow] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [gender, setGender] = useState("");
  const [password, setPassword] = useState("");
  const [dob, setDob] = useState("");

  const navigate = useNavigate();

  const payload = {
    firstName,
    lastName,
    email,
    phone,
    gender,
    password,
    dob,
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    userRegistration(payload, navigate);
  };

  function BackNavigation() {
    navigate(-1);
  }

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="Backward_Heading">
        <img src="/Image/1.png" alt="" onClick={() => BackNavigation()} />
        <p>Individual Appointment</p>
      </div>

      <div className="Indivisual-Appointment">
        <p className="title">
          Enter your Details to continue with Individual Appointment{" "}
        </p>

        <form>
          
          <div>
            <p>Select your Gender</p>
            <div className="gender_selection">
              <img src="/Image/4.png" alt="" />
              <img src="/Image/5.png" alt="" />
              <img src="/Image/6.png" alt="" />
            </div>
          </div>

          <div>
            <img src="/Image/7.png" alt="" className="Full_Image" />
          </div>

          <div className="check" style={{ marginTop: "40px" }}>
            <input type="checkbox" />
            <div>
              <p className="title">I Agree to the ‘Terms & Conditions’</p>
            </div>
          </div>

          <Link to="/schedule1">
            <button type="button">CONTINUE</button>
          </Link>
        </form>

        <form onSubmit={submitHandler}>
          <div>
            <p>First Name</p>
            <input
              type="text"
              placeholder="Enter Your First Name"
              required
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>

          <div>
            <p>Last Name</p>
            <input
              type="text"
              placeholder="Enter Your Last Name"
              required
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>

          <div>
            <p>Email</p>
            <input
              type="email"
              name="email"
              placeholder="Enter your Email ID"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <p>Contact Number</p>
            <input
              type="tel"
              pattern="[0-9]{10}"
              name="phone"
              placeholder="Enter your 10-Digit Phone Number"
              required
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>

          <div>
            <p>Date Of Birth</p>
            <input
              type="date"
              name="dob"
              onChange={(e) => setDob(e.target.value)}
              required
            />
          </div>

          <div className="check">
            <input type="checkbox" onClick={() => setShow(!show)} />
            <div>
              <p className="title">Create Profile</p>
              <p className="desc">Mark the Checkbox to Create new Profile </p>
            </div>
          </div>

          {show && (
            <div>
              <p> New Password</p>
              <input
                type="password"
                placeholder="Enter Your New Password"
                required
                name="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          )}

          <div>
            <p>Select your Gender</p>
            <div className="gender_selection">
              <img
                src="/Image/4.png"
                alt=""
                onClick={() => setGender("Male")}
              />
              <img
                src="/Image/5.png"
                alt=""
                onClick={() => setFirstName("Female")}
              />
              <img
                src="/Image/6.png"
                alt=""
                onClick={() => setFirstName("Other")}
              />
            </div>
          </div>

          <div>
            <img src="/Image/7.png" alt="" className="Full_Image" />
          </div>

          <div className="check" style={{ marginTop: "40px" }}>
            <input type="checkbox" required />
            <div>
              <p className="title">I Agree to the ‘Terms & Conditions’</p>
            </div>
          </div>

          <button type="submit">REGISTER ACCOUNT</button>
        </form>
      </div>
    </>
  );
};

export default IndivisualAppointment;
