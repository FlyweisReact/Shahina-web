/** @format */

import React, { useEffect, useState } from "react";
import ItemCard from "./ItemCard";
import ProductCard from "./ProductCard";
import {
  getAllBrands,
  getAllNutrition,
  getProductType,
  getSkinCondition,
  getSkinType,
} from "../../Repository/Api";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Pagination, Autoplay, Keyboard } from "swiper/modules";

export const SkinType = () => {
  const [response, setResponse] = useState([]);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 786);

  function fetchHandler() {
    getSkinType(setResponse);
  }
  useEffect(() => {
    fetchHandler();
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 786);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isMobile]);

  return (
    response && (
      <>
        <div className="SkinType_Container">
          {response?.map((item, i) => (
            <ItemCard
              key={i}
              src={item.image}
              styles={"w-80 h-80 text-4xl"}
              type={item.name}
              link={`/skinTypeId/${item._id}/${item.name}`}
            />
          ))}
        </div>
      </>
    )
  );
};

export const ProductType = () => {
  const [response, setResponse] = useState([]);

  useEffect(() => {
    getProductType(setResponse);
  }, []);

  const swiperConfig = {
    spaceBetween: 20,
    slidesPerView: 1,
    loop: true,
    autoplay: {
      delay: 1500,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },
    keyboard: {
      enabled: true,
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 5,
      },
    },
  };

  return (
    response && (
      <div className="SkinType_Container">
        <Swiper {...swiperConfig} modules={[Autoplay, Keyboard]}>
          {response?.map((item, i) => (
            <SwiperSlide key={i}>
              <ItemCard
                src={item.image}
                styles={"w-60 h-60"}
                baseType={item.name}
                link={`/productTypeId/${item._id}/${item.name}`}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        {response?.map((item, i) => (
          <ItemCard
            key={i}
            src={item.image}
            styles={"w-60 h-60"}
            baseType={item.name}
            link={`/productTypeId/${item._id}/${item.name}`}
          />
        ))}
      </div>
    )
  );
};

export const Brands = ({ isBrand }) => {
  const [response, setResponse] = useState([]);

  useEffect(() => {
    getAllBrands(setResponse);
  }, []);

  return (
    response && (
      <div
        className={`${
          isBrand
            ? "flex flex-shrink-0 justify-center px-10  gap-10"
            : "SkinType_Container"
        }`}
      >
        {response?.map((item, i) => (
          <ItemCard
            key={i}
            src={item.image}
            isBrand={isBrand}
            styles={`${
              isBrand ? "w-60 h-60 text-2xl text-center" : "isBrand_container"
            }`}
            link={`/brandId/${item._id}/${item.name}`}
            largeCardType={item.name}
          />
        ))}
      </div>
    )
  );
};

export const SkinConditions = () => {
  const [response, setResponse] = useState([]);

  useEffect(() => {
    getSkinCondition(setResponse);
  }, []);

  return (
    response && (
      <div className="SkinType_Container">
        {response?.map((item, i) => (
          <ItemCard
            key={i}
            src={item.image}
            styles={"w-60 h-60"}
            baseType={item.name}
            link={`/skinConditionId/${item._id}/${item.name}`}
          />
        ))}
      </div>
    )
  );
};

export const Nutrition = () => {
  const [response, setResponse] = useState([]);

  useEffect(() => {
    getAllNutrition(setResponse);
  }, []);

  return (
    response && (
      <div className="SkinType_Container ">
        {response?.map((item, i) => (
          <ItemCard
            key={i}
            src={item.image}
            styles={"w-60 h-60"}
            nutritionType={item.name}
            link={`/nutritionId/${item._id}/${item.name}`}
          />
        ))}
      </div>
    )
  );
};

export const Products = ({ data }) => {
  const swiperConfig = {
    spaceBetween: 20,
    slidesPerView: 1,
    loop: true,
    autoplay: {
      delay: 1500,
      disableOnInteraction: false,
    },
    keyboard: {
      enabled: true,
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 4,
      },
    },
  };
  return (
    data?.length > 0 && (
      <div style={{ overflow: "hidden", maxWidth: "1400px", margin: "auto" }}>
        <Swiper
          {...swiperConfig}
          pagination={true}
          modules={[Pagination, Autoplay, Keyboard]}
        >
          {data?.map((item) => (
            <SwiperSlide key={item._id}>
              <ProductCard
                id={item._id}
                src={item?.productImages?.[0]?.image}
                title={item.name}
                price={
                  item.multipleSize === false
                    ? item.price
                    : item.sizePrice?.[0]?.price
                }
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    )
  );
};
