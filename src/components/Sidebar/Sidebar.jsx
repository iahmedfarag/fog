import React from "react";
import { styled } from "styled-components";
import Categories from "./Categories.jsx";
import Sale from "./Sale.jsx";
import News from "./News.jsx";
import Quotes from "./Quotes.jsx";
import Trends from "./Trends.jsx";

const Sidebar = () => {
  return (
    <Wrapper>
      <Categories />
      <Sale />
      <News />
      <Quotes />
      <Trends />
    </Wrapper>
  );
};
const Wrapper = styled.aside`
  /* background-color: bisque; */
  width: calc(25% - 10px);
  /* min-height: 900px; */

  @media (max-width: 992px) {
    width: 0;
    overflow: hidden;
    display: none;
  }
`;
export default Sidebar;
