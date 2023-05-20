import React from "react";
import Slider from "react-slick";
import { styled } from "styled-components";
import { BsQuote } from "react-icons/bs";
import img1 from "../../assets/product40.jpg";
const Quotes = () => {
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
          <div className="writter flex">
            <img src={img1} alt="" />
            <div>
              <h4>John Smith</h4>
              <p>CEO & FOUNDER</p>
            </div>
          </div>
          <div className="text">
            <span>
              <BsQuote />
            </span>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
              tempor provident eveniet ex.
            </p>
          </div>
        </article>
        <article>
          <div className="writter flex">
            <img src={img1} alt="" />
            <div>
              <h4>John Smith</h4>
              <p>CEO & FOUNDER</p>
            </div>
          </div>
          <div className="text">
            <span>
              <BsQuote />
            </span>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
              tempor provident eveniet ex.
            </p>
          </div>
        </article>
        <article>
          <div className="writter flex">
            <img src={img1} alt="" />
            <div>
              <h4>John Smith</h4>
              <p>CEO & FOUNDER</p>
            </div>
          </div>
          <div className="text">
            <span>
              <BsQuote />
            </span>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
              tempor provident eveniet ex.
            </p>
          </div>
        </article>
      </Slider>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  .slick-slider {
    position: relative;
    border: 2px solid var(--color-main);
    padding: 25px;
    padding-top: 25px;
    padding-bottom: 35px;

    .slick-list {
      margin: 0 -20px;
      .slick-slide {
        > div {
          margin: 0 20px;
        }
        article {
          .writter {
            gap: 7px;
            img {
              border-radius: 50%;
              width: 60px;
            }
            div {
              h4 {
                font-size: 16px;
                font-weight: 600;
              }
              p {
                font-size: 12px;
              }
            }
          }
        }
        .text {
          display: flex;
          gap: 5px;
          margin: 25px 0;
          span {
            font-size: 28px;
            line-height: 1;
          }
          p {
            font-size: 13px;
            color: var(--color-555);
          }
        }
      }
    }

    .slick-dots {
      position: absolute;
      bottom: 25px;
      /* left: 50px; */
      left: 55px;
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
export default Quotes;
