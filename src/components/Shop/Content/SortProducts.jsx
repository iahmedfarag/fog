import React from "react";
import { styled } from "styled-components";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import { FaListUl } from "react-icons/fa";
const SortProducts = () => {
  return (
    <Wrapper className="flex">
      <div className="flex">
        <h5>Sort By:</h5>
        <select name="" id="">
          <option value="DEFAULT SORTING">DEFAULT SORTING</option>
          <option value="DEFAULT SORTING">DEFAULT SORTING</option>
          <option value="DEFAULT SORTING">DEFAULT SORTING</option>
          <option value="DEFAULT SORTING">DEFAULT SORTING</option>
          <option value="DEFAULT SORTING">DEFAULT SORTING</option>
        </select>
      </div>
      <div className="flex right">
        <div className="flex control">
          <h5>Show: </h5>
          <select name="" id="">
            <option value="DEFAULT">DEFAULT</option>
            <option value="12">12</option>
            <option value="24">24</option>
          </select>
        </div>
        <div className="style flex">
          <button className="flex active">
            <BsFillGrid3X3GapFill />
          </button>
          <button className="flex">
            <FaListUl />
          </button>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  margin: 20px 0;
  padding: 5px;
  /* background-color: var(--color-cf); */
  color: var(--color-555);
  justify-content: space-between;
  select {
    padding: 10px 5px;
    font-size: 11px;
    font-weight: bold;
    border: none;
    outline: none;
    border: 1px solid var(--color-cf);
  }
  > div {
    gap: 10px;
  }
  .right {
    .control {
      gap: 10px;
    }
    .style {
      gap: 5px;
      button {
        font-size: 18px;
        &.active {
          color: var(--color-main);
        }
      }
    }
  }
  @media (max-width: 992px) {
    background-color: var(--color-cf);
  }

  @media (max-width: 576px) {
    h5 {
      display: none;
    }
    .style {
      display: none;
    }
  }
`;
export default SortProducts;
