import logo from "../images/Logo.svg";
import { BsCart3 } from "react-icons/bs";
import { GiCoffeeCup } from "react-icons/gi";

import { LogoContainer, NavContainer, NavItems } from "./styles";

const Navbar = () => {
  return (
    <NavContainer>
      <LogoContainer>
        <GiCoffeeCup style={{color:"white",fontSize:"25px"}} />
        <h6>CoffeeStore</h6>
      </LogoContainer>
      <NavItems>
        <a href="#">Home</a>
        <a href="#">Menu</a>
        <a href="#">About</a>
        <a href="#">Services</a>
      </NavItems>
      <BsCart3 style={{color:"white",fontSize:"30px"}}/>
    </NavContainer>
  );
};

export default Navbar;
