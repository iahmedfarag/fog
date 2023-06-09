import React from "react";
import Slider from "react-slick";
import img1 from "../../assets/MainSlider/product04.webp";
import img2 from "../../assets/MainSlider/product05.jpg";
import img3 from "../../assets/MainSlider/product06.jpg";
import { styled } from "styled-components";
import { Link } from "react-router-dom";
const MainSlider = ({ imgHeight }) => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Wrapper>
      <Slider {...settings}>
        <div>
          <img src={img1} alt="" height={imgHeight ? imgHeight : 489} />
          <div className="content">
            <h4>OVER 200 PRODUCTS WITH DISCOUNTS</h4>
            <h2>GREAT DEALS</h2>

            <div>
              <h3>STARTING AT</h3>
              <p>
                <span>
                  <span>$</span>
                  199
                  <span>99</span>
                </span>
              </p>
              <Link to={"/shop"}>GET YOURS!</Link>
            </div>
          </div>
        </div>

        <div>
          <img src={img2} alt="" height={imgHeight ? imgHeight : 489} />
          <div className="content">
            <h4>OVER 200 PRODUCTS WITH DISCOUNTS</h4>
            <h2>GREAT DEALS</h2>
            <div>
              <h3>STARTING AT</h3>
              <p>
                <span>
                  <span>$</span>
                  199
                  <span>99</span>
                </span>
              </p>
              <Link to={"/shop"}>GET YOURS!</Link>
            </div>
          </div>
        </div>

        <div>
          <img src={img3} alt="" height={imgHeight ? imgHeight : 489} />
          <div className="content">
            <h4>OVER 200 PRODUCTS WITH DISCOUNTS</h4>
            <h2>GREAT DEALS</h2>
            <div>
              <h3>STARTING AT</h3>
              <p>
                <span>
                  <span>$</span>
                  199
                  <span>99</span>
                </span>
              </p>
              <Link to={"/shop"}>GET YOURS!</Link>
            </div>
          </div>
        </div>
      </Slider>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  .slick-slider {
    position: relative;
    /* overflow: hidden; */

    img {
      width: 100%;
      /* height: 489px !important; */
      object-fit: cover;
      background-size: cover;
    }
    .slick-dots {
      /* background-color: red !important; */
      position: absolute;
      /* left: 0; */
      bottom: 50px;
      left: 50px;
      width: fit-content;
      height: fit-content;

      /* margin: 0; */
      li {
        border-radius: 50%;
        border: 1px solid black;
        /* font-size: 20px; */
        width: 15px;
        height: 15px;
        margin: 0 3px;
        button {
          &::before {
            width: 15px;
            height: 15px;
            line-height: 15px;
            left: -1px;
            opacity: 0;
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
    .slick-list {
      .slick-slide {
        /* position: relative; */
        /* height: 489px; */
        &:first-child {
          .content {
            h4 {
              color: var(--color-off-white);
              font-style: italic;
            }
            h2 {
              color: var(--color-cf);
            }
            div {
              gap: 10px;

              h3 {
                color: var(--color-cf);
                font-size: 12px;
              }
              p {
                color: var(--color-cf);
                background-color: var(--color-tomatto);
                padding: 0 25px;
                font-weight: bold;
                span {
                  position: relative;
                  font-size: 18px;
                  span {
                    position: absolute;
                    font-size: 12px;
                    position: absolute;
                    top: 50%;
                    transform: translateY(-50%);
                    &:first-child {
                      left: -9px;
                    }
                    &:last-child {
                      right: -16px;
                    }
                  }
                }
              }
            }
          }
        }
        .content {
          position: absolute;
          top: 50%;
          margin-left: 50px;
          transform: translateY(-50%);
          h4 {
            color: var(--color-555);
          }
          h2 {
            font-size: 40px;
          }
          div {
            margin-top: 10px;
            display: flex;
            align-items: flex-start;
            gap: 30px;
            h3 {
              font-size: 16px;
            }
            p {
              font-weight: bold;
              font-size: 18px;
              /* padding: 0 5px; */
              padding-right: 5px;
              span {
                position: relative;
                span {
                  font-size: 12px;
                  position: absolute;
                  top: 50%;
                  transform: translateY(-50%);
                  &:first-child {
                    left: -10px;
                  }
                  &:last-child {
                    right: -15px;
                  }
                }
              }
            }
            a {
              background-color: black;
              color: white;
              padding: 8px 15px;
              font-size: 14px;
              font-weight: bold;
              &:hover {
                opacity: 0.8;
              }
            }
          }
        }
      }
    }
    .slick-arrow {
      display: none !important;
    }
  }
  @media (max-width: 992px) {
    .slick-slider {
      .slick-dots {
        left: 25px;
      }
      .slick-list {
        .slick-slide {
          .content {
            margin-left: 25px;
          }
        }
      }
    }
  }
  @media (max-width: 576px) {
    .slick-slider {
      .slick-list {
        .slick-slide {
          &:first-child {
            /* .content {
              width: 200px;
              h4 {
                color: var(--color-off-white);
                font-style: italic;

                font-size: 12px;
                margin-bottom: 5px;
              }
              h2 {
                color: var(--color-cf);
                font-size: 20px;
                line-height: 1;
                span {
                  font-size: 30px;
                  line-height: 1;
                }
              }
              div {
              }
            } */
          }
          .content {
            h4 {
              font-size: 14px;
            }
            h2 {
              font-size: 35px;
            }
            div {
              a {
                padding: 8px 10px;
              }
            }
          }
        }
      }
    }
  }
`;
export default MainSlider;
