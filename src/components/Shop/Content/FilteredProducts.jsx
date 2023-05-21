import React from "react";
import Product from "../../Product.jsx";
import img1 from "../../../assets/Products/product11.jpg";
import img2 from "../../../assets/Products/product12.jpg";
import { styled } from "styled-components";
const FilteredProducts = () => {
  return (
    <Wrapper>
      <Product img1={img1} img2={img2} />
      <Product img1={img1} img2={img2} />
      <Product img1={img1} img2={img2} />
      <Product img1={img1} img2={img2} />
    </Wrapper>
  );
};
const Wrapper = styled.section`
  padding-bottom: 50px;
  border-bottom: 1px solid var(--color-cf);
  display: flex;
  flex-wrap: wrap;
  overflow: hidden;
  gap: 20px;
  article {
    width: calc(100% / 3 - 40px / 3);
  }
  @media (max-width: 1200px) {
    article {
      width: calc(100% / 2 - 20px / 2);
    }
  }
  @media (max-width: 992px) {
  }
  @media (max-width: 768px) {
  }
  @media (max-width: 576px) {
  }
`;
export default FilteredProducts;
