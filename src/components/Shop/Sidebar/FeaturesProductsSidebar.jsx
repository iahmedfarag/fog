import React from "react";
import { styled } from "styled-components";
import RowProduct from "../../Home/RowProduct.jsx";
import img1 from "../../../assets/Products/product10.jpg";
import img2 from "../../../assets/Products/product11.jpg";
import img3 from "../../../assets/Products/product12.jpg";
const FeaturesProductsSidebar = () => {
  return (
    <Wrapper>
      <header className="flex">
        <h4>FEATURED</h4>
      </header>
      <div>
        <RowProduct img1={img1} img2={img2} sidebar={"sidebar"} />
        <RowProduct img1={img2} img2={img1} sidebar={"sidebar"} />
        <RowProduct img1={img3} img2={img2} sidebar={"sidebar"} />
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  border: 1px solid var(--color-cf);
  padding: 20px 15px;
  header {
    margin-bottom: 10px;
    h4 {
      font-size: 15px;
      font-weight: 600;
      color: var(--color-444);
    }
  }
  > div {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
`;
export default FeaturesProductsSidebar;
