import React from "react";

import "./App.css";

import decore from './assets/images/Decore.svg'

import {
  Navbar,
  Hero,
  Category,
  TopSelling,
  Testimonials,
  Brands,
  Subscribe,
  Footer,
} from "./components";

const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <img className="decore" src={decore} alt="decore"/>
      <Navbar />
      <Hero />
      </div>
      <div className="gradient__bg_1">
      <Category />
      <TopSelling />
      </div>
      <Testimonials />
      <Brands />
      <div className="gradient__bg_2">
      <Subscribe />
      </div>
      <Footer />
    </div>
  );
};

export default App;
