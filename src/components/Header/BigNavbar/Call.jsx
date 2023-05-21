import React from "react";
import { BsTelephone } from "react-icons/bs";
import { styled } from "styled-components";

const Call = () => {
  return (
    <Wrapper className="flex">
      <span>
        <BsTelephone />
      </span>
      <div className="">
        <p>CALL US NOW</p>
        <span>+10 69 85 84 29</span>
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
      line-height: 1;
      /* margin-bottom: -6px; */
      color: var(--color-555);
    }
    span {
      font-size: 17px;
      font-weight: 700;
      line-height: 1;
    }
  }
  @media (max-width: 992px) {
    display: none;
  }
`;
export default Call;
