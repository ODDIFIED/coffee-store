import Footer from "./Footer";
import React from "react";
import { Banner, Content} from "./styles";
import Navbar from "./Navbar";
import ProductCard from "./ProductCard";
import { useParams } from "react-router-dom";
import { CoffeeDetails } from "../Data"

const ProductPage = () => {
  const params = useParams();
  const coffee = CoffeeDetails.find((cof) => cof.id === Number (params.id));


  return (
    <div>
      <Banner className="head">
        <Navbar />
        <Content>
            <h5>Coffee Menu</h5>
        </Content>
      </Banner>
      <ProductCard coffee={coffee}/> 
      <Footer />
    </div>
  );
};
export default ProductPage;
