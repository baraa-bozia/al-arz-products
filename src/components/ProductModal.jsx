// // ProductModal.jsx
// import React from "react";
// import styled from "styled-components";
// import { useParams, useNavigate } from "react-router-dom";
// import { products } from "../products/products";
// import { useState } from "react";
// const Overlay = styled.div`
//   position: fixed;
//   top: 0; left: 0; right:0; bottom: 0;
//   background: rgba(0,0,0,0.4);
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   z-index: 999;
// `;

// const ModalBox = styled.div`
//   background: white;
//   width: 70%;
//   max-width: 900px;
//   border-radius: 12px;
//   padding: 25px;
//   text-align: center;
//   direction: rtl;
// `;

// const TopBar = styled.div`
//   display: flex;
//   justify-content: space-between;
//   font-size: 18px;
//   margin-bottom: 20px;
// `;

// const CloseBtn = styled.button`
//   background: none;
//   border: none;
//   font-size: 22px;
//   cursor: pointer;
// `;

// const ProductImg = styled.img`
//   width: 60%;
//   object-fit: contain;
//   margin: 20px auto;
//   display: block;
// `;

// const Description = styled.p`
//   padding: 15px;
//   font-size: 15px;
//   color: #444;
//   border-top: 1px solid #eee;
// `;

// const NextBtn = styled.button`
//   background: #1b75bb;
//   color: white;
//   border: none;
//   padding: 10px 30px;
//   font-size: 15px;
//   border-radius: 6px;
//   cursor: pointer;
//   margin-top: 10px;
// `;

// export default function ProductModal({ product, onClose }) {
//     const [selectedProduct, setSelectedProduct] = useState(null);  // هنا الحالة للمودال
  
//     const { id } = useParams();
//   const navigate = useNavigate();

//     const index = products.findIndex((p) => p.id === parseInt(id));
//   const handleProductClick = (product) => {
//     setSelectedProduct(product);
//   };
//    const handleNext = () => {
//       if (index < products.length - 1) {
//         const nextId = products[index + 1].id;
//         handleProductClick()
//         // navigate(`/product/${nextId}`);
//       }
//     };
//   if (!product) return null;

//   return (
//     <Overlay onClick={onClose}>
//       <ModalBox onClick={(e) => e.stopPropagation()}>
//         <TopBar>
//           <span>Our products</span>
//           <CloseBtn onClick={onClose}>×</CloseBtn>
//         </TopBar>

//         <ProductImg src={product.image} alt={product.name} />
//         <Description>{product.description}</Description>

//         <NextBtn onClick={handleNext} disabled={index === products.length - 1}>التالي</NextBtn>
//       </ModalBox>
//     </Overlay>
//   );
// }

import React from "react";
import styled from "styled-components";

const Overlay = styled.div`
  position: fixed;
  top: 0; left: 0; right:0; bottom: 0;
  background: rgba(0,0,0,0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;
const Name = styled.h2`
  color: #194e91;
  margin-top:-80px
`;

const ModalBox = styled.div`
  background: white;
  width: 70%;
  max-width: 900px;
  border-radius: 12px;
  padding: 25px;
  text-align: center;
  direction: rtl;
`;

const TopBar = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 18px;
  margin-bottom: 20px;
`;

const CloseBtn = styled.button`
  background: none;
  border: none;
  font-size: 22px;
  cursor: pointer;
`;

const ProductImg = styled.img`
  width: 60%;
  object-fit: contain;
  margin: 20px auto;
  display: block;
`;

const Description = styled.p`
  padding: 15px;
  font-size: 15px;
  color: #444;
  border-top: 1px solid #eee;
`;

const NextBtn = styled.button`
  background: #1b75bb;
  color: white;
  border: none;
  padding: 10px 30px;
  font-size: 15px;
  border-radius: 6px;
  cursor: pointer;
  margin-top: 10px;
`;

export default function ProductModal({ product, onClose, productList, setProduct }) {
  if (!product) return null;

  const currentIndex = productList.findIndex(p => p.id === product.id);

  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % productList.length; // يدور للبداية عند الوصول للنهاية
    setProduct(productList[nextIndex]);
  };

  return (
    <Overlay onClick={onClose}>
      <ModalBox onClick={(e) => e.stopPropagation()}>
        <TopBar>
          <span>منتجاتنا</span>
          <CloseBtn onClick={onClose}>×</CloseBtn>
        </TopBar>

        <ProductImg src={product.image} alt={product.name} />

        <Description>{product.description}</Description>

        <NextBtn onClick={handleNext}>التالي</NextBtn>
      </ModalBox>
    </Overlay>
  );
}
