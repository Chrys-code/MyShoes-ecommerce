import React from "react";
import "./App.scss";
import Header from "./Components/Header/Header";
import Products from "./Components/Products/Products";
import Hero from "./Components/Hero/Hero";
import Footer from "./Components/Footer/Footer";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cartIsOpen: false,
    };
  }

  onClickCartHandle = (e) => {
    this.setState({ cartIsOpen: !this.state.cartIsOpen });
  };

  render() {
    return (
      <div className="app">
        <Header
          cartIsOpen={this.state.cartIsOpen}
          onClickCartHandle={this.onClickCartHandle}
        />
        <div className="app_body">
          <Hero />
          <Products
            onClickCartHandle={this.onClickCartHandle}
            cartIsOpen={this.state.cartIsOpen}
          />
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
