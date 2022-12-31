import About from "./About";
import CoffeeMenu from "./CoffeeMenu";
import Header from "./Header";
import '../App.css';
import Services from "./Services";
import Contact from "./Contact";


const Home = () => {
  return (
    <>
      <Header />
      <About />
      <Services />
      <CoffeeMenu />
      <Contact />
    </>
  );
};
export default Home;
