import React from "react";
import { AiFillStar } from "react-icons/ai";
import { styled } from "styled-components";
import { Link } from "react-router-dom";

const RowProduct = ({ img1, img2, sidebar }) => {
  return (
    <Wrapper className="flex">
      <Link to={`/product/1}`} className="img">
        <img src={img1} alt="product-img" className="img1" />
        <img src={img2} alt="product-img" className="img2" />
      </Link>
      <div className="info">
        <Link to={`/product/1}`}>Black Gret..</Link>
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
          $88.00
          {!sidebar ? (
            <>
              <span> - </span>$99.00
            </>
          ) : (
            ""
          )}
        </h4>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.article`
  gap: 10px;
  .img {
    position: relative;
    width: 84px;
    height: 84px;
    &:hover {
      .img2 {
        opacity: 1;
      }
    }
    img {
      width: 100%;
      object-fit: cover;
      /* width: 84px; */
    }
    .img1 {
    }
    .img2 {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      opacity: 0;
      transition: 0.5s;
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
