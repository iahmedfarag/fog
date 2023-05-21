import React, { useRef, useState } from "react";
import { styled } from "styled-components";
import {
  AiOutlineMinus,
  AiOutlinePlus,
  AiOutlineArrowDown,
  AiOutlineArrowUp,
} from "react-icons/ai";
const CategoriesFilter = () => {
  const [isOpen, setIsOpen] = useState(true);
  const cats = useRef(null);

  const handleCats = (e) => {
    console.log(cats.current.clientHeight);
    setIsOpen(!isOpen);

    if (isOpen) {
      cats.current.style.maxHeight = 0;
    } else {
      cats.current.style.maxHeight = cats.current.clientHeight + "px";
    }
  };

  return (
    <Wrapper>
      <header className="flex">
        <h4>CATEGORIES</h4>
        <button
          className="flex"
          onClick={() => {
            handleCats();
          }}
        >
          <AiOutlineMinus />
        </button>
      </header>
      <div ref={cats}>
        <button>Cloth (5)</button>
        <button>Electronics (5)</button>
        <button>Cloth (5)</button>
        <button>Watches (5)</button>
        <button>Cloth (5)</button>
        <button>Accessories (5)</button>
        <button>Furniture (5)</button>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  header {
    justify-content: space-between;
    margin-bottom: 10px;
    button {
      font-size: 16px;
    }
    h4 {
      font-size: 15px;
      font-weight: 600;
    }
  }
  > div {
    display: flex;
    flex-direction: column;
    gap: 10px;
    overflow: hidden;
    transition: 0.5s;
    button {
      font-size: 15px;
      font-weight: 500;
      text-align: left;
      &:hover {
        color: var(--color-main);
      }
    }
  }
`;
export default CategoriesFilter;
