import React from "react";
import Slider from "react-slick";
import { styled } from "styled-components";
import { BsQuote } from "react-icons/bs";
import img1 from "../../assets/product41.jpg";
const Trends = () => {
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
        <article>
          <div className="img">
            <img src={img1} alt="" />
          </div>
          <div className="text">
            <h4>Post Format Video</h4>
            <p>
              Lorem ipsum dolor sit amet contur adipisicing elit. Id, corrupti
              repellat officia atque deleniti!
            </p>
            <span>No Comment</span>
          </div>
        </article>
        <article>
          <div className="img">
            <img src={img1} alt="" />
          </div>
          <div className="text">
            <h4>Post Format Video</h4>
            <p>
              Lorem ipsum dolor sit amet contur adipisicing elit. Id, corrupti
              repellat officia atque deleniti!
            </p>
            <span>No Comment</span>
          </div>
        </article>
        <article>
          <div className="img">
            <img src={img1} alt="" />
          </div>
          <div className="text">
            <h4>Post Format Video</h4>
            <p>
              Lorem ipsum dolor sit amet contur adipisicing elit. Id, corrupti
              repellat officia atque repellat officia atque deleniti!
            </p>
            <span>No Comment</span>
          </div>
        </article>
      </Slider>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  .slick-slider {
    position: relative;
    /* border: 2px solid var(--color-main); */
    padding-top: 25px;
    padding-bottom: 55px;

    .slick-list {
      margin: 0 -20px;
      .slick-slide {
        > div {
          margin: 0 20px;
        }
        article {
          .img {
            margin-bottom: 10px;
            img {
              width: 100%;
            }
          }
          h4 {
            margin-bottom: 10px 0;
          }
          p {
            font-size: 13px;
            color: var(--color-555);
          }
          span {
            font-size: 11px;
            color: var(--color-555);
          }
        }
      }
    }

    .slick-dots {
      position: absolute;
      bottom: 25px;
      /* left: 50px; */
      left: 0px;
      /* transform: translateX(-50%); */
      width: fit-content;
      height: fit-content;
      /* display: none !important; */
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
  }
`;
export default Trends;
