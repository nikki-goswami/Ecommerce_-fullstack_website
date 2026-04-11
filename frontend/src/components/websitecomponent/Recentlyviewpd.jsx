"use client";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Recentlyviewpd() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,     // desktop
    slidesToScroll: 1,
    arrows: true,

    responsive: [
      {
        breakpoint: 1024, // tablet landscape
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, // tablet
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480, // mobile
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      {[1, 2, 3, 4, 5, 6].map((item) => (
        <div key={item} className="p-4">
          <div className="py-5 px-5 relative bg-white rounded-lg shadow">

            <span className="absolute top-3 left-3 bg-black text-white text-xs px-2 py-1 rounded">
              NEW
            </span>

            <span className="w-5 h-5 bg-gray-400 rounded-full absolute top-3 right-3"></span>

            <div className="flex gap-3">
              <img
                src="/prod58.svg"
                alt="product"
                className="w-20 h-20 object-cover"
              />

              <div className="text-sm font-medium">
                <span className="text-[#666666]">(152)</span>
                <p>Xomie Remid 8 Sport</p>
                <p>Water Resistance Watch</p>
                <p className="font-semibold">$579.00</p>
              </div>
            </div>

          </div>
        </div>
      ))}
    </Slider>
  );
}
