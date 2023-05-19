import React from "react";
import { BsFacebook } from "react-icons/bs";
import { AiFillTwitterCircle, AiOutlineInstagram } from "react-icons/ai";
import { FaAngleDown } from "react-icons/fa";
import us from "../../assets/us-icon.png";
import eg from "../../assets/eg-icon.png";
import { styled } from "styled-components";
const SmallNavbar = () => {
  return (
    <Wrapper>
      <div className="container">
        {/* left */}
        <div className="left">
          <div className="language">
            <div>
              <img src={us} alt="us-icon" style={{ width: "15px" }} /> ENG{" "}
              <FaAngleDown />
            </div>
            <span>
              <button>
                <img src={us} alt="us-icon" style={{ width: "15px" }} /> USD
              </button>
              <button>
                <img src={eg} alt="us-icon" style={{ width: "15px" }} /> EGP
              </button>
            </span>
          </div>
          <div className="currency">
            <div>
              USD <FaAngleDown />
            </div>
            <span>
              <button>ENG</button>
              <button>AR</button>
            </span>
          </div>
        </div>
        {/* right */}
        <div className="right">
          <p>WELCOME TO FOG!</p>
          <ul>
            <li>
              <a href="">CONTACT US</a>
            </li>
            <li>
              <a href="">MY ACCOUNT</a>
            </li>
            <li>
              <a href="">MY WISHLIST</a>
            </li>
            <li>
              <a href="">CART</a>
            </li>
            <li>
              <a href="">LOG IN</a>
            </li>
          </ul>
          <div>
            <a href="">
              <BsFacebook />
            </a>
            <a href="">
              <AiFillTwitterCircle />
            </a>
            <a href="">
              <AiOutlineInstagram />
            </a>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: var(--color-main);
  color: var(--color-off-white);
  font-size: 11px;
  font-weight: 600;
  padding: 10px 0;
  position: relative;
  z-index: 2;
  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    > div {
      display: flex;
      &.left {
        display: flex;
        align-items: center;
        gap: 15px;
        div {
          position: relative;
          div {
            display: flex;
            align-items: center;
            gap: 5px;
            user-select: none;
            svg {
              margin-left: -2px;
            }
          }

          span {
            display: none;
            flex-direction: column;
            position: absolute;
            background-color: white;
            button {
              font-size: 11px;
              display: flex;
              align-items: center;
              gap: 5px;
              padding: 7px 10px;
              &:hover {
                background-color: var(--color-off-white);
              }
            }
          }

          &:hover {
            span {
              display: flex;
            }
          }
        }
      }
      &.right {
        display: flex;
        align-items: center;
        gap: 30px;
        ul {
          display: flex;
          align-items: center;
          gap: 30px;
          li {
            a {
              letter-spacing: 0.3px;
            }
          }
        }
        & > div {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 16px;
          a {
            display: flex;
            align-items: center;
            &:hover {
              color: red;
            }
          }
        }
      }
    }
  }
  @media (max-width: 992px) {
    .container {
      > div {
        &.right {
          ul {
            display: none;
          }
        }
      }
    }
  }
  @media (max-width: 768px) {
    .container {
      > div {
        &.right {
          p {
            display: none;
          }
        }
      }
    }
  }
`;
export default SmallNavbar;
