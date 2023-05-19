import React from "react";
import logo from "../../../assets/product02.png";
import { styled } from "styled-components";
import { GiHamburgerMenu } from "react-icons/gi";
const Logo = () => {
  return (
    <Wrapper className="flex">
      <button>
        <GiHamburgerMenu />
      </button>
      <img src={logo} alt="logo" />
    </Wrapper>
  );
};
const Wrapper = styled.div`
  width: 111px;
  gap: 10px;
  button {
    font-size: 22px;
    display: none;
  }
  img {
    width: 100%;
  }
  @media (max-width: 992px) {
    button {
      display: block;
    }
  }
  @media (max-width: 768px) {
    width: 90px;
  }
  @media (max-width: 576px) {
    width: 80px;
  }
`;
export default Logo;
