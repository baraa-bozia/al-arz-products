// src/ProductsPage.jsx
import React from "react";
import styled from "styled-components";
import { productCategories } from "./data";
import CategorySection from "./components/CategorySection";

const PageContainer = styled.div`
  padding: 40px 20px;
  direction: rtl;
  font-family: "Tahoma", sans-serif;
`;

export default function ProductsPage() {
  return (
    <PageContainer>
      {productCategories.map((cat) => (
        <CategorySection key={cat.id} category={cat} />
      ))}
    </PageContainer>
  );
}
