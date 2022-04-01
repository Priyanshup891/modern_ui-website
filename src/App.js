import React from "react";

import "./App.css";

import decore from './assets/images/Decore.svg'

import {
  Navbar,
  Hero,
  Category,
  TopSelling,
  EasyAndFast,
  Testimonials,
  Brands,
  Subscribe,
  Footer,
} from "./components";

const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        {/* <img className="decore" src={decore} alt="decore"/> */}
      <Navbar />
      <Hero />
      </div>
      {/* <Category />
      <TopSelling />
      <EasyAndFast />
      <Testimonials />
      <Brands />
      <Subscribe />
      <Footer /> */}
    </div>
  );
};

export default App;
