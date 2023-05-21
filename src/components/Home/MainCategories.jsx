import React from "react";
import { styled } from "styled-components";
import cat1 from "../../assets/MainCategories/product07.jpg";
import cat2 from "../../assets/MainCategories/product08.jpg";
import cat3 from "../../assets/MainCategories/product09.jpg";
import { Link } from "react-router-dom";

const MainCategories = () => {
  return (
    <Wrapper>
      <div className="wrapper">
        <div
          className="category watches"
          style={{ backgroundImage: `URL(${cat1})` }}
          // data-aos="fade-up"
        >
          <div>
            <h3>Porto Watches</h3>
            <div>
              <h4>20%</h4>
              <h3>30%</h3>
              <h4>OFF</h4>
            </div>
            <Link to={"/shop"}>SHOP NOW</Link>
          </div>
        </div>
        <div
          className="category sale"
          style={{ backgroundImage: `URL(${cat2})` }}
          // data-aos="fade-up"
        >
          <h3>DEAL PROMOS</h3>
          <h4>STARTING AT $99</h4>
          <Link to={"/shop"}>SHOP NOW</Link>
        </div>
        <div
          className="category bags"
          style={{ backgroundImage: `URL(${cat3})` }}
          // data-aos="fade-up"
        >
          <div>
            <h3>Handbags</h3>
            <h2>STARTING AT $99</h2>
            <Link to={"/shop"}>SHOP NOW</Link>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  padding: 15px 0;

  .wrapper {
    display: flex;
    width: 100%;
    gap: 15px;
    /* background-color: red; */
    .category {
      background-size: cover;
      background-position: center center;
      width: calc((100% / 3) - (30px / 3));
      height: 170px;
      object-fit: cover;
      position: relative;

      a {
        display: block;
        width: fit-content;
        margin-top: 40px;
        font-weight: bold;
        font-size: 12px;
      }

      &:hover {
        box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,
          rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
      }

      &.watches {
        /* padding: 10px 20px; */
        > div {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          margin-left: 20px;
          h3 {
            font-size: 24px;
          }
          > div {
            display: flex;

            h3 {
              margin: 0 2px;
            }

            h4:first-child {
              text-decoration: line-through;
            }
            h4:last-child {
              color: var(--color-main);
            }
            a {
              display: block;
              width: fit-content;
            }
          }
        }
      }
      &.sale {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
        /* text-align: center; */
        border: 10px solid var(--color-cf);

        h3 {
          font-size: 20px;
        }
        h4 {
          font-size: 14px;
          color: var(--color-555);
        }
      }
      &.bags {
        /* text-align: right; */
        /* padding-right: 20px; */

        > div {
          position: absolute;
          top: 50%;
          right: 10px;
          transform: translateY(-50%);
          /* margin-left: 20px; */
          text-align: right;
          h3 {
            font-size: 22px;
            font-weight: 700;
          }
          h2 {
            font-size: 15px;
            font-weight: 600;
            margin-top: 1px;
            color: var(--color-tomatto);
          }
          a {
            margin-left: auto;
          }
        }
      }
    }
  }
  @media (max-width: 768px) {
    .wrapper {
      flex-wrap: wrap;
      .category {
        width: 100%;
      }
    }
  }
`;
export default MainCategories;
