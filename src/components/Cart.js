// import { useContext } from "react";
import CartCard from "./CartCard";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { Banner, Content } from "./styles";
import { CoffeeDetails } from "../Data";



const Cart = (item) => {
  // const { addedCoffee } = useContext(CoffeeContext);

  return (
    <div>
      <Banner className="head">
        <Navbar />
        <Content>
          <h5>Cart</h5>
        </Content>
      </Banner>
      <CartCard item={ CoffeeDetails }key={item.id} />
      <Footer />
    </div>
  );
};
export default Cart;
