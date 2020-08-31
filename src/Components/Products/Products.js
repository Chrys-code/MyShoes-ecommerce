import React, { Component } from "react";
import "./ProductsStyle.scss";
import Product from "./Product/Product";
import data from "./Data";

export class Products extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: data,
    };
  }

  render() {
    return (
      <>
        <div className="card_products container_static">
          <div className="products_title">
            <h1>Products</h1>
          </div>
          <div className="row">
            {this.state.products.map((product, index) => {
              return (
                <Product
                  key={index}
                  src={product.src}
                  title={product.title}
                  size={product.size}
                  price={product.price}
                />
              );
            })}
          </div>
        </div>
      </>
    );
  }
}

export default Products;
