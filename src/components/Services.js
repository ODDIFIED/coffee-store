import { ServiceDetails } from "../ServiceData";
import ServiceCard from "./ServiceCard";
import { CoffeeHolder } from "./styles";

const Services = () => {
  return (
    <CoffeeHolder>
      <h4 className="sp">OUR SERVICES</h4>
      <div className="item-grid">
        {ServiceDetails.map((holder)=>{
            return <ServiceCard holder={holder}/>
        })}
        </div>
    </CoffeeHolder>
  );
};
export default Services;
