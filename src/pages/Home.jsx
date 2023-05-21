import React, { useState } from "react";
import {
  Header,
  Features,
  Sidebar,
  HomeContent,
  Footer,
} from "../components/index.js";
import { styled } from "styled-components";
import { MdMenuOpen } from "react-icons/md";
import { AiOutlineClose } from "react-icons/ai";
const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Header />
      <Features />
      <Wrapper>
        <div className="container">
          <button
            className={`open flex ${isOpen && "active"}`}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <AiOutlineClose /> : <MdMenuOpen />}
          </button>
          <Sidebar isOpen={isOpen} />
          <HomeContent />
        </div>
      </Wrapper>
      <Footer />
    </>
  );
};
const Wrapper = styled.main`
  margin-top: 20px;
  .container {
    display: flex;
    gap: 20px;
    .open {
      font-size: 30px;
      position: fixed;
      top: 200px;
      left: 0;
      z-index: 555;
      padding: 5px;
      background-color: white;
      color: var(--color-555);
      box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
      transition: 0.3s;
      display: none;
      &:hover {
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
        color: var(--color-main);
      }
      &.active {
        left: 270px;
      }
    }
  }
  @media (max-width: 992px) {
    .container {
      gap: 0px;
      .open {
        display: block;
      }
    }
  }
`;
export default Home;
