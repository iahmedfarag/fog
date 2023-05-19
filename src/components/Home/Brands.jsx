import React from "react";
import { styled } from "styled-components";
import img1 from "../../assets/Brands/product17.png";
import img2 from "../../assets/Brands/product18.png";
import img3 from "../../assets/Brands/product19.png";
import img4 from "../../assets/Brands/product20.png";
import img5 from "../../assets/Brands/product22.png";
import Slider from "react-slick";
const Brands = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };
  return (
    <Wrapper>
      <Slider {...settings}>
        <img src={img1} alt="" />
        <img src={img2} alt="" />
        <img src={img3} alt="" />
        <img src={img4} alt="" />
        <img src={img5} alt="" />
      </Slider>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  padding: 25px 0;
  border-bottom: 1px solid var(--color-cf);
  .slick-slider {
    .slick-dots {
      display: none !important;
    }

    .slick-arrow {
      display: none !important;
    }

    .slick-list {
      margin: 0 -20px;
      .slick-track {
        .slick-slide {
          > div {
            margin: 0 20px;
            max-width: 140px;
          }
        }
      }
    }
  }
`;
export default Brands;
