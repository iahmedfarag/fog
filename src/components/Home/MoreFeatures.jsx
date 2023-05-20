import React from "react";
import { styled } from "styled-components";
import { BiSupport } from "react-icons/bi";
import { MdPayment } from "react-icons/md";
import { GiReturnArrow } from "react-icons/gi";

const MoreFeatures = () => {
  return (
    <Wrapper>
      <article
        data-aos="fade-up"
        // data-aos-anchor-placement="bottom-bottom"
        data-aos-duration="1500"
      >
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
      <article
        data-aos="fade-up"
        // data-aos-anchor-placement="bottom-bottom"
        data-aos-duration="1500"
      >
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
      <article
        data-aos="fade-up"
        // data-aos-anchor-placement="bottom-bottom"
        data-aos-duration="1500"
      >
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
  gap: 20px;
  article {
    width: calc(100% / 3 - 40px / 3);
    text-align: center;
    .img {
      svg {
        border-radius: 50%;
        color: var(--color-main);
        font-size: 70px;
        border: 1px solid var(--color-main);
        padding: 15px;
        border-radius: 50%;
      }
      margin-bottom: 10px;
    }
    .info {
      h4 {
        line-height: 1;
      }
      span {
        font-size: 14px;
        font-weight: 400;
        margin-top: 2px;
        margin-bottom: 10px;
        display: block;
      }
      p {
        font-size: 13px;
        color: var(--color-555);
        line-height: 1.7;
      }
    }
  }
  @media (max-width: 768px) {
    flex-wrap: wrap;
    article {
      width: 100%;
    }
    .info {
      /* margin-top: -10px; */
      p {
        width: 80%;
        margin: 0 auto;
      }
    }
  }
`;
export default MoreFeatures;
