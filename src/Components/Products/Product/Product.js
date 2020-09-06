import React, { Component } from "react";
import "./ProductStyle.scss";
import { connect } from "react-redux";
import { addToCart } from "../../../actions/cartActions";

class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: null,
    };
  }

  render() {
    return (
      <div className="col-xxlg-3 col-xlg-3 col-lg-4 col-md-6 col-sm-6 col-xsm-12">
        <div className="product">
          <div className="product_top">
            <h4>{this.props.product.title}</h4>
            <div className="product_image_wrapper">
              <div className="product_image_container">
                <a
                  href={"#" + this.props.product._id}
                  onClick={() => this.props.openModal(this.props.product)}
                >
                  <img
                    src={this.props.product.src}
                    alt={this.props.product.title}
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="product_middle">
            <p>Sizes: {this.props.product.size.join(", ")}</p>
            <p>
              Price: <span>$</span>
              {this.props.product.price}{" "}
            </p>
          </div>
          <div className="product_bottom">
            <p>Available</p>
            <button onClick={() => this.props.addToCart(this.props.product)}>
              <p>Add to basket!</p>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  (state) => ({
    cartItems: state.cart.cartItems,
  }),
  {
    addToCart,
  }
)(Product);
