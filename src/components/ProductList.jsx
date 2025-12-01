// import React from "react";
// import ProductCard from "./ProductCard";
import styled from "styled-components";


const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr); 
 gap: 12px;
   align-items: center;

  cursor: pointer;
  padding: 12px;
  border-radius: 12px;
  background-color: #fff;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr); 
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr; 
  }
`;
// export default function ProductList({ products ,onProductClick }) {
//   return (
//     <Grid>
//       {products.map((product) => (
//         <ProductCard key={product.id} product={product} />
//       ))}
//     </Grid>
//   );
// }
const ProductImage = styled.img`
  width: 100%;
  height: auto;
    gap: 50px;

  transition: transform 0.3s ease;
  &:hover {
    transform: scale(1.1);
  }
`;



const ProductName = styled.div`
  font-size: 1.1rem;
  font-weight: 600;
  text-align: center;
  color: #194e91;
  line-height: 1.6;
  margin-top:10px;
`;
export default function ProductList({ products, onProductClick }) {
  return (
     <Grid style={{alignItems:'center',textAlign:'center'}}>
        {products.map((product) => (
        <div
          key={product.id}
          style={{ cursor: "pointer" }}
          onClick={() => onProductClick(product)}   // <-- هنا
        >
          <ProductImage src={product.image} alt={product.name} width={300} />
          <ProductName>{product.name}</ProductName>
                    <ProductName>{product.desc}</ProductName>

        </div>
    
      ))}
    </Grid>
  );
      
  
}
