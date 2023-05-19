import React from "react";
import { BsTelephone } from "react-icons/bs";
import { styled } from "styled-components";

const Call = () => {
  return (
    <Wrapper className="flex">
      <BsTelephone />
      <div className="">
        <p>CALL US NOW</p>
        <span>+1069858429</span>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  gap: 10px;
  svg {
    font-size: 30px;
    color: var(--color-444);
  }
  div {
    p {
      font-size: 11px;
      /* margin-bottom: -6px; */
      color: var(--color-555);
    }
    span {
      font-size: 18px;
      font-weight: 800;
    }
  }
  @media (max-width: 992px) {
    display: none;
  }
`;
export default Call;
