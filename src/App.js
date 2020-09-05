import React from "react";
import "./App.scss";
import Header from "./Components/Header/Header";
import Products from "./Components/Products/Products";
import Hero from "./Components/Hero/Hero";
import Footer from "./Components/Footer/Footer";
import store from "./store";
import { Provider } from "react-redux";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cartIsOpen: false,
      checkoutFormIsOpen: false,
    };
  }

  onClickCartHandle = (e) => {
    this.setState({ cartIsOpen: !this.state.cartIsOpen });
  };

  onClickCheckoutFormHandle = (e) => {
    console.log("triggered");
    this.setState({ checkoutFormIsOpen: !this.state.checkoutFormIsOpen });
  };

  render() {
    return (
      <Provider store={store}>
        <div className="app">
          <Header
            cartIsOpen={this.state.cartIsOpen}
            onClickCartHandle={this.onClickCartHandle}
          />
          <div className="app_body">
            <Hero />
            <Products
              onClickCartHandle={this.onClickCartHandle}
              onClickCheckoutFormHandle={this.onClickCheckoutFormHandle}
              cartIsOpen={this.state.cartIsOpen}
              checkoutFormIsOpen={this.state.checkoutFormIsOpen}
            />
            <Footer />
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
