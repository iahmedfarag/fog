import React from "react";
import { styled } from "styled-components";
import CartItem from "./CartItem.jsx";

const CartBox = () => {
  return (
    <Wrapper>
      <h5 className="details flex">
        <span>1 ITEM</span> <a href="">VIEW CART</a>
      </h5>
      <hr />
      <div className="products">
        <CartItem />
        <CartItem />
      </div>
      <hr />
      <div className="total flex">
        <h5>SUBTOTAL:</h5>
        <h4>$259.00</h4>
      </div>
      <button>CHECKOUT</button>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  position: absolute;
  z-index: 5;
  right: 0;
  top: calc(100%);
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  padding: 20px;
  width: 300px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  display: none;
  transition: 0.2s;
  &:hover {
    display: flex;
  }
  .details {
    justify-content: space-between;
    a {
      border-bottom: 1px solid white;
      &:hover {
        border-bottom: 1px solid black;
      }
    }
  }
  .products {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }
  .total {
    justify-content: space-between;
  }
  button {
    background-color: black;
    color: white;
    width: 100%;
    padding: 10px 0;
    font-weight: bold;
    &:hover {
      opacity: 0.8;
    }
  }
`;
export default CartBox;
