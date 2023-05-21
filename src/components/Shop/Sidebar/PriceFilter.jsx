import React, { useEffect, useRef, useState } from "react";
import { styled } from "styled-components";

import {
  AiOutlineMinus,
  AiOutlinePlus,
  AiOutlineArrowDown,
  AiOutlineArrowUp,
} from "react-icons/ai";
const PriceFilter = () => {
  const [isOpen, setIsOpen] = useState(false);
  const cats = useRef(null);
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
        <h4>PRICE</h4>
        <button
          className="flex"
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          {isOpen ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      <form ref={cats} style={catsStyles}>
        <div className="inp">
          <input type="range" min="0" max="100" class="slider" />
        </div>

        <div className="results flex">
          <p>
            Price: <span>$50</span> - <span>$300</span>
          </p>
          <button>FILTER</button>
        </div>
      </form>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  border: 1px solid var(--color-cf);
  padding: 20px 15px;
  /* overflow: hidden; */
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
  > form {
    display: flex;
    flex-direction: column;
    /* margin-top: 10px; */
    gap: 10px;
    overflow: hidden;
    transition: 0.3s;

    .inp {
      /* position: relative; */
      /* margin: 10px 0; */
      /* The slider itself */
      .slider {
        -webkit-appearance: none; /* Override default CSS styles */
        appearance: none;
        width: 100%; /* Full-width */
        height: 20px; /* Specified height */
        background: #d3d3d3; /* Grey background */
        outline: none; /* Remove outline */
        opacity: 0.7; /* Set transparency (for mouse-over effects on hover) */
        -webkit-transition: 0.2s; /* 0.2 seconds transition on hover */
        transition: opacity 0.2s;
      }

      /* Mouse-over effects */
      .slider:hover {
        opacity: 1; /* Fully shown on mouse-over */
      }

      /* The slider handle (use -webkit- (Chrome, Opera, Safari, Edge) and -moz- (Firefox) to override default look) */
      .slider::-webkit-slider-thumb {
        -webkit-appearance: none; /* Override default look */
        appearance: none;
        width: 25px; /* Set a specific slider handle width */
        height: 20px; /* Slider handle height */
        background: var(--color-main);
        cursor: pointer;
      }

      .slider::-moz-range-thumb {
        width: 25px; /* Set a specific slider handle width */
        height: 20px; /* Slider handle height */
        background: var(--color-main);
        cursor: pointer;
      }
    }
    .results {
      justify-content: space-between;

      p {
        font-size: 13px;
        color: var(--color-555);
        font-weight: 500;
      }
      button {
        padding: 8px 10px;
        background-color: var(--color-main);
        color: white;
        font-size: 12px;
        font-weight: 600;
      }
    }
  }
`;
export default PriceFilter;
