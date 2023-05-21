import React from "react";
import { styled } from "styled-components";

const ResetButton = () => {
  return (
    <Wrapper>
      <button>Reset All Filters</button>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  padding: 20px 15px;
  border: 1px solid var(--color-cf);
  button {
    background-color: var(--color-main);
    color: white;
    padding: 10px 12px;
    font-weight: 600;
    width: fit-content;
  }
`;
export default ResetButton;
