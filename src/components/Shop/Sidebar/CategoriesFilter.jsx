import React, { useEffect, useRef, useState } from "react";
import { styled } from "styled-components";
import {
  AiOutlineMinus,
  AiOutlinePlus,
  AiOutlineArrowDown,
  AiOutlineArrowUp,
} from "react-icons/ai";
const CategoriesFilter = () => {
  const [isOpen, setIsOpen] = useState(false);
  const cats = useRef(null);

  // console.log(cats);

  const catsStyles = {
    maxHeight: isOpen ? `${cats.current.scrollHeight + 10 + "px"}` : "0px",
    paddingTop: isOpen ? `10px` : "0",
  };

  useEffect(() => {
    setIsOpen(true);
  }, []);
  return (
    <Wrapper>
      <header className="flex">
        <h4>CATEGORIES</h4>
        <button
          className="flex"
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          {isOpen ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      <div ref={cats} style={catsStyles}>
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
  border: 1px solid var(--color-cf);
  padding: 20px 15px;
  header {
    justify-content: space-between;
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
    transition: 0.3s;

    /* max-height: 0; */
    /* padding-top: 10px; */
    button {
      font-size: 15px;
      font-weight: 500;
      text-align: left;
      color: var(--color-555);
      &:hover {
        color: var(--color-main);
      }
    }
  }
`;
export default CategoriesFilter;
