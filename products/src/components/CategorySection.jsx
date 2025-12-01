// src/components/CategorySection.jsx
import React from "react";
import styled from "styled-components";
import ProductCard from "./ProductCard";

const Section = styled.section`
  margin-bottom: 60px;
`;

const Title = styled.h2`
  font-size: 32px;
  color: #1d4e89;
  margin-bottom: 20px;
  text-align: center;
`;

const ProductsGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;
`;

export default function CategorySection({ category }) {
  return (
    <Section id={category.id}>
      <Title>{category.title}</Title>
      <ProductsGrid>
        {category.products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </ProductsGrid>
    </Section>
  );
}
