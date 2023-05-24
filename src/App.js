import { Route, Routes } from "react-router-dom";
import React from "react";
import About from "./components/About";
import Home from "./components/Home";
import ProductPage from "./components/ProductPage";
import CoffeeMenu from "./components/CoffeeMenu";
import Cart from "./components/Cart"
import { CoffeeProvider } from "./Context/CoffeeContext";

function App() {
  return (
    <div className="App">
      <CoffeeProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<CoffeeMenu />} />
        <Route path="/Cart" element={<Cart />}  />
        <Route path="/ProductPage/:id" element={<ProductPage />} />
      </Routes>
      </CoffeeProvider>
    </div>
  );
}

export default App;
