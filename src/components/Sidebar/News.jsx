import React from "react";
import { styled } from "styled-components";

const News = () => {
  return (
    <Wrapper>
      <h4>SUBSCRIPE NEWSLETTER</h4>
      <p>Get all the latest information on Events, Sales and Offers.</p>
      <input type="text" placeholder="Email address" />
      <button className="" type="submit">
        Subscribe
      </button>
    </Wrapper>
  );
};
const Wrapper = styled.form`
  padding: 25px 25px;
  margin-bottom: 25px;
  text-align: center;
  background-color: #f1f1f1;
  h4 {
    font-size: 14px;
    font-weight: 700;
  }
  p {
    font-size: 13px;
    margin: 15px 0;
    color: var(--color-555);
    /* font-weight: 400; */
  }
  input {
    padding: 10px 20px;
    width: 100%;
    border-radius: 25px;
    margin-bottom: 15px;
    border: none;
    &:focus {
      outline: 1px solid var(--color-main);
    }
  }
  button {
    background-color: var(--color-main);
    color: white;
    padding: 10px 20px;
    font-weight: 800;
    text-transform: uppercase;
    &:hover {
      opacity: 0.7;
    }
  }
`;
export default News;
