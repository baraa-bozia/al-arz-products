// src/components/ProductCard.jsx
import React from "react";
import styled from "styled-components";

const Card = styled.div`
  width: 240px;
  margin: 20px;
  text-align: center;
  direction: rtl;
`;

const Img = styled.img`
  width: 100%;
  object-fit: contain;
`;

const Name = styled.h4`
  margin: 12px 0 6px;
  font-size: 18px;
  color: #002b5b;
`;

export default function ProductCard({ product }) {
  return (
    <Card>
      <Img src={product.img} alt={product.name} />
      <Name>{product.name}</Name>
    </Card>
  );
}
