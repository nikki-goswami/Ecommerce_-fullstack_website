"use client";

import React from "react";
import Slider from "react-slick";
import { HiCheckCircle } from "react-icons/hi";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Topcellphonecardslider() {
  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 1280,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 4,
          arrows: false,
        },
      },
    ],
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <Slider {...settings}>
        {[...Array(16)].map((_, index) => (
          <div key={index} className="px-2 h-full">
            <div className="bg-white rounded-xl p-4 shadow-sm h-full">

              <div className="flex items-center justify-between mb-3">
                <button className="px-2 py-1 w-20 bg-green-500 text-white rounded-2xl text-xs">
                  <p>save</p>
                  <h3>$59.00</h3>
                </button>
                <span className="w-8 h-8 rounded-full bg-[#E2E4EB] hidden sm:block" />
              </div>

              <img
                src="/prod26.svg"
                alt=""
                className="w-full h-40 object-contain mx-auto mb-2"
              />

              <span className="flex justify-center text-sm text-gray-500 mb-2">
                (8)
              </span>

              <h2 className="font-bold text-sm mb-2">
                SROK Smart Phone 128GB, Oled Retina
              </h2>

              <div className="mb-2">
                <span className="text-red-400 font-semibold mr-2">
                  $1,729.00
                </span>
                <span className="line-through text-gray-400">
                  $2,119.00
                </span>
              </div>

              <button className="px-3 py-1 bg-gray-50 text-green-500 rounded-xl text-xs mb-2">
                free shipping
              </button>

              <div className="flex items-center gap-2 text-sm">
                <HiCheckCircle className="text-green-600" />
                <p className="text-gray-400">Out of stock</p>
              </div>

            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
