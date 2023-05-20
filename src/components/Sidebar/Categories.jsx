import React from "react";
import { styled } from "styled-components";
import { MdOutlineCategory } from "react-icons/md";
const Categories = () => {
  return (
    <Wrapper>
      <a href="" className="flex">
        <MdOutlineCategory />
        Fashion
      </a>
      <a href="" className="flex">
        <MdOutlineCategory />
        Electronics
      </a>
      <a href="" className="flex">
        <MdOutlineCategory />
        Gifts
      </a>
      <a href="" className="flex">
        <MdOutlineCategory />
        Sports
      </a>
      <a href="" className="flex">
        <MdOutlineCategory />
        Fashion
      </a>
      <a href="" className="flex">
        <MdOutlineCategory />
        Electronics
      </a>
      <a href="" className="flex">
        <MdOutlineCategory />
        Gifts
      </a>
      <a href="" className="flex">
        <MdOutlineCategory />
        Sports
      </a>
      <a href="" className="flex">
        <MdOutlineCategory />
        Fashion
      </a>
      <a href="" className="flex">
        <MdOutlineCategory />
        Electronics
      </a>
      <a href="" className="flex">
        <MdOutlineCategory />
        Gifts
      </a>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  margin-bottom: 25px;
  a {
    width: 100%;
    border: 1px solid var(--color-cf);
    padding: 10.8px;
    gap: 10px;
    font-size: 14px;
    font-weight: 600;
    &:hover {
      background-color: #f1f1f1;
    }
  }
`;
export default Categories;
