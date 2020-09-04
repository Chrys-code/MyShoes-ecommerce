import React, { Component } from "react";
import "./CheckoutForm.scss";
import CloseIcon from "@material-ui/icons/Close";

export class CheckoutForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      name: "",
      address: "",
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const order = {
      name: this.state.name,
      email: this.state.email,
      address: this.state.address,
      cartItems: this.props.cartItems,
    };
    this.props.createOrder(order);
  };

  handleInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    return (
      <div
        className={
          "checkoutForm" +
          (this.props.checkoutFormOpen ? " checkoutForm--active" : "")
        }
      >
        <div className="checkoutForm-header">
          Checkout
          <button
            onClick={this.props.onClickCheckoutFormHandle}
            className="close"
          >
            <CloseIcon />
          </button>
        </div>

        <div className="checkoutForm_body">
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="email">
              Email: <br />
              <input
                name="email"
                type="text"
                placeholder="Email"
                required
                onChange={this.handleInput}
              />
            </label>
            <label htmlFor="name">
              Name: <br />
              <input
                name="name"
                type="text"
                placeholder="Name"
                required
                onChange={this.handleInput}
              />
            </label>
            <label htmlFor="address">
              Address: <br />
              <input
                name="address"
                type="text"
                placeholder="Address"
                required
                onChange={this.handleInput}
              />
            </label>
            <div className="checkoutFrom_info">
              <button type="submit">Checkout</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default CheckoutForm;
