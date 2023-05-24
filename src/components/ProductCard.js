import { useContext } from "react";
import CoffeeContext from "../Context/CoffeeContext";

import { AboutHeader, CoffeeImgCon, ConHolders, ProductLeft } from "./styles";

const ProductCard = ({ coffee }) => {
  const { addToCart } = useContext(CoffeeContext);

  return (
    <AboutHeader>
      <ConHolders>
        <CoffeeImgCon className="product-imgcard">
          <img src={coffee.Img} alt="first" />
        </CoffeeImgCon>
        <ProductLeft>
          <h1> {coffee.coffee_name} </h1>
          <p>
            "Never trust anyone who doesn't drink coffee,Our culture runs on
            coffee and gasoline, the first often tasting like the second.",
          </p>
          <span>Available</span>
          <div className="price_tag">
            <h2>${coffee.price}</h2>
            <button onClick={() => addToCart(coffee)}>Add To Cart</button>
          </div>
        </ProductLeft>
      </ConHolders>
    </AboutHeader>
  );
};
export default ProductCard;
