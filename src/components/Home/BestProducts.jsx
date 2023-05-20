import React from "react";
import { styled } from "styled-components";
import img1 from "../../assets/Products/product10.jpg";
import img2 from "../../assets/Products/product11.jpg";
import img3 from "../../assets/Products/product12.jpg";
import RowProduct from "./RowProduct.jsx";

const BestProducts = () => {
  return (
    <Wrapper>
      <div className="top">
        <h4>TOP RATED PRODUCTS</h4>
        <div className="products">
          <RowProduct img1={img1} img2={img2} />
          <RowProduct img1={img2} img2={img1} />
          <RowProduct img1={img3} img2={img2} />
        </div>
      </div>
      <div className="best">
        <h4>TOP RATED PRODUCTS</h4>
        <div className="products">
          <RowProduct img1={img1} img2={img2} />
          <RowProduct img1={img2} img2={img1} />
          <RowProduct img1={img3} img2={img2} />
        </div>
      </div>
      <div className="latest">
        <h4>TOP RATED PRODUCTS</h4>
        <div className="products">
          <RowProduct img1={img1} img2={img2} />
          <RowProduct img1={img2} img2={img1} />
          <RowProduct img1={img3} img2={img2} />
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  padding: 25px 0;
  display: flex;
  gap: 20px;
  border-bottom: 1px solid var(--color-cf);

  > div {
    width: calc(100% / 3 - 40px / 3);

    h4 {
      margin-bottom: 10px;
    }
    .products {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }
  }
  @media (max-width: 768px) {
    flex-wrap: wrap;
    > div {
      width: calc(100%);
    }
  }
`;
export default BestProducts;
