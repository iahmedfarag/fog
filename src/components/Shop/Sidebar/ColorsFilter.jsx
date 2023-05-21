import React, { useEffect, useRef, useState } from "react";
import { styled } from "styled-components";
import {
  AiOutlineMinus,
  AiOutlinePlus,
  AiOutlineArrowDown,
  AiOutlineArrowUp,
} from "react-icons/ai";
const ColorsFilter = () => {
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
        <h4>COLORS</h4>
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
        <button style={{ backgroundColor: "#990000 " }}></button>
        <button style={{ backgroundColor: "#0c0073 " }}></button>
        <button style={{ backgroundColor: "#e83f3f " }}></button>
        <button style={{ backgroundColor: "#897900 " }}></button>
        <button style={{ backgroundColor: "#00640d " }}></button>
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
    }
  }
`;
export default ColorsFilter;
