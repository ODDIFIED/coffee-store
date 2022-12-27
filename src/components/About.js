import pic from "../images/Rectangle 6.svg";
import { AboutHeader, ConHolder } from "./styles";

const About = () => {
  return (
    <AboutHeader>
      <h1>About Us</h1>
      <ConHolder>
        <>
          <img src={pic} alt="pic" />
        </>
        <div>
          <>
            <h4>
              "Never trust anyone who doesn't drink coffee." "Our culture runs
              on coffee and gasoline, the first often tasting like the second."
              "Science may never come up with a better office communication
              system than the coffee break." "The smell of fresh-made coffee is
              one of the world's greatest inventions.
            </h4>
          </>
          <>
            <h4>
              "Science may never come up with a better office communication
              system than the coffee break." "The smell of fresh-made coffee is
              one of the world's greatest inventions.
            </h4>
          </>
          <>
            <h6>
              "Science may never come up with a better office communication
              system than the coffee break." "The smell of fresh-made coffee is
              one of the world's greatest inventions.
            </h6>
          </>
        </div>
      </ConHolder>
    </AboutHeader>
  );
};
export default About;
