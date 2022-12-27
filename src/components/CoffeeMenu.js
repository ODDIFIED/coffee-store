import { CoffeeDetails } from "../Data";
import { ItemContainer } from "./styles"
const CoffeeMenu = () => {
  return (
    <CoffeeMenu>
      <h4>Our Menu</h4>

      <ItemContainer>
        {CoffeeDetails.map((holder) => {
          return <CoffeeDetails holder={holder.price} />;
        })}
      </ItemContainer>
    </CoffeeMenu>
  );
};
export default CoffeeMenu;
