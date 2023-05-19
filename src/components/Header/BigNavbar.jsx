import React, { useState } from "react";
import { styled } from "styled-components";
import Logo from "./BigNavbar/Logo.jsx";
import Search from "./BigNavbar/Search.jsx";
import Call from "./BigNavbar/Call.jsx";
import Account from "./BigNavbar/Account.jsx";

const BigNavbar = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <Wrapper className="container flex">
      <Logo />
      <Search isSearchOpen={isSearchOpen} setIsSearchOpen={setIsSearchOpen} />
      <Call />
      <Account isSearchOpen={isSearchOpen} setIsSearchOpen={setIsSearchOpen} />
    </Wrapper>
  );
};
const Wrapper = styled.div`
  padding-top: 25px;
  padding-bottom: 25px;
  justify-content: space-between;
  position: relative;
  @media (max-width: 992px) {
    padding-top: 30px;
    padding-bottom: 30px;
  }
`;
export default BigNavbar;
