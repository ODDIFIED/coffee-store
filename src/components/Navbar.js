import { useContext } from "react";
import { BsCart3 } from "react-icons/bs";
import { GiCoffeeCup } from "react-icons/gi";
import { Link } from "react-router-dom";
import CoffeeContext from "../Context/CoffeeContext";

import { LogoContainer, NavContainer, NavItems } from "./styles";

const Navbar = () => {
  const { addedCoffee } = useContext(CoffeeContext);
  return (
    <NavContainer>
      <LogoContainer>
        <GiCoffeeCup style={{ color: "white", fontSize: "25px" }} />
        <h6>CoffeeStore</h6>
      </LogoContainer>
      <NavItems>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/menu">Menu</Link>
        <Link to="#">Services</Link>
      </NavItems>
      <Link to="/Cart/" className="cart">
        <BsCart3 style={{ color: "white", fontSize: "30px" }} />
        <span >{addedCoffee.length}</span>
      </Link>
    </NavContainer>
  );
};

export default Navbar;
