import "./App.css";
import AboutUs from "./blocks/AboutUs";
import Gallery from "./blocks/Gallery";
import Reviews from "./blocks/Reviews";
import FAQ from "./blocks/FAQ";
import Contacts from "./blocks/Contacts";
import Price from "./blocks/Price";
import { Element } from "react-scroll";
import { useEffect } from "react";

function App() {
  useEffect(()=>{
    window.scrollTo(0, 1);
  },[])
  return (
    <div className="z-20">
      <Element name="about">
        <AboutUs />
      </Element>
      <Element name="gallery">
        <Gallery />
      </Element>
      <Element name="price">
        <Price />
      </Element>
      <Element name="reviews">
        <Reviews />
      </Element>
      <Element name="faq">
        <FAQ />
      </Element>
      <Element name="contacts">
        <Contacts />
      </Element>
    </div>
  );
}

export default App;
