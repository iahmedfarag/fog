import React from "react";
import { styled } from "styled-components";

import { navLinks } from "./../data";
const Navbar = () => {
  return (
    <Wrapper>
      <div className="container">
        <ul className="flex">
          {navLinks.map((link) => {
            const { id, text, url } = link;
            return (
              <li key={id}>
                <a href={url}>{text}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.nav`
  background-color: var(--color-cf);
  padding: 15px 0;
  .container {
    ul {
      gap: 20px;
      li {
        a {
          text-transform: uppercase;
          font-size: 12px;
          font-weight: bold;
          color: var(--color-555);
          &:hover {
            color: var(--color-main);
          }
        }
      }
    }
  }
  @media (max-width: 992px) {
    display: none;
  }
`;
export default Navbar;
