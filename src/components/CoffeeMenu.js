import { CoffeeHolder } from "./styles";
import { CoffeeDetails } from "../Data.js";
import CoffeeCard from "./CoffeeCard";

const CoffeeMenu = () => {
  return (
    <CoffeeHolder>
      <h4>OUR MENU</h4>
      <div className="item-grid">
        {CoffeeDetails.map((coffee) => {
          return <CoffeeCard coffee={coffee} key={coffee.id} />;
        })}
      </div>
    </CoffeeHolder>
  );
};
export default CoffeeMenu;
