import React from "react";
import { styled } from "styled-components";

const ProductsControl = () => {
  return (
    <Wrapper className="flex">
      <h5>Show: </h5>
      <select name="" id="">
        <option value="12">12</option>
        <option value="Default">Default</option>
        <option value="16">16</option>
        <option value="24">24</option>
      </select>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  padding-top: 25px;
  gap: 15px;
  h5 {
    color: var(--color-555);
  }
  select {
    padding: 8px 4px;
    border: 1px solid var(--color-cf);
    outline: none;
  }
`;
export default ProductsControl;
