import React, { useEffect, useRef, useState } from "react";
import { styled } from "styled-components";
import {
  AiOutlineMinus,
  AiOutlinePlus,
  AiOutlineArrowDown,
  AiOutlineArrowUp,
} from "react-icons/ai";
const SizesFilters = () => {
  const [isOpen, setIsOpen] = useState(false);
  const cats = useRef(null);

  // console.log(cats);

  const catsStyles = {
    maxHeight: isOpen ? `${cats.current.scrollHeight + 15 + "px"}` : "0px",
    paddingTop: isOpen ? `15px` : "0",
  };

  useEffect(() => {
    setIsOpen(true);
  }, []);
  return (
    <Wrapper>
      <header className="flex">
        <h4>SIZES</h4>
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
        <button>XL</button>
        <button>L</button>
        <button>M</button>
        <button>S</button>
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
    gap: 10px;
    overflow: hidden;
    transition: 0.3s;
    button {
      width: 30px;
      height: 30px;
      border: 1px solid var(--color-cf);
      font-size: 12px;
      color: var(--color-555);
      transition: 0.1s;
      &:hover {
        background-color: var(--color-main);
        color: white;
      }
    }
  }
`;
export default SizesFilters;
