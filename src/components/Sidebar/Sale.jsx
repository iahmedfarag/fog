import React from "react";
import Slider from "react-slick";
import { styled } from "styled-components";
import img1 from "../../assets/sale.png";
import img2 from "../../assets/sale-product1.jpg";
import img3 from "../../assets/sale-product2.jpg";

const Sale = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Wrapper>
      <Slider {...settings}>
        <article className="sale">
          <div className="img">
            <img src={img1} alt="prduct img" />
          </div>
          <div className="info">
            <div className="sale">
              <span className="up">UP TO</span>
              <h2>50</h2>
              <div>
                <h2>%</h2>
                <h2>OFF</h2>
              </div>
            </div>
            <p>Bag, Clothing, T-Shirts, Shoes, Watches and much more...</p>
          </div>
          <button>VIEW SALE</button>
        </article>

        <article className="drones">
          <div className="img">
            <img src={img2} alt="prduct img" />
          </div>
          <div className="info">
            <h3>
              DRONE + <br /> CAMERAS
            </h3>
            <div className="sale">
              <span className="up">UP TO</span>
              <h2>$100</h2>
              <div>
                <h2>OFF</h2>
              </div>
            </div>
            <p>Top Brands and Models!</p>
          </div>
          <button>VIEW SALE</button>
        </article>

        <article className="headphones">
          <h3>
            HEADPHONES <br /> SALE
          </h3>
          <div className="img">
            <img src={img3} alt="prduct img" />
          </div>
          <div className="info">
            <div className="sale">
              <span className="up">UP TO</span>
              <h2>$100</h2>
              <div>
                <h2>OFF</h2>
              </div>
            </div>
            <p>{`  .... `}</p>
          </div>
          <button>VIEW SALE</button>
        </article>
      </Slider>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  margin-bottom: 25px;
  .slick-slider {
    position: relative;
    border: 1px solid var(--color-cf);
    padding: 25px;
    padding-top: 25px;
    padding-bottom: 75px;

    .slick-list {
      margin: 0 -20px;
      .slick-track {
        height: 100%;
      }
      .slick-slide {
        text-align: center;

        > div {
          margin: 0 20px;
        }
        article {
          .img {
            img {
              margin: 0 auto;
              width: 120px;
              height: 120px;
              object-fit: contain;
            }
          }

          .info {
            display: flex;
            flex-direction: column;

            .up {
              transform: rotate(-90deg);
              /* margin-right: -20px; */
              /* padding-right: -20px; */
              position: relative;
              right: -10px;
              font-size: 10px;
            }

            .sale {
              display: flex;
              align-items: center;
              justify-content: center;
              margin: 10px 0;
              > h2 {
                font-size: 70px;
                line-height: 1;
              }
              > div {
                display: flex;
                flex-direction: column;
                h2 {
                  line-height: 1;
                  &:last-child {
                    font-size: 14px;
                  }
                }
              }
            }

            p {
              font-size: 14px;
              line-height: 1.6;
              color: var(--color-555);
            }
          }

          button {
            background-color: black;
            color: white;
            padding: 10px 20px;
            margin-top: 25px;
            font-weight: 800;
            &:hover {
              opacity: 0.7;
            }
          }

          &.drones {
            .info {
              h3 {
                line-height: 1;
                /* margin: 10px 0; */
                margin-top: 20px;
                margin-bottom: 5px;
              }
              .sale {
                > h2 {
                  font-size: 24px;
                  padding: 10px;
                  background-color: black;
                  color: white;
                  transform: rotate(-5deg);
                  margin: 0 5px;
                }
              }
            }
          }

          &.headphones {
            height: 100%;
            position: relative;
            > h3 {
              color: var(--color-555);
              font-size: 14px;
              font-weight: 600;
              margin-bottom: 15px;
              letter-spacing: 5px;
            }
            .info {
              .sale {
                > h2 {
                  font-size: 24px;
                  padding: 10px;
                  background-color: black;
                  color: white;
                  transform: rotate(-5deg);
                  margin: 0 5px;
                }
              }
              > p {
                opacity: 0;
              }
            }
            button {
              margin-top: auto;
            }
          }
        }
      }
    }

    .slick-dots {
      position: absolute;
      bottom: 25px;
      /* left: 50px; */
      left: 50%;
      transform: translateX(-50%);
      width: fit-content;
      height: fit-content;
      /* display: none !important; */
      li {
        border-radius: 50%;
        border: 1px solid var(--color-off-white);
        width: 15px;
        height: 15px;
        margin: 0 3px;
        &.slick-active {
          border: 1px solid var(--color-main);
        }
        button {
          &::before {
            width: 15px;
            height: 15px;
            line-height: 15px;
            left: 0px;
            opacity: 0;
            color: var(--color-main);
          }
        }
        &.slick-active {
          button {
            &::before {
              opacity: 1;
            }
          }
        }
      }
    }

    .slick-arrow {
      display: none !important;
    }
  }
`;
export default Sale;
