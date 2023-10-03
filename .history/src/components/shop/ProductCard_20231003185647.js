/** @format */

import React from "react";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ src, title, price, quantity }) => {
  const navigate = useNavigate();
  return (
    <div
      className="w-60 h-[26rem] text-center flex flex-col justify-between items-center"
      onClick={() => navigate("/product/dmkProducts")}
    >
      <div className="w-60 h-60 ">
        <img className="w-full h-full" src={src} alt="" />
      </div>
      <h4 className="text-xl font-normal">{title}</h4>
      {quantity && <p className="text-base font-normal">{quantity}</p>}
      <p className="text-2xl font-black text-primary">${price}</p>
    </div>
  );
};

export default ProductCard;
