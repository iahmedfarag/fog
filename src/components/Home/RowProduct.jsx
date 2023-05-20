import React from "react";
import { AiFillStar } from "react-icons/ai";
import { styled } from "styled-components";

const RowProduct = ({ img }) => {
  return (
    <Wrapper className="flex">
      <div className="img">
        <img src={img} alt="product-img" />
      </div>
      <div className="info">
        <a href="">Black Gret..</a>
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
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.article`
  gap: 10px;
  .img {
    img {
      width: 84px;
    }
  }
  .info {
    a {
      line-height: 1;
      font-size: 14px;
    }
    .rate {
      display: flex;
      /* gap: 2px; */
      margin: 1px 0;
      span {
        color: var(--color-555);
        font-size: 13px;
        margin: 2px 0;
      }
    }
    h4 {
      line-height: 1;
      font-size: 14px;
      font-weight: 600;
    }
  }
`;
export default RowProduct;
