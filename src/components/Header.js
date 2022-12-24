import Navbar from "./Navbar";
import { Banner, Content } from "./styles";


const Header = () => {
  return (
    <Banner className="head">
      <Navbar />
      <Content>
        <h4>A Cup Of Coffee For Everyone.</h4>
        <p>We Don’t Make Your Coffee, We Make Your Day.</p>
        <div className="btn">
        <button>VIEW MENU</button>
        </div>
      </Content>
    </Banner>
  );
};

export default Header