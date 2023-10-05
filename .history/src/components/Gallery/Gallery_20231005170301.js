/** @format */

import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getGallery } from "../../Repository/Api";

const Gallery = () => {
  const [ response , setResponse ] = useState([])
  const navigate = useNavigate();

  useEffect(() => {
    getGallery(setResponse)
  },[])

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <div className="Backward_Heading step_Heading">
        <div>
          <img src="/Image/1.png" alt="" onClick={() => navigate(-1)} />
        </div>
        <p className="title">Gallery</p>
      </div>

      <div className="Galler_container">
      {response}
        <div className="Item">
          <Link
            to={
              "https://www.instagram.com/nurse.shahina/?igshid=OGQ5ZDc2ODk2ZA%3D%3D"
            }
            target="_blank"
          >
            <img
              src="https://s3-alpha-sig.figma.com/img/a25a/a5f5/22c3cf673bf2f6ff4126eb30c3240dda?Expires=1696809600&Signature=JeP2zUx2kgYpNxD~Z3mzBkaZ0uhxj0cAleXSYM9jTX7BJNN-dI4m3jjQyfiIhwklSrsfTBJPxwiZd7euLKExSCxENfOePstgRglFs4NRDX2b0irPFtxwzEFIyFYpoRPEFYiBcIhvOlJ11R28kpfy~k0B2uAxiByiwL88m4c3kCQjipwWVwCmcbk9bgKs7sDoYktUschbn9TURUgjcHDSv3nLzOeczUhN1kqlJvYYjmt1DY34TOFzrxYsSR8IM82WUo-ulwe~9Tv8SwVT819of9v2xN79rk-SpSZSK8a5o1zVGptZsP2gAoV~uOx02YF5OqtJ8zcaLkYUFxwNAKhvAw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
              alt=""
            />
            <p>Microneedling</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
