/** @format */

import React, { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import Pictures from "../home/Pictures";
import { addServiceInCart, getSingleService } from "../../Repository/Api";
import { useDispatch, useSelector } from "react-redux";
import { isAuthenticated } from "../../store/authSlice";
import Testimonials from "../PaymentPlans/Testimonials";
import { addServiceLocally } from "../../store/DummySerivce";

const ServicePage = () => {
  const { id } = useParams();
  const [response, setResponse] = useState([]);
  const navigate = useNavigate();
  const isLoggedIn = useSelector(isAuthenticated);
  const dispatch = useDispatch();
  const quantity = 1;
  const [priceId, setPriceId] = useState("");
  const [size, setSize] = useState("");
  const [sizePrice, setSizeprice] = useState("");
  const [memberprice, setMemberPrice] = useState("");

  useEffect(() => {
    getSingleService(id, setResponse);
    window.scrollTo(0, 0);
  }, [id]);

  useEffect(() => {
    if (response?.multipleSize === true) {
      setPriceId(response?.sizePrice?.[0]?._id);
      setSize(response?.sizePrice?.[0]?.size);
      setSizeprice(response?.sizePrice?.[0]?.price);
      setMemberPrice(response?.sizePrice?.[0]?.mPrice);
    }
  }, [response]);

  function BackNavigation() {
    navigate(-1);
  }

  let payload;
  if (response?.multipleSize === true) {
    payload = {
      quantity,
      priceId,
      size,
      sizePrice,
      memberprice,
    };
  } else {
    payload = {
      quantity,
    };
  }

  const addToCart = async () => {
    if (isLoggedIn === true) {
      dispatch(addServiceInCart(id, payload, navigate));
    } else {
      const dummy = { id, payload };
      await dispatch(addServiceLocally(dummy));
      navigate("/appointment");
    }
  };

  return (
    <>
      <main className="service_details_page">
        <div className="Backward_Heading step_Heading" style={{ padding: 0 }}>
          <div>
            <img src="/Image/1.png" alt="" onClick={() => BackNavigation()} />
            <p style={{ width: "50%" }}></p>
          </div>
          <p className="title" style={{ textTransform: "uppercase" }}>
            {response?.name}
          </p>
        </div>
        <div className="main_Img">
          <img src={response?.images?.[0]?.img} alt="" />
        </div>
        <div className="laser_heading">
          <p> {response?.name} </p>
        </div>
        <div className="content">
          <p className="desc">{response?.description}</p>
        </div>
        <div className="flex-container">
          {response?.benfit?.length > 0 && (
            <div className="list">
              <p> Treatment Benefits? </p>
              <ul>
                {response?.benfit?.map((i, index) => (
                  <li key={`Benefit${index}`}> {i} </li>
                ))}
              </ul>
            </div>
          )}

          <div>
            {response?.area?.length > 0 && (
              <div className="multiple-sizes" style={{ margin: 0 }}>
                <p>
                  Area :
                  {response?.area?.map((i, index) => (
                    <span key={`Area${index}`}> {i} </span>
                  ))}
                </p>
              </div>
            )}
            {response?.session?.length > 0 && (
              <div className="multiple-sizes" style={{ margin: 0 }}>
                <p>
                  Session :
                  {response?.session?.map((i, index) => (
                    <span key={`Session${index}`}> {i} </span>
                  ))}
                </p>
              </div>
            )}
            {response?.sizePrice?.length > 0 && (
              <div className="multiple-sizes" style={{ margin: 0 }}>
                <p> Select Size </p>
                <div className="Main">
                  {response?.sizePrice?.map((i, index) => (
                    <div
                      key={`multiple-sizes${index}`}
                      className={`box ${priceId === i._id ? "active" : ""} `}
                      onClick={() => {
                        setPriceId(i?._id);
                        setSize(i?.size);
                        setSizeprice(i?.price);
                        setMemberPrice(i?.mPrice);
                      }}
                    >
                      {i.size} {i.mPrice}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
        {response?.beforeAfterImage && (
          <div className="center_img">
            <img src={response?.beforeAfterImage} alt="" />
          </div>
        )}
        <div className="laser_heading mt-5">
          <p></p>
          <button onClick={() => addToCart()}>Book Now</button>
        </div>
        \
        <div className="main_Img " style={{ marginTop: "40px" }}>
          <Link to="/allproducts">
            <img src="/Image/24.png" alt="" />
          </Link>
        </div>
        <div className="Review_Title_Container ">
          <h1>Client Reviews</h1>
          <p>
            We are very proud of the service we provide and stand by every
            product we carry. We work hard to address our client's needs and
            have them leave our spa loving their skin. That's why over 400
            people have given us a 5-star rating on Google!
          </p>
          <img src="/asessts/google-review.png" />
        </div>
        <div style={{ width: "100%", overflow: "hidden" }}>
          <Testimonials />
        </div>
        <Pictures />
      </main>
    </>
  );
};

export default ServicePage;
