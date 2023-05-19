import React from "react";
import { styled } from "styled-components";

const Footer = () => {
  return (
    <Wrapper className="flex">
      <a
        href="https://www.linkedin.com/in/ahmed-farag-16433b260/"
        target="_blank"
      >
        linkedin
      </a>
      <a href="https://github.com/iahmedfarag" target="_blank">
        github
      </a>
    </Wrapper>
  );
};
const Wrapper = styled.footer`
  justify-content: center;
  padding: 100px 0;
  background-color: #222;
  color: #ce0000;
  margin-top: 50px;
  gap: 20px;
`;
export default Footer;
