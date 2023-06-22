import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import banner1 from "../Pictures/banner1.jpeg";
import banner2 from "../Pictures/banner2.jpeg";
import banner3 from "../Pictures/banner3.jpeg";
import banner4 from "../Pictures/banner4.jpeg";
import banner5 from "../Pictures/banner5.jpeg";

function CarouselComponent() {
  return (
    <div className="container-fluid w-100">
      <Carousel
        showArrows={true}
        animation="slide"
        infiniteLoop={true}
        showThumbs={false}
        autoPlay={true}
        interval={2000}
      >
        <div>
          <img
            src={banner1}
            style={{ width: "100%", height: "380px" }}
            alt=""
          />
        </div>
        <div>
          <img
            src={banner2}
            style={{ width: "100%", height: "380px" }}
            alt=""
          />
        </div>
        <div>
          <img
            src={banner3}
            style={{ width: "100%", height: "380px" }}
            alt=""
          />
        </div>
        <div>
          <img
            src={banner4}
            style={{ width: "100%", height: "380px" }}
            alt=""
          />
        </div>
        <div>
          <img
            src={banner5}
            style={{ width: "100%", height: "380px" }}
            alt=""
          />
        </div>
      </Carousel>
    </div>
  );
}

export default CarouselComponent;
