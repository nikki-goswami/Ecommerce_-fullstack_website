"use client";

import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Homeslider() {

     const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
          <Slider {...settings}>
            <div>
              <img
                src="/Tabpanel.svg"
                alt="Tab Panel"
                className="object-cover"
              />
            </div>

            {/* Example second slide */}
            <div>
              <img
                src="/Tabpanel.svg"
                alt="Tab Panel"
                className="object-cover"
              />
            </div>
          </Slider>


  )
}
