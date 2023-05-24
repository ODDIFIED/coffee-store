import About from "./About";
import CoffeeMenu from "./CoffeeMenu";
import Header from "./Header";
import '../App.css';
import Services from "./Services";
import Contact from "./Contact";
import Footer from "./Footer";


const Home = () => {
  return (
    <>
      <Header />
      <About />
      <Services />
      <CoffeeMenu />
      <Contact />
      <Footer />
    </>
  );
};
export default Home;
