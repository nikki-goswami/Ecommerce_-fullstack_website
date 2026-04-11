'use client'

import React from 'react'
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Mainslider() {
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
                src="/main.png"
                alt="main"
                className="w-full h-auto"
              />
            </div>

            {/* Example second slide */}
            <div>
              <img
                src="/main.png"
                alt="main"
                className="w-full h-auto"
              />
            </div>
          </Slider>
  )
}
