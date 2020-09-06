import React, { Component } from "react";
import "./CheckoutForm.scss";
import CloseIcon from "@material-ui/icons/Close";
import { createOrder, clearOrder } from "../../../actions/orderActions";
import { connect } from "react-redux";
import Modal from "react-modal";
import Zoom from "react-reveal/Zoom";

export class CheckoutForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      name: "",
      address: "",
      showModal: true,
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const order = {
      name: this.state.name,
      email: this.state.email,
      address: this.state.address,
      cartItems: this.props.cartItems,
      total: this.props.cartItems.reduce((a, c) => a + c.price * c.count, 0),
    };
    this.props.createOrder(order);
    this.props.closeUp();
  };

  handleInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  closeFormModal = () => {
    this.props.clearOrder();
  };

  render() {
    const { order } = this.props;
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
        {order && (
          <Modal
            ariaHideApp={false}
            isOpen={this.state.showModal}
            onRequestClose={this.closeFormModal}
            style={{
              overlay: { marginTop: "50px" },
              content: {
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              },
            }}
          >
            <button className="modal_close" onClick={this.closeFormModal}>
              <CloseIcon />
            </button>

            <Zoom>
              <div className="order_details">
                <h2 className="success_message">Your order has been placed!</h2>
                <h3>Order reference: {order._id}</h3>
                <ul>
                  <li>
                    <div>Name:</div>
                    <div>{order.name}</div>
                  </li>
                  <li>
                    <div>Email:</div>
                    <div>{order.email}</div>
                  </li>
                  <li>
                    <div>Address:</div>
                    <div>{order.address}</div>
                  </li>
                  <li>
                    <div>Date:</div>
                    <div>{order.createdAt}</div>
                  </li>

                  <li>
                    <div>Total:</div>
                    <div>$ {order.total}</div>
                  </li>
                  <li>
                    <div>Cart Items:</div>
                    <div>
                      {order.cartItems.map((x) => (
                        <div key={x._id} className="cart_items">
                          {x.count} {" x "} {x.title}
                        </div>
                      ))}
                    </div>
                  </li>
                </ul>
              </div>
            </Zoom>
          </Modal>
        )}
      </div>
    );
  }
}

export default connect(
  (state) => ({
    order: state.order.order,
    products: state.products.filteredItems,
    cartItems: state.cart.cartItems,
  }),
  {
    createOrder,
    clearOrder,
  }
)(CheckoutForm);
