import { CoffeeCon, CoffeeImgCon, ItemContainer } from "./styles";

const ServiceCard = ({ holder }) => {
  return (
    <CoffeeCon>
      <CoffeeImgCon>
        <img src={holder.Img} alt="first" />
      </CoffeeImgCon>
      <ItemContainer>
        <div className="coffee-cart">
          <h5>{holder.coffee_name}</h5>
        </div>
          <p className="pp">{holder.coffee_des}</p>
      </ItemContainer>
    </CoffeeCon>
  );
};
export default ServiceCard;
