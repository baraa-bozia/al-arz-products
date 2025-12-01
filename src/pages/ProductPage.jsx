
import React, { useState, useRef } from "react";
import ProductList from "../components/ProductList";
import { products } from "../products/products";
import styled from "styled-components";

const Container = styled.div`
  padding: 20px;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 30px;
  position: relative;
  
`;

const Title = styled.h1`
  font-size: 2rem;
  color: #194e91;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
`;

const Arrow = styled.span`
  display: inline-block;
  transition: transform 0.3s;
  transform: ${(props) => (props.open ? "rotate(180deg)" : "rotate(0deg)")};
`;

const Dropdown = styled.ul`
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  background: white;
  list-style: none;
  padding: 10px 0;
  margin: 0;
  border: 1px solid #ddd;
  border-radius: 8px;
  width: 220px;
  box-shadow: 0px 4px 6px rgba(0,0,0,0.1);
  display: ${(props) => (props.show ? "block" : "none")};
  z-index: 10;
`;

const DropdownItem = styled.li`
  padding: 8px 16px;
  color:#1D4F90;
  cursor: pointer;
  &:hover {
    background: #f2f2f2;
  }
`;

const BannerImage = styled.img`
  width: 100%;
  height: 250px; 
  object-fit: cover;
  border-radius: 10px;
  margin-top: 20px;

  
  @media (max-width: 600px) {
  background-size: cover;
  width: 110%;
    overflow: hidden; 

    transform: translateX(-5%); 


}
`;

export default function ProductsPage() {
  const [showDropdown, setShowDropdown] = useState(false);

  const singleRef = useRef(null);
  const familyRef = useRef(null);
  const eventRef = useRef(null);

  const handleToggleDropdown = () => {
    setShowDropdown((prev) => !prev);
  };

  const handleScrollTo = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
    setShowDropdown(false); 
  };

  const singleProducts = products.filter((p) => p.category === "single");
  const familyProducts = products.filter((p) => p.category === "family");
  const eventProducts = products.filter((p) => p.category === "event");

  return (
    <Container>
      <Header>
        <Title onClick={handleToggleDropdown}>
          منتجاتنا <Arrow open={showDropdown}>▼</Arrow>
        </Title>
        <Dropdown show={showDropdown}>
          <DropdownItem onClick={() => handleScrollTo(singleRef)}>حصة واحدة</DropdownItem>
          <DropdownItem onClick={() => handleScrollTo(familyRef)}>عبوات عائلية</DropdownItem>
          <DropdownItem onClick={() => handleScrollTo(eventRef)}>عبوات للمناسبات</DropdownItem>
        </Dropdown>
      </Header>
<BannerImage src="/images/Al_ARZ.png" alt="منتجاتنا" />

      <div ref={singleRef}>
        <h2 style={{color:"#1D4F90",textAlign:"center",margin:"50px 50px"}}>حصة واحدة</h2>
        <ProductList products={singleProducts} />
      </div>

      <div ref={familyRef}>
        <h2  style={{color:"#1D4F90",textAlign:"center",margin:"50px 50px"}}>عبوات عائلية</h2>
        <ProductList products={familyProducts} />
      </div>

      <div ref={eventRef}>
        <h2  style={{color:"#1D4F90",textAlign:"center",margin:"50px 50px"}}>عبوات للمناسبات</h2>
        <ProductList products={eventProducts} />
      </div>
    </Container>
  );
}
