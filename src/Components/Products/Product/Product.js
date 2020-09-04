import React, { Component } from "react";
import "./ProductStyle.scss";
import { setInStorage } from "../../../utils/Storage";

export class Product extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="col-xxlg-3 col-xlg-3 col-lg-4 col-md-6 col-sm-6 col-xsm-12">
        <div className="product">
          <div className="product_top">
            <h4>{this.props.product.title}</h4>
            <div className="product_image_wrapper">
              <div className="product_image_container">
                <img
                  src={this.props.product.src}
                  alt={this.props.product.title}
                />
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

export default Product;
