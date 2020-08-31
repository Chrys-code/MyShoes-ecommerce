import React, { Component } from "react";
import "./ProductStyle.scss";

export class Product extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="col-xxlg-3 col-xlg-3 col-lg-4 col-md-6 col-sm-6 col-xsm-12">
        <div className="product">
          <div className="product_top">
            <h4>{this.props.title}</h4>

            <div className="product_image_wrapper">
              <div className="product_image_container">
                <img src={this.props.src} alt="" />
              </div>
            </div>
          </div>
          <div className="product_middle">
            <p>Sizes: {this.props.size}</p>

            <p>Price: {this.props.price}</p>
          </div>
          <div className="product_bottom">
            <p>Available</p>
            <button>Add to basket!</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Product;
