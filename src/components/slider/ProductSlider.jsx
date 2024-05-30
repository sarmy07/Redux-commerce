import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { Button } from "react-bootstrap";

import img1 from "./images/img1.webp";
import img2 from "./images/img2.webp";
import img3 from "./images/img3.webp";

const ProductSlider = () => {
  const sliderItems = [
    {
      id: 1,
      caption: "All the Lastest Product In One Place",
      img: img1,
    },
    {
      id: 2,
      caption: "Grab the Lastest Product",
      img: img2,
    },
    {
      id: 3,
      caption: "Find All Your Needs In One Place",
      img: img3,
    },
  ];

  return (
    <div className="slider-container">
      <Carousel>
        {sliderItems?.map((item) => {
          return (
            <Carousel.Item key={item.id} className="slider-item">
              <img className="w-100 d-block" src={item.img} alt="" />
              <Carousel.Caption>
                <h1>{item.caption}</h1>
                <p>
                  A single place for all your products. Discover more products
                  on our products section
                </p>
                <Button>
                  <a href="" className="text-white text-decoration-none">
                    Discover More
                  </a>
                </Button>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </div>
  );
};

export default ProductSlider;
