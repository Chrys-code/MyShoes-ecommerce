import React, { Component } from "react";
import "./CartStyle.scss";
import DeleteIcon from "@material-ui/icons/Delete";
import CloseIcon from "@material-ui/icons/Close";
import Fade from "react-reveal/Fade";

export class Cart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cartIsOpen: this.props.cartIsOpen,
    };
  }

  render() {
    const { cartItems } = this.props;
    return (
      <div
        className={
          "shoppingCart" +
          (this.props.cartIsOpen ? " shoppingCart--active" : "")
        }
      >
        {cartItems.length === 0 ? (
          <>
            <div className="cart cart-header">
              Cart is empty
              <button onClick={this.props.onClickCartHandle} className="close">
                <CloseIcon />
              </button>
            </div>
          </>
        ) : (
          <>
            <div className="cart cart-header">
              You have {cartItems.length} items
              <button onClick={this.props.onClickCartHandle} className="close">
                <CloseIcon />
              </button>
            </div>

            <div className="cart_body">
              <Fade left cascade>
                <ul className="cart_items">
                  {cartItems.map((item) => (
                    <li key={item._id} className="cart-item">
                      <div className="cart_item_image_wapper">
                        <div className="cart_item_image_container">
                          <img src={item.src} alt={item.title} />
                        </div>
                      </div>
                      <div className="cart_item_body">
                        <p>{item.title}</p>
                        <p>Size: {item.size.join(", ")} </p>

                        <p>
                          Price: <span>${item.price}</span>
                        </p>
                        <p>
                          Quantity: <span>{item.count}</span>
                        </p>
                      </div>
                      <button onClick={() => this.props.removeFromCart(item)}>
                        <DeleteIcon style={{ fontSize: "small" }} />
                      </button>
                    </li>
                  ))}
                </ul>
              </Fade>
            </div>
            <div className="cart_info">
              <p>
                Total price: <span>$</span>
                {cartItems.reduce((a, c) => a + c.price * c.count, 0)}
              </p>

              <button onClick={this.props.onClickCheckoutFormHandle}>
                To checkout!
              </button>
            </div>
          </>
        )}
      </div>
    );
  }
}

export default Cart;
