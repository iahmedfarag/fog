import React from "react";
import { styled } from "styled-components";
import MainSlider from "../Home/MainSlider.jsx";
import SortProducts from "./Content/SortProducts";
import FilteredProducts from "./Content/FilteredProducts";
import ProductsControl from "./Content/ProductsControl";

const ShopContent = () => {
  return (
    <Wrapper>
      <MainSlider imgHeight={"300"} />

      <SortProducts />
      <FilteredProducts />
      <ProductsControl />
    </Wrapper>
  );
};
const Wrapper = styled.div`
  width: calc(75% - 10px);

  @media (max-width: 992px) {
    width: 100%;
  }
`;
export default ShopContent;
