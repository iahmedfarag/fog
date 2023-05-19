import React from "react";
import { styled } from "styled-components";
import { MdOutlineLocalShipping } from "react-icons/md";
import { RiMoneyDollarCircleLine, Ri24HoursFill } from "react-icons/ri";
const Features = () => {
  return (
    <Wrapper className="container">
      <div className="wrapper flex">
        <article className="flex">
          <div className="icon flex">
            <MdOutlineLocalShipping />
          </div>
          <div className="content">
            <h5>FREE SHIPPING & RETURN</h5>
            <p>Free shipping on all orders over $99</p>
          </div>
          <span></span>
        </article>
        <article className="flex center" style={{ justifyContent: "center" }}>
          <div className="icon flex">
            <RiMoneyDollarCircleLine />
          </div>
          <div className="content">
            <h5>MONEY BACK GUARANTEE</h5>
            <p>100% money back guarantee</p>
          </div>
          <span></span>
        </article>
        <article className="flex">
          <div className="icon flex">
            <Ri24HoursFill />
          </div>
          <div className="content">
            <h5>ONLINE SUPPORT 24/7</h5>
            <p>Always dedicated team</p>
          </div>
        </article>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  .wrapper {
    justify-content: space-between;
    border: 1px solid #ebebeb;
    padding: 25px;
    gap: 40px;
    article {
      position: relative;
      gap: 10px;
      width: calc(100% / 3);
      /* background-color: red; */
      .icon {
        font-size: 35px;
        color: var(--color-555);
      }
      .content {
        h5 {
          font-weight: 700;
          line-height: 1.4;
        }
        p {
          font-size: 13px;
          line-height: 1.2;
        }
      }
      span {
        position: absolute;
        width: 1px;
        height: 130%;
        right: -20px;
        top: 50%;
        transform: translateY(-50%);
        background-color: #ebebeb;
      }
    }
  }
  @media (max-width: 992px) {
    .wrapper {
      flex-wrap: wrap;
      gap: 20px;
      padding: 25px 15px;
      article {
        width: 100%;
        &.center {
          justify-content: flex-start !important;
        }
        span {
          display: none;
        }
      }
    }
  }
`;
export default Features;
