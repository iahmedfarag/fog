import React from "react";
import { styled } from "styled-components";
import { BiSupport } from "react-icons/bi";
import { MdPayment } from "react-icons/md";
import { GiReturnArrow } from "react-icons/gi";
const MoreFeatures = () => {
  return (
    <Wrapper>
      <article>
        <div className="img">
          <BiSupport />
        </div>
        <div className="info">
          <h4>CUSTOMER SUPPORT</h4>
          <span>Need Assistence?</span>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
            neque, consequatur.
          </p>
        </div>
      </article>
      <article>
        <div className="img">
          <MdPayment />
        </div>
        <div className="info">
          <h4>CUSTOMER SUPPORT</h4>
          <span>Need Assistence?</span>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
            neque, consequatur.
          </p>
        </div>
      </article>
      <article>
        <div className="img">
          <GiReturnArrow />
        </div>
        <div className="info">
          <h4>CUSTOMER SUPPORT</h4>
          <span>Need Assistence?</span>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
            neque, consequatur.
          </p>
        </div>
      </article>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  padding: 30px 0;
  display: flex;
  article {
    width: calc(100% / 3 - 40px / 3);
    text-align: center;
    .img {
      font-size: 60px;
      color: var(--color-main);
    }
    .info {
      h4 {
        line-height: 1;
      }
      span {
        font-size: 14px;
        margin-top: 2px;
        margin-bottom: 5px;
        display: block;
      }
      p {
        font-size: 13px;
        color: var(--color-555);
        line-height: 1.5;
      }
    }
  }
`;
export default MoreFeatures;
