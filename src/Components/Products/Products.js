import React, { Component } from "react";
import "./ProductsStyle.scss";
import Product from "./Product/Product";
import Filter from "./Filter/Filter";
import data from "./Data";

export class Products extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: data,
      size: "",
      sort: "",
    };
  }

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
