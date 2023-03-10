import { CoffeeCon, CoffeeImgCon, ItemContainer } from "./styles";




const CoffeeCard = ({ coffee }) => {
  return (
    <CoffeeCon>
      <CoffeeImgCon>
        <img src={ coffee.Img } alt="first" />
      </CoffeeImgCon>
      <ItemContainer>
        <div className="coffee-cart">
          <h5>{coffee.coffee_name}</h5>
          <button>Add to cart</button>
        </div>
        <p>${coffee.price}</p>
      </ItemContainer>
    </CoffeeCon>
  );
};
export default CoffeeCard;
