/** @format */

import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { orderFailed } from "../Repository/Api";

const Failed = () => {
  const { id } = useParams();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    orderFailed(id);
  }, [id]);

  return (
    <div className="Thanks_Container">
      <p className="title">Failed !</p>
      <p className="desc">
        Thank you for Purchasing your Products from Us! We are looking forward
        to <br />
        provide you the best Experience
      </p>
      <img src={"/Image/12.gif"} alt="" />
      <Link to="/" style={{ cursor: "pointer" }}>
        <button>RETURN TO HOMEPAGE</button>
      </Link>
    </div>
  );
};

export default Failed;
