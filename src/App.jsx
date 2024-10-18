import React from "react";
import Hero from "./Components/Hero/Hero";
import Navbar from "./Components/Navbar/Navbar";
import Products from "./Components/Products/Products";
import Aos from "aos";
import "aos/dist/aos.css"  
import TopProducts from "./Components/TopProducts/TopProducts";
import WinterSale from "./Components/WinterSale/WinterSale";
import GetNotified from "./Components/GetNotified/GetNotified";
import Testimonials from "./Components/Testimonials/Testimonials";
import Footer from "./Components/Footer/Footer";

const App = () => {

  const[orderPopoup,setOrderPopup]=React.useState(false);

  const handleOrderPopup =() =>{
    setOrderPopup(!orderPopoup);
  };

  React.useEffect(() => {
    Aos.init({
      offset:100,
      duration: 1000,
      easing: 'ease-in-sine',
      delay: 0,
      mirror: false,
      anchorPlacement: 'top-bottom',
      }
    );
    Aos.refresh();

  }, []);
  return (
    <div >
     <Navbar></Navbar>
     <Hero></Hero>
     <Products></Products>
     <TopProducts></TopProducts>
     <WinterSale></WinterSale>
     <GetNotified></GetNotified>
     <Products></Products>
     <Testimonials></Testimonials>
     <Footer></Footer>

    </div>
  )
}

export default App