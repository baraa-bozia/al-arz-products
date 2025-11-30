import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Card = styled.div`
  background: white;
  border-radius: 10px;
  box-shadow: 0px 4px 6px rgba(0,0,0,0.1);
  padding: 16px;
  text-align: center;
  transition: transform 0.2s;
  display: flex;
  flex-direction: column;
  justify-content: space-between; /* يخلي البوتون ينزل للأسفل */
    min-height: 300px;  /* ارتفاع أصغر */

  &:hover { transform: scale(1.03); }
`;

const ProductImage = styled.img`
  width: 100%;
  height: 290px;
  object-fit: cover;
  border-radius: 8px;
`;

const ProductName = styled.h3`
  color: #194e91;
  margin-top: 12px;
  font-size: 1.2rem;
`;

const ProductDesc = styled.p`
  color: #555;
  font-size: 0.9rem;
  margin-top: 8px;
`;

const Button = styled.button`
  margin-top: 12px;
  background: #194e91;
  color: white;
  border: none;
  padding: 8px 12px;
  border-radius: 5px;
  cursor: pointer;

  &:hover { background: #3969a8ff; }
`;

export default function ProductCard({ product }) {
  const navigate = useNavigate();

  return (
    <Card>
      <ProductImage src={product.image} alt={product.name} />
      <ProductName>{product.name}</ProductName>
      <ProductDesc>{product.desc}</ProductDesc>
      <Button onClick={() => navigate(`/product/${product.id}`)}>
        عرض المنتج
      </Button>
    </Card>
  );
}
