import React from "react";
import { styled } from "styled-components";
import img1 from "../../assets/Products/product15.jpg";
import img2 from "../../assets/Products/product10.jpg";
import Slider from "react-slick";
import Product from "../Product.jsx";
const FeaturedProducts = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
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
      <div className="wrapper">
        <header>
          <h4>FEATURED PRODUCTS</h4>
        </header>
        <div className="slider">
          <Slider {...settings}>
            <Product img={img1} />
            <Product img={img2} />
            <Product img={img1} />
            <Product img={img2} />
            <Product img={img1} />
          </Slider>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  padding: 20px 0;
  padding-bottom: 30px;
  border-bottom: 1px solid var(--color-cf);
  header {
    border-bottom: 1px solid var(--color-cf);
    padding-bottom: 5px;
    margin-bottom: 25px;
  }
  .slider {
    img {
      max-width: 100%;
    }
    .slick-slider {
      .slick-dots {
        position: absolute;
        top: -55px;
        right: 0px;
        width: fit-content;
        height: fit-content;
        li {
          border-radius: 50%;
          border: 1px solid var(--color-off-white);
          width: 15px;
          height: 15px;
          margin: 0 3px;
          &.slick-active {
            border: 1px solid var(--color-main);
          }
          button {
            &::before {
              width: 15px;
              height: 15px;
              line-height: 15px;
              left: 0px;
              opacity: 0;
              color: var(--color-main);
            }
          }
          &.slick-active {
            button {
              &::before {
                opacity: 1;
              }
            }
          }
        }
      }

      .slick-arrow {
        display: none !important;
      }

      .slick-list {
        margin: 0 -10px;
        .slick-track {
          .slick-slide {
            > div {
              margin: 0 10px;
            }
          }
        }
      }
    }
  }
`;
export default FeaturedProducts;
