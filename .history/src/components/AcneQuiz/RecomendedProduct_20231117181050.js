/** @format */

import React from "react";
import { Link, useNavigate } from "react-router-dom";

const RecomendedProduct = () => {
  const product = JSON.parse(localStorage.getItem("QuizProduct"));
  const navigate = useNavigate();

  const singleProduct = JSON.parse(localStorage.getItem("QuizSingleProduct"));
  const bundeledProduct = JSON.parse(
    localStorage.getItem("QuizBundeledProduct")
  );

  console.group("single", singleProduct);
  console.group("bundle", bundeledProduct);
  return (
    <div>
      <div className="Backward_Heading step_Heading">
        <div>
          <img src="/Image/1.png" alt="" onClick={() => navigate(-1)} />
        </div>
        <p className="title">Acne Quiz</p>
      </div>{" "}
      <div className="Recommended_Product">
        <h1 className="text-4xl font-medium text-center">
          Recommended Product
        </h1>
        {product?.name && (
          <>
            {" "}
            <div className="two_sec">
              <div className="w-[26rem] h-[30rem]">
                <img
                  className="w-full h-full object-contain"
                  src={product?.productImages?.[0]?.image}
                  alt=""
                />
              </div>
              <div
                className="flex  flex-col gap-14"
                style={{ padding: "20px" }}
              >
                <h1 className="text-4xl font-normal title">
                  {" "}
                  {product?.name}{" "}
                </h1>
                <p className="w-[29rem] text-xl content ">
                  {product?.description}
                </p>
              </div>
            </div>{" "}
            <div className="tow_links">
              <Link className="bg-primary py-6" to={`/product/${product?._id}`}>
                VIEW PRODUCT
              </Link>
              <Link
                style={{ color: "#042B26" }}
                to={"/"}
                className="border-2 py-6 text-primary border-primary"
              >
                GO BACK TO HOME PAGE
              </Link>
            </div>
          </>
        )}

        {product?.products && (
          <>
            <div className="two_sec">
              <div className="w-[26rem] h-[30rem]">
                <img
                  className="w-full h-full object-contain"
                  src={product?.productImages?.[0]?.image}
                  alt=""
                />
              </div>
              <div
                className="flex  flex-col gap-14"
                style={{ padding: "20px" }}
              >
                <h1 className="text-4xl font-normal title">
                  {" "}
                  ${product?.price}{" "}
                </h1>
                <p className="w-[29rem] text-xl content ">
                  {product?.description}
                </p>
              </div>
            </div>{" "}
            <div className="tow_links">
              <Link
                style={{ color: "#042B26" }}
                to={"/"}
                className="border-2 py-6 text-primary border-primary"
              >
                GO BACK TO HOME PAGE
              </Link>
            </div>
          </>
        )}

        <div className="frequently-bought">
          <p className="title">Frequently Bought Together</p>
          <div className="container">
            <div className="left">
              {bundeledProduct?.products?.map((i, index) => (
                <>
                  <img
                    src={i.productImages?.[0]?.image}
                    className="Image"
                    alt=""
                    key={`Product_Image_Carousel_Images${index}`}
                  />
                  <img
                    src="/Image/96.png"
                    key={`Product_Image_Carousel_Images_Img${index}`}
                    className="plus"
                    alt=""
                  />
                </>
              ))}
            </div>
            <div className="right">
              <p className="heading">TOTAL PRICE</p>
              <p className="price">  </p>
              <button >
                ADD SELECTED TO CART
              </button>
            </div>
          </div>

          <div className="list">
              <div className="Item" key={`Related_Product`}>
                <img src="/Image/97.png" alt="" />
                <p className="head"> </p>
                <p className="price">
                </p>
              </div>
     
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecomendedProduct;