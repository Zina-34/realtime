
import React from 'react'
import "./App.scss";
import digital5 from "./assets/digital5.jpg";
import digital2 from "./assets/digital2.jpg";
import digital3 from "./assets/digital3.jpg";
import Hero from "./components/Hero";
import Slider from "./components/Slider";
import Navbar from "./components/Navbar";
// import Cart from './components/Cart';


export default function App() {
  return (
    <div className="App">
    <Navbar />
      <Hero  imageSrc={digital5} />
      <Slider imageSrc={digital2}  title={"Dont Miss Out.."} subtitle={"Waiting for perfect is never as smart as making progress"} />

      <Slider imageSrc={digital3}  title={"Your brand is not what you sell."} subtitle={""} flipped={true}/>  

     {/* <Cart /> */}
      
    </div>
  )
}

