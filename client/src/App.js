import React from "react";
import "./App.scss";
import Header from "./Components/Header/Header";
import Products from "./Components/Products/Products";
import Hero from "./Components/Hero/Hero";
import Footer from "./Components/Footer/Footer";
import store from "./store";
import { Provider } from "react-redux";
import { Route, Switch } from "react-router-dom";
import Fade from "react-reveal/Fade";
import About from "./About";
import Admin from "./Admin";
import Cart from "./Components/Cart/Cart";
import CheckoutForm from "./Components/CheckoutForm/CheckoutForm";

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <div className="app">
          <Header />
          <Cart />
          <CheckoutForm />
          <div className="app_body">
            <Route
              render={({ location }) => (
                <Switch location={location} key={location.key}>
                  <Route path="/" exact component={Home} />

                  <Route path="/About" component={About} />
                  <Route path="/Admin" component={Admin} />
                </Switch>
              )}
            />
          </div>
          <Footer />
        </div>
      </Provider>
    );
  }
}
class Home extends React.Component {
  render() {
    return (
      <>
        <Fade>
          <Hero />
          <Products />
        </Fade>
      </>
    );
  }
}

export default App;
