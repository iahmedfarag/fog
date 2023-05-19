import React, { useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import { AiOutlineUser, AiOutlineHeart, AiOutlineSearch } from "react-icons/ai";
import { BsBag } from "react-icons/bs";
import { styled } from "styled-components";
import CartBox from "./CartBox.jsx";

const Account = ({ isSearchOpen, setIsSearchOpen }) => {
  return (
    <Wrapper className="account flex">
      <div className="search-icon">
        <button
          className="search-icon flex"
          onClick={() => {
            setIsSearchOpen(!isSearchOpen);
          }}
        >
          <div className="flex">
            <AiOutlineSearch />
          </div>
        </button>
      </div>
      <a href="" className="flex">
        <div className="flex">
          <AiOutlineUser />
        </div>
      </a>
      <a href="" className="flex">
        <div className="flex">
          <AiOutlineHeart />
          <span>0</span>
        </div>
      </a>
      <a href="" className="cart flex">
        <div className="cart-icon flex">
          <BsBag />
          <span>0</span>
        </div>
        <div className="flex angle">
          <FaAngleDown />
        </div>
      </a>
      <CartBox />
    </Wrapper>
  );
};
const Wrapper = styled.div`
  gap: 20px;
  position: relative;
  .search-icon {
    display: none;
    button {
      font-size: 28px;
    }
  }
  > a {
    font-size: 28px;
    color: var(--color-444);

    div {
      position: relative;
      &.angle {
        font-size: 16px;
        margin-left: 5px;
      }
      span {
        position: absolute;
        font-size: 12px;
        background-color: red;
        padding: 0 4px;
        color: white;
        border-radius: 50%;
        top: -3px;
        right: -5px;
      }
    }

    &.cart {
      &:hover {
        & ~ div {
          display: flex;
        }
      }
    }
  }
  @media (max-width: 992px) {
    .search-icon {
      display: block;
    }
  }
  @media (max-width: 576px) {
    .search-icon {
      display: none;
    }
  }
`;
export default Account;
