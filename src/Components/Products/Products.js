import React, { Component } from "react";
import "./ProductsStyle.scss";
import Product from "./Product/Product";
import Filter from "./Filter/Filter";
import data from "./Data";
import Cart from "./Cart/Cart";

export class Products extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cartItems: [],
      products: data,
      size: "",
      sort: "",
    };
  }

  removeFromCart = (product) => {
    const cartItems = this.state.cartItems.slice();
    this.setState({
      cartItems: cartItems.filter((x) => x._id !== product._id),
    });
  };

  addToCart = (product) => {
    const cartItems = this.state.cartItems.slice();
    let alreadyExist = false;
    cartItems.forEach((item) => {
      if (item._id === product._id) {
        item.count++;
        alreadyExist = true;
      }
    });
    if (!alreadyExist) {
      cartItems.push({ ...product, count: 1 });
    }
    this.setState({ cartItems });
  };

  sortProducts = (event) => {
    console.log(event.target.value);
    const sort = event.target.value;
    this.setState((state) => ({
      sort: sort,
      products: this.state.products
        .slice()
        .sort((a, b) =>
          sort === "lowest"
            ? a.price > b.price
              ? 1
              : -1
            : sort === "highest"
            ? a.price < b.price
              ? 1
              : -1
            : a._id > b._id
            ? 1
            : -1
        ),
    }));
  };

  filterProducts = (event) => {
    console.log(event.target.value);
    if (event.target.value === "") {
      this.setState({ size: event.target.value, products: data });
    } else {
      this.setState({
        size: event.target.value,
        products: data.filter(
          (data) => data.size.indexOf(event.target.value) >= 0
        ),
      });
    }
  };

  render() {
    return (
      <>
        <div className="card_products container_static">
          <div className="products_title">
            <h1>Products</h1>
          </div>
          <Filter
            count={this.state.products.length}
            size={this.state.size}
            sort={this.state.sort}
            filterProducts={this.filterProducts}
            sortProducts={this.sortProducts}
          />
          <div className="row">
            {this.state.products.map((product, index) => {
              return (
                <Product
                  addToCart={this.addToCart}
                  key={index}
                  product={product}
                />
              );
            })}
          </div>
        </div>
        <Cart
          onClickCartHandle={this.props.onClickCartHandle}
          cartIsOpen={this.props.cartIsOpen}
          cartItems={this.state.cartItems}
          removeFromCart={this.removeFromCart}
        />
      </>
    );
  }
}

export default Products;
