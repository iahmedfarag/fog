import React from "react";
import { styled } from "styled-components";
import CategoriesFilter from "./Sidebar/CategoriesFilter";
import PriceFilter from "./Sidebar/PriceFilter";
import ColorsFilter from "./Sidebar/ColorsFilter";
import SizesFilters from "./Sidebar/SizesFilters";
import FeaturesProductsSidebar from "./Sidebar/FeaturesProductsSidebar";

const ShopSidebar = ({ isOpen }) => {
  return (
    <Wrapper className={`${isOpen && "active"}`}>
      <CategoriesFilter />
      <PriceFilter />
      <ColorsFilter />
      <SizesFilters />
      <FeaturesProductsSidebar />
    </Wrapper>
  );
};
const Wrapper = styled.aside`
  width: calc(25% - 10px);
  display: flex;
  flex-direction: column;
  gap: 20px;
  /* > section {
    padding-bottom: 20px;
    border-bottom: 1px solid var(--color-cf);
  } */
  @media (max-width: 992px) {
    position: fixed;
    width: 270px;
    height: 100vh;
    overflow-y: scroll;
    padding: 15px;
    top: 0;
    z-index: 559;
    background-color: white;
    left: -300px;
    transition: 0.3s;
    &.active {
      left: 0;
    }
  }
`;
export default ShopSidebar;
