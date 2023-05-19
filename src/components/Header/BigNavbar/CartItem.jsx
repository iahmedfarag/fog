import React from "react";
import { styled } from "styled-components";
import product from "../../../assets/Products/product10.jpg";
import { AiOutlineClose } from "react-icons/ai";

const CartItem = () => {
  return (
    <Wrapper className="flex">
      <div className="info">
        <a href="">Battery Charger</a>
        <p>
          1 x <span>$259.00</span>
        </p>
      </div>
      <div className="img">
        <a href="">
          <img src={product} alt="product" style={{ width: "60px" }} />
        </a>
        <span className="flex">
          <AiOutlineClose />
        </span>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  justify-content: space-between;
  .info {
    a {
      font-weight: bold;
      font-size: 14px;
    }
    p {
      margin-top: 5px;
      font-size: 14px;
      color: gray;
      span {
      }
    }
  }
  .img {
    position: relative;

    span {
      position: absolute;
      top: -10px;
      right: -15px;
      background-color: white;
      box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
      border-radius: 50%;
      padding: 3px;
      font-size: 14px;
      cursor: pointer;
      &:hover {
        color: red;
      }
    }
  }
`;
export default CartItem;
