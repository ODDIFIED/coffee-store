import { ContactPage } from "./styles";
import { ContactDetails } from "../ServiceData";
import ContactCard from "./ContactCard";
const Contact = () => {
  return (
    <ContactPage>
      <h4>Contact Us</h4>
      <div className="item-holder">
        {ContactDetails.map((holder) =>{
            return <ContactCard holder={holder }  />
        })}
      </div>
    </ContactPage>
  );
};
export default Contact;
