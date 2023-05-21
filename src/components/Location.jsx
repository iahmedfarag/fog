import React from "react";
import { styled } from "styled-components";
import { AiOutlineHome, AiOutlineArrowRight } from "react-icons/ai";
const Location = () => {
  return (
    <Wrapper>
      <div className="container">
        <ul className="flex">
          <li className="flex">
            <a href="" className="flex">
              <AiOutlineHome />
            </a>
          </li>
          <span className="flex">
            <AiOutlineArrowRight />
          </span>
          <li>
            <a href="">Shop</a>
          </li>
        </ul>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  padding: 5px 0;
  /* background-color: red; */
  .container {
    ul {
      gap: 10px;
      li {
        a {
          font-size: 12px;
          color: var(--color-555);
          font-weight: bold;
          text-transform: uppercase;
        }
      }
      span {
        font-size: 12px;
      }
    }
  }
`;
export default Location;
