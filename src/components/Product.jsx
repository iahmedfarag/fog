import React from "react";
import { AiOutlineHeart, AiFillStar } from "react-icons/ai";
import { MdOutlineShoppingBag } from "react-icons/md";
import { styled } from "styled-components";

const Product = ({ img }) => {
  return (
    <Wrapper className="product">
      <div className="img">
        <img src={img} alt="product-image" />
        <div className="overlay">
          <div className="content">
            <button className="addToCart flex">
              <MdOutlineShoppingBag />
            </button>
            <button className="more">MORE DETAILS</button>
          </div>
        </div>
      </div>
      <div className="info">
        <div className="categories">
          <a href="">cam</a>, <a href="">headphone</a>
        </div>
        <a href="">Black Gret Headset</a>
        <div className="rate flex">
          <span>
            <AiFillStar />
          </span>
          <span>
            <AiFillStar />
          </span>
          <span>
            <AiFillStar />
          </span>
          <span>
            <AiFillStar />
          </span>
        </div>
        <h4>
          $88.00<span> - </span>$99.00
        </h4>
        <button>
          <AiOutlineHeart />
        </button>
      </div>
      <div className="status">
        <span className="hot">HOT</span>
        <span className="sale">SALE</span>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.article`
  position: relative;
  width: 100%;
  &:hover {
    .img {
      .overlay {
        opacity: 1;
      }
    }
  }
  .img {
    position: relative;
    .overlay {
      opacity: 0;
      transition: 0.2s;
      position: absolute;
      top: 0;
      left: 0;
      z-index: 2;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.2);
      .content {
        button {
          position: absolute;
        }
        .addToCart {
          padding: 8px;
          border-radius: 50%;
          background-color: white;
          top: 10px;
          right: 10px;
          transition: 0.2s;
          font-size: 18px;
          &:hover {
            background-color: var(--color-main);
            color: white;
          }
        }
        .more {
          background-color: #0088ccb5;
          color: white;
          left: 0;
          /* top: 100px; */
          bottom: 0px;
          width: 100%;
          text-align: center;
          padding: 12px;
          font-size: 12px;
        }
      }
    }
  }
  .info {
    position: relative;
    padding: 10px 0;
    .categories {
      line-height: 1;

      a {
        font-size: 12px;
        text-transform: uppercase;
        &:hover {
          color: var(--color-main);
        }
      }
    }
    > a {
      font-size: 14px;
    }
    .rate {
      margin: 3px 0;
      gap: 2px;
      span {
        color: var(--color-555);
        font-size: 14px;
      }
    }
    > h4 {
      font-size: 18px;
      font-weight: 600;
      margin: 0;
      padding: 0;
      line-height: 1;
    }
    button {
      position: absolute;
      top: 10px;
      right: 0px;
      font-size: 18px;
      color: var(--color-555);
      z-index: 4;
    }
  }
  .status {
    position: absolute;
    top: 5px;
    left: 5px;
    display: flex;
    flex-direction: column;
    gap: 5px;
    span {
      padding: 1px 10px;
      font-size: 10px;
      color: white;
      &.hot {
        background-color: var(--color-green);
      }
      &.sale {
        background-color: var(--color-tomatto);
      }
    }
  }
`;
export default Product;
