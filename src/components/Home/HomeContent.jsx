import React from "react";
import { styled } from "styled-components";
import MainSlider from "./MainSlider.jsx";
import MainCategories from "./MainCategories.jsx";
import FeaturedProducts from "./FeaturedProducts.jsx";
import Brands from "./Brands.jsx";
import BestProducts from "./BestProducts.jsx";
import MoreFeatures from "./MoreFeatures.jsx";

const HomeContent = () => {
  return (
    <Wrapper>
      <MainSlider />
      <MainCategories />
      <FeaturedProducts />
      <Brands />
      <BestProducts />
      <MoreFeatures />
    </Wrapper>
  );
};
const Wrapper = styled.div`
  width: calc(75% - 10px);
  /* align-self: flex-start; */

  @media (max-width: 992px) {
    width: 100%;
  }
`;
export default HomeContent;
