import { FooterHold, LogoContainer } from "./styles";
import { RiFacebookBoxFill } from "react-icons/ri";
import { FaLinkedinIn } from "react-icons/fa";

import { GiCoffeeCup } from "react-icons/gi";
import { BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { GrFacebookOption } from "react-icons/gr";
const Footer = () => {
  return (
    <FooterHold>
      <div className="big-container">
        <div>
          <LogoContainer>
            <GiCoffeeCup style={{ color: "white", fontSize: "25px" }} />
            <h6>CoffeeStore</h6>
          </LogoContainer>
          <div>
            <h5 className="foot-text">
              {
                "Never trust anyone who doesn't drink coffee,Our culture runs on coffee and gasoline, the first often tasting like the second. "
              }
            </h5>
          </div>
        </div>
        <div>
          <b>Quick Link</b>
          <div>
            <h5>Home</h5>
            <h5>About</h5>
            <h5>Menu</h5>
            <h5>Contact</h5>
          </div>
        </div>
        <div>
          <b>Contact Info</b>
          <h5>+12345676545,+12345676545</h5>
          <>
            <h5>coffeestore@gmail.com </h5>
            <h5>teeplace@gmail.com"</h5>
          </>
          <h5>Copper city,New york</h5>

          <div className="icon-folder">
            <GrFacebookOption
              style={{ backgroundColor: "grey", fontSize: "25px" }}
            />
            <BsTwitter style={{ backgroundColor: "grey", fontSize: "25px" }} />
            <AiFillInstagram
              style={{ backgroundColor: "grey", fontSize: "25px" }}
            />
            <FaLinkedinIn
              style={{ backgroundColor: "grey", fontSize: "25px" }}
            />
          </div>
        </div>
        <div className="right-holder">
          <h5>Designed by Tetomadesign | All Right Reserved</h5>
        </div>
      </div>
    </FooterHold>
  );
};
export default Footer;
