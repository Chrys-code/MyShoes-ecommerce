import React from "react";
import "./App.scss";
import Header from "./Components/Header/Header";
import Products from "./Components/Products/Products";
import Hero from "./Components/Hero/Hero";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="app">
      <Header />
      <div className="app_body">
        <Hero />
        <Products />
        <Footer />
      </div>
    </div>
  );
}

export default App;
