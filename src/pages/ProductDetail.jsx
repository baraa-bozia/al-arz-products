
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { products } from "../products/products";
import styled from "styled-components";

const Container = styled.div`
  padding: 40px 20px;
  max-width: 600px;
  margin: auto;
  text-align: center;
`;

const Image = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
  border-radius: 10px;
`;

const Name = styled.h2`
  color: #194e91;
  margin: 20px 0 10px;
`;

const Desc = styled.p`
  color: #555;
  font-size: 1rem;
`;

const Button = styled.button`
  margin: 10px 5px 0 5px;
  background: #194e91;
  color: white;
  border: none;
  padding: 10px 16px;
  border-radius: 6px;
  cursor: pointer;
  &:hover { background: #3969a8ff; }
`;

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const index = products.findIndex((p) => p.id === parseInt(id));
  const product = products[index];

  if (!product) return <p>المنتج غير موجود</p>;

  const handlePrev = () => {
    if (index > 0) {
      const prevId = products[index - 1].id;
      navigate(`/product/${prevId}`);
    }
  };

  const handleNext = () => {
    if (index < products.length - 1) {
      const nextId = products[index + 1].id;
      navigate(`/product/${nextId}`);
    }
  };

  return (
    <Container>
      <Image src={product.image} alt={product.name} />
      <Name>{product.name}</Name>
      <Desc>{product.description}</Desc>

      <div>
        <Button onClick={handlePrev} disabled={index === 0}>
          السابق
        </Button>
        <Button onClick={handleNext} disabled={index === products.length - 1}>
          التالي
        </Button>
      </div>

      <Button onClick={() => navigate("/")}>العودة للمنتجات</Button>

    </Container>
  );
}
