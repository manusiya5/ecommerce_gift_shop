import Carousel from "./Carousel.tsx";
import Shop from "../shop/Shop.tsx";
import NewAd from "./NewAd.tsx";
import WhyUs from "../whyUs/Whyus.tsx"
import {ads} from "./allAd.tsx"
import Contact from "../contact/contact.tsx";
import Testimonial from "../testimonal/testimonial.tsx";
function Home() {
  return (
    <>
      <Carousel />
      <Shop limit={6} showActions={false}/>
      <NewAd ad={ads[0]}/>
      <WhyUs />
      <NewAd ad={ads[1]}/>
      <Testimonial />
      <Contact />
    </>
  );
}

export default Home;
