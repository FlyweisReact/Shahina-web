/** @format */

import React, { useEffect, useState } from "react";
import { Drawer } from "antd";
import { Link } from "react-router-dom";
import { getServiceProduct, getServiceProductAuth } from "../../Repository/Api";
import { useSelector } from "react-redux";
import { isAuthenticated } from "../../store/authSlice";

const ServiceDrawer = ({ open, onClose, title, id }) => {
  const [name, setName] = useState("");
  const [response, setResponse] = useState([]);
  const isLoggedIn = useSelector(isAuthenticated);

  const fetchHandler = () => {
    if (isLoggedIn) {
      getServiceProductAuth(setResponse, id, setName);
    } else {
      getServiceProduct(setResponse, id, setName);
    }
  };

  useEffect(() => {
    if (open === true) {
      fetchHandler();
    }
  }, [open]);

  const Heading = name ? name : title;

  console.log(response);


  let priceSection ;
  function priceFetcher (i) {
    if(i.multipleSize === true) {
      
    }

  }


  return (
    <Drawer
      placement="bottom"
      closable={false}
      onClose={onClose}
      open={open}
      size={"large"}
    >
      <div className="Service_Drawer">
        <div className="heading">
          <p> {`${Heading} Treatment`} </p>
          <img src="/Image/14.png" alt="" onClick={() => onClose()} />
        </div>

        <div className="product-container">
          {response?.length === 0 ? (
            <div className="Not-Found">
              <img src="/Image/no-results.png" alt="" />
              <h5> Sorry, we couldn't find any matching services</h5>
            </div>
          ) : (
            response?.map((i, index) => (
              <div className="Items" key={index}>
                <img src={i.images?.[0]?.img} alt="" className="thumbnail" />
                <p className="title"> {i.name} </p>
                {i.multipleSize === false ? (
                  <>
                    <span className="price-container">
                      <p className="member">Member Price</p>
                      <span
                        className="mrp"
                        style={{
                          fontSize: "16px",
                          color: "#000",
                          textDecoration: "none",
                        }}
                      >
                        Regular Price{" "}
                      </span>
                    </span>
                    <span className="price-container">
                      <p className="member-price">${i.mPrice} </p>
                      <span className="mrp">${i.price} </span>
                    </span>
                  </>
                ) : (
                  <>
                    <span className="price-container">
                      <p className="member">Member Price</p>
                      <span
                        className="mrp"
                        style={{
                          fontSize: "16px",
                          color: "#000",
                          textDecoration: "none",
                        }}
                      >
                        Regular Price{" "}
                      </span>
                    </span>
                    <span className="price-container">
                      <p className="member-price">
                        ${i.sizePrice?.[0]?.mPrice}{" "}
                      </p>
                      <span className="mrp">${i.sizePrice?.[0]?.price} </span>
                    </span>
                  </>
                )}

                <p className="interes">
                  Pay with interest free installments with Cherry
                </p>
                <Link to="/paymentplan">CLICK TO LEARN MORE</Link>

                <Link to={`/indi-services/${i._id}`}>
                  <button>VIEW MORE</button>
                </Link>
              </div>
            ))
          )}
        </div>
      </div>
    </Drawer>
  );
};

export default ServiceDrawer;
