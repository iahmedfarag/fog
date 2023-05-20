import React from "react";
import { styled } from "styled-components";
import { AiOutlineSearch } from "react-icons/ai";

const Search = ({ isSearchOpen, setIsSearchOpen }) => {
  return (
    <Wrapper className={`flex ${isSearchOpen ? "active" : ""}`}>
      <input type="text" placeholder="Search.." />
      <select name="" id="">
        <option value="all">All Categories</option>
        <option value="all">Clothes</option>
        <option value="all">Electronics</option>
      </select>
      <button className="flex">
        <AiOutlineSearch />
      </button>
    </Wrapper>
  );
};
const Wrapper = styled.form`
  border-radius: 25px;
  background-color: var(--color-f7);

  input {
    border: none;
    outline: none;
    padding: 10px 15px;
    border-top-left-radius: 25px;
    border-end-start-radius: 25px;
    border-right: 1px solid var(--color-cf);
    background-color: inherit;
    font-size: 13px;
    color: var(--color-555);
    width: 350px;
  }
  select {
    border: none;
    padding: 10px 5px;
    outline: none;
    margin: 0 5px;
    background-color: inherit;
    color: var(--color-555);
    font-size: 13px;
  }
  button {
    font-size: 18px;
    padding: 10px 15px;
    border-top-right-radius: 25px;
    border-end-end-radius: 25px;
    border-left: 1px solid var(--color-cf);
    background-color: inherit;
  }
  @media (max-width: 1400px) {
    input {
      width: 300px;
    }
  }
  @media (max-width: 1200px) {
    input {
      width: 230px;
    }
  }

  @media (max-width: 992px) {
    /* display: none; */
    position: absolute;
    top: calc(50% + 40px);
    transform: translateY(-50%);
    right: 160px;
    border: 1px solid var(--color-main);
    display: none;
    &.active {
      display: flex;
    }
  }
`;
export default Search;
