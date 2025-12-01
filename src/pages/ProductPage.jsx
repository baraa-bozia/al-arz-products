
// import React, { useState, useRef } from "react";
// import ProductList from "../components/ProductList";
// import { products } from "../products/products";
// import styled from "styled-components";
// import ProductModal from "../components/ProductModal"; // استيراد المودال

// const Container = styled.div`
//   padding: 30px 120px ;
// `;

// const Header = styled.div`
//   text-align: center;
//   margin-bottom: 30px;
//   position: relative;
  
// `;

// const Title = styled.h1`
//   font-size: 2rem;
//   color: #194e91;
//   display: inline-flex;
//   align-items: center;
//   gap: 8px;
//   cursor: pointer;
// `;

// const Arrow = styled.span`
//   display: inline-block;
//   transition: transform 0.3s;
//   transform: ${(props) => (props.open ? "rotate(180deg)" : "rotate(0deg)")};
// `;

// const Dropdown = styled.ul`
//   position: absolute;
//   top: 100%;
//   left: 50%;
//   transform: translateX(-50%);
//   background: white;
//   list-style: none;
//   padding: 10px 0;
//   margin: 0;
//   border: 1px solid #ddd;
//   border-radius: 8px;
//   width: 220px;
//   box-shadow: 0px 4px 6px rgba(0,0,0,0.1);
//   display: ${(props) => (props.show ? "block" : "none")};
//   z-index: 10;
// `;

// const DropdownItem = styled.li`
//   padding: 8px 16px;
//   color:#1D4F90;
//   cursor: pointer;
//   &:hover {
//     background: #f2f2f2;
//   }
// `;

// const BannerImage = styled.img`
//    width: 100vw;                     /* عرض كامل الشاشة */
//   height: auto;
//   object-fit: cover;

//   /* يجعل الصورة تبدأ من اليمين وتمتد خارج الكونتينر */
//   margin-right: calc(50% - 50vw);  
//   margin-left: calc(50% - 50vw);
//   display: block;
  
//   @media (max-width: 600px) {
//     height: 170px;
//       object-position: center;




// }
// `;

// export default function ProductsPage() {
//   const [showDropdown, setShowDropdown] = useState(false);
//   const [selectedProduct, setSelectedProduct] = useState(null);  // هنا الحالة للمودال

//   const singleRef = useRef(null);
//   const familyRef = useRef(null);
//   const eventRef = useRef(null);

//   const handleToggleDropdown = () => {
//     setShowDropdown((prev) => !prev);
//   };

//   const handleScrollTo = (ref) => {
//     ref.current.scrollIntoView({ behavior: "smooth" });
//     setShowDropdown(false); 
//   };

//   const singleProducts = products.filter((p) => p.category === "single");
//   const familyProducts = products.filter((p) => p.category === "family");
//   const eventProducts = products.filter((p) => p.category === "event");
//  const handleProductClick = (product) => {
//     setSelectedProduct(product);
//   };
//   return (
//     <Container>
//       <Header>
//         <Title onClick={handleToggleDropdown}>
//           منتجاتنا <Arrow open={showDropdown}>▼</Arrow>
//         </Title>
//         <Dropdown show={showDropdown}>
//           <DropdownItem onClick={() => handleScrollTo(singleRef)}>حصة واحدة</DropdownItem>
//           <DropdownItem onClick={() => handleScrollTo(familyRef)}>عبوات عائلية</DropdownItem>
//           <DropdownItem onClick={() => handleScrollTo(eventRef)}>عبوات للمناسبات</DropdownItem>
//         </Dropdown>
//       </Header>
// <BannerImage src="/images/Al_ARZ.png" alt="منتجاتنا" />

//       <div ref={singleRef}>
//         <h2 style={{color:"#1D4F90",textAlign:"center",margin:"50px 50px"}}>حصة واحدة</h2>
//         <ProductList products={singleProducts} onProductClick={handleProductClick} />
//       </div>

//       <div ref={familyRef}>
//         <h2  style={{color:"#1D4F90",textAlign:"center",margin:"50px 50px"}}>عبوات عائلية</h2>
//         <ProductList products={familyProducts} onProductClick={handleProductClick} />
//       </div>

//       <div ref={eventRef}>
//         <h2  style={{color:"#1D4F90",textAlign:"center",margin:"50px 50px"}}>عبوات للمناسبات</h2>
//         <ProductList products={eventProducts} onProductClick={handleProductClick}/>
//       </div>
//             <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />

//     </Container>
//   );
// }

import React, { useState, useRef } from "react";
import ProductList from "../components/ProductList";
import { products } from "../products/products";
import styled from "styled-components";
import ProductModal from "../components/ProductModal"; // استيراد المودال

// ==================== Styled Components ====================
const Container = styled.div`
  padding: 30px 150px;   /* المحتوى تحت يبقى مرتب كما كان */
align-items:center;
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
    width: 100vw;           /* عرض كامل الشاشة */
  height: auto;
  object-fit: cover;
  margin-right: calc(50% - 50vw);  
  margin-left: calc(50% - 50vw);
  display: block;

  @media (max-width: 600px) {
    height: 170px;
    object-position: center;
  }
`


// ==================== Main Component ====================
export default function ProductsPage() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null); // المنتج الحالي في المودال
  const [currentList, setCurrentList] = useState([]);           // القائمة الحالية (single/family/event)

  const singleRef = useRef(null);
  const familyRef = useRef(null);
  const eventRef = useRef(null);

  const handleToggleDropdown = () => setShowDropdown(prev => !prev);
  const handleScrollTo = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
    setShowDropdown(false);
  };

  const singleProducts = products.filter(p => p.category === "single");
  const familyProducts = products.filter(p => p.category === "family");
  const eventProducts = products.filter(p => p.category === "event");

  // فتح المودال وتمرير المنتج والقائمة الحالية
  const handleProductClick = (product, list) => {
    setSelectedProduct(product);
    setCurrentList(list);
  };

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
        <h2 style={{color:"#1D4F90",textAlign:"center",marginTop:"50px"}}>حصة واحدة</h2>
        <ProductList
          products={singleProducts}
          onProductClick={(p) => handleProductClick(p, singleProducts)}
        />
      </div>

      <div ref={familyRef}>
        <h2 style={{color:"#1D4F90",textAlign:"center",margin:"50px 50px"}}>عبوات عائلية</h2>
        <ProductList
          products={familyProducts}
          onProductClick={(p) => handleProductClick(p, familyProducts)}
        />
      </div>

      <div ref={eventRef}>
        <h2 style={{color:"#1D4F90",textAlign:"center",margin:"50px 50px"}}>عبوات للمناسبات</h2>
        <ProductList
          products={eventProducts}
          onProductClick={(p) => handleProductClick(p, eventProducts)}
        />
      </div>

      {/* مودال تفاصيل المنتج مع زر التالي */}
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        productList={currentList}
        setProduct={setSelectedProduct}
      />
    </Container>
  );
}
