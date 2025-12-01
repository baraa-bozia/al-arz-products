// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductsPage from "./pages/ProductPage";
import ProductDetail from "./pages/ProductDetail";
import { products } from "./products/products";
import ProductModal from "./components/ProductModal";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ProductsPage products={products}/>} />
        {/* <Route path="/product/:id" element={<ProductDetail />} /> */}
                {/* <Route path="/product/:id" element={<ProductModal />} /> */}

      </Routes>
    </Router>
  );
}

export default App;

