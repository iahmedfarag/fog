import React from "react";
import { Header, Features, Sidebar, HomeContent } from "../components/index.js";
import { styled } from "styled-components";

const Home = () => {
  return (
    <>
      <Header />
      <Features />
      <Wrapper>
        <div className="container">
          <Sidebar />
          <HomeContent />
        </div>
      </Wrapper>
    </>
  );
};
const Wrapper = styled.main`
  margin-top: 20px;
  .container {
    display: flex;
    gap: 20px;
  }
  @media (max-width: 992px) {
    .container {
      gap: 0px;
    }
  }
`;
export default Home;
