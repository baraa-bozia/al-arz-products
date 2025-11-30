import React from "react";
import ProductCard from "./ProductCard";
import styled from "styled-components";


const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr); 
  gap: 20px;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr); 
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr; 
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
