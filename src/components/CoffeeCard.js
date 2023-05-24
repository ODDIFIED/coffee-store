import { Link } from "react-router-dom";
import {  CoffeeCon, CoffeeImgCon, ItemContainer } from "./styles";
import { useContext } from "react";
import CoffeeContext from "../Context/CoffeeContext";


const CoffeeCard = ({ coffee  }) => {
  const { addToCart } = useContext(CoffeeContext)
  const { Img ,  id , coffee_name , price}  = coffee
  return (
    <CoffeeCon key={coffee.id}>
      <Link to={`/ProductPage/${coffee.id}`}>
      <CoffeeImgCon>
        <img src={ Img } alt="first" />
      </CoffeeImgCon>
      </Link>
      <ItemContainer>
        <div className="coffee-cart">
          <h5>{ coffee_name }</h5>
          <button onClick={() => addToCart(coffee)}>Add To Cart</button>
        </div>
        <p>${ price }</p>
      </ItemContainer>
    </CoffeeCon>
  );
};
export default CoffeeCard;
