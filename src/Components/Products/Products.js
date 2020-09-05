import React, { Component } from "react";
import "./ProductsStyle.scss";
import Product from "./Product/Product";
import Filter from "./Filter/Filter";
import data from "./Data";
import Cart from "./Cart/Cart";
import CheckoutForm from "./CheckoutForm/CheckoutForm";
import Fade from "react-reveal/Fade";
import Modal from "react-modal";
import Zoom from "react-reveal/Zoom";
import CloseIcon from "@material-ui/icons/Close";

export class Products extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cartItems: localStorage.getItem("cartItems")
        ? JSON.parse(localStorage.getItem("cartItems"))
        : [],
      products: data,
      product: null,
      size: "",
      sort: "",
    };
  }

  openModal = (product) => {
    this.setState({ product });
  };

  closeModal = () => {
    this.setState({ product: null });
  };

  createOrder = (order) => {
    alert("Need to save order for " + order.name);
  };

  removeFromCart = (product) => {
    const cartItems = this.state.cartItems.slice();
    this.setState({
      cartItems: cartItems.filter((x) => x._id !== product._id),
    });
    localStorage.setItem(
      "cartItems",
      JSON.stringify(cartItems.filter((x) => x._id !== product._id))
    );
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
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
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
    const { product, products, size, sort } = this.state;
    return (
      <>
        <div className="card_products container_static">
          <div className="products_title">
            <h1>Products</h1>
          </div>
          <Filter
            count={products.length}
            size={size}
            sort={sort}
            filterProducts={this.filterProducts}
            sortProducts={this.sortProducts}
          />
          <div className="row">
            <Fade bottom big>
              <ul>
                {products.map((product) => {
                  return (
                    <li key={product._id}>
                      <Product
                        addToCart={this.addToCart}
                        product={product}
                        openModal={this.openModal}
                        closeModal={this.closeModal}
                      />
                    </li>
                  );
                })}
              </ul>
            </Fade>
          </div>
          {product && (
            <Modal
              ariaHideApp={false}
              isOpen={true}
              onRequestClose={this.closeModal}
              style={{
                overlay: { marginTop: "50px" },
                content: {
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                },
              }}
            >
              <Zoom>
                <div className="modal">
                  <button className="modal_close" onClick={this.closeModal}>
                    <CloseIcon />
                  </button>
                  <div className="modal_product_details">
                    <div className="modal_img_wrapper">
                      <div className="modal_img_container">
                        <img src={product.src} alt={product.title} />
                      </div>
                    </div>
                    <div className="modal_product_details_description">
                      <div className="product_description_body">
                        <p>
                          <strong>{product.title}</strong>
                        </p>
                        <p>{product.description}</p>
                        <p>Availabel sizes: {product.size.join(", ")}</p>
                      </div>
                      <div className="product_price">
                        <div>${product.price}</div>
                        <button
                          className="btn primary"
                          onClick={() => {
                            this.addToCart(product);
                            this.closeModal();
                          }}
                        >
                          Add To Cart
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </Zoom>
            </Modal>
          )}
        </div>
        <Cart
          onClickCartHandle={this.props.onClickCartHandle}
          onClickCheckoutFormHandle={this.props.onClickCheckoutFormHandle}
          cartIsOpen={this.props.cartIsOpen}
          cartItems={this.state.cartItems}
          removeFromCart={this.removeFromCart}
        />
        <CheckoutForm
          onClickCartHandle={this.props.onClickCheckoutFormHandle}
          onClickCheckoutFormHandle={this.props.onClickCheckoutFormHandle}
          checkoutFormOpen={this.props.checkoutFormIsOpen}
          checkoutFormIsOpen={this.props.checkoutFormIsOpen}
          createOrder={this.createOrder}
        />
      </>
    );
  }
}

export default Products;
