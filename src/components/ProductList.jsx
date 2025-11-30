import React from "react";
import ProductCard from "./ProductCard";
import styled from "styled-components";

// const Grid = styled.div`
//   display: grid;
//   grid-template-columns: repeat(auto-fill,minmax(220px,1fr));
//   gap: 20px;
// `;
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr); /* 3 منتجات في الصف */
  gap: 20px;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr); /* على الشاشات الصغيرة صفين */
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr; /* على الموبايل منتج واحد في الصف */
  }
`;
export default function ProductList({ products }) {
  return (
    <Grid>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </Grid>
  );
}
