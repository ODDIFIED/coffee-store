import {CoffeeCon, CoffeeContainer, CoffeeImgCon} from "./styles";



const CoffeeCard = ({holder}) => {
  return (
    <CoffeeCon>
      <h4>Our Menu</h4>
      <CoffeeImgCon>
        <img src="" alt="first" />
      </CoffeeImgCon>
      <CoffeeContainer>
        <h2>{holder.coffee_name}</h2>
        <p>{holder.price}</p>
      </CoffeeContainer>
    </CoffeeCon>
  );
};
export default CoffeeCard;
