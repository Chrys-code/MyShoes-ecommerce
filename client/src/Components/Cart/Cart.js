import React, { Component } from "react";
import "./CartStyle.scss";
import DeleteIcon from "@material-ui/icons/Delete";
import CloseIcon from "@material-ui/icons/Close";
import Fade from "react-reveal/Fade";
import { connect } from "react-redux";
import {
  removeFromCart,
  openCart,
  openCheckoutForm,
} from "../../actions/cartActions";

class Cart extends Component {
  render() {
    const { cartItems, isOpen } = this.props;
    return (
      <div className={"shoppingCart" + (isOpen ? " shoppingCart--active" : "")}>
        {cartItems.length === 0 ? (
          <>
            <div className="cart cart-header">
              Cart is empty
              <button onClick={this.props.openCart} className="close">
                <CloseIcon />
              </button>
            </div>
          </>
        ) : (
          <>
            <div className="cart cart-header">
              You have {cartItems.length} items
              <button onClick={this.props.openCart} className="close">
                <CloseIcon />
              </button>
            </div>

            <div className="cart_body">
              <Fade left cascade>
                <ul className="cart_items">
                  {cartItems.map((product) => (
                    <li key={product._id} className="cart-item">
                      <div className="cart_item_image_wapper">
                        <div className="cart_item_image_container">
                          <img src={product.src} alt={product.title} />
                        </div>
                      </div>
                      <div className="cart_item_body">
                        <p>{product.title}</p>
                        <p>Size: {product.size.join(", ")} </p>

                        <p>
                          Price: <span>${product.price}</span>
                        </p>
                        <p>
                          Quantity: <span>{product.count}</span>
                        </p>
                      </div>
                      <button
                        onClick={() => this.props.removeFromCart(product)}
                      >
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

              <button onClick={this.props.openCheckoutForm}>
                To checkout!
              </button>
            </div>
          </>
        )}
      </div>
    );
  }
}

export default connect(
  (state) => ({
    isOpen: state.cartState.isOpen,
    products: state.products.filteredItems,
    cartItems: state.cart.cartItems,
  }),
  {
    removeFromCart,
    openCart,
    openCheckoutForm,
  }
)(Cart);
