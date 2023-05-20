import React from "react";
import { styled } from "styled-components";
import Categories from "./Categories.jsx";
import Sale from "./Sale.jsx";
import News from "./News.jsx";
import Quotes from "./Quotes.jsx";
import Trends from "./Trends.jsx";

const Sidebar = ({ isOpen }) => {
  return (
    <Wrapper className={`${isOpen && "active"}`}>
      <Categories />
      <Sale />
      <News />
      <Quotes />
      <Trends />
    </Wrapper>
  );
};
const Wrapper = styled.aside`
  width: calc(25% - 10px);

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
export default Sidebar;
