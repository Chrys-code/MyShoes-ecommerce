import React, { Component } from "react";
import "./ProductsStyle.scss";
import Product from "./Product/Product";
import Filter from "./Filter/Filter";
import Cart from "./Cart/Cart";
import CheckoutForm from "./CheckoutForm/CheckoutForm";
import Fade from "react-reveal/Fade";
import Modal from "react-modal";
import Zoom from "react-reveal/Zoom";
import CloseIcon from "@material-ui/icons/Close";
import { connect } from "react-redux";
import { fetchProducts } from "../../actions/productActions";
import { addToCart } from "../../actions/cartActions";
import { createOrder, clearOrder } from "../../actions/orderActions";

class Products extends Component {
  constructor(props) {
    super(props);

    this.state = {
      product: null,
    };
  }

  componentDidMount() {
    this.props.fetchProducts();
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

  render() {
    const { product } = this.state;
    return (
      <>
        <div className="card_products container_static">
          <div className="products_title">
            <h1>Products</h1>
          </div>
          <Filter />
          <div className="row">
            <Fade bottom big>
              {!this.props.products ? (
                <div>Loading...</div>
              ) : (
                <ul>
                  {this.props.products.map((product) => {
                    return (
                      <li key={product._id}>
                        <Product
                          product={product}
                          addToCart={this.addToCart}
                          openModal={this.openModal}
                        />
                      </li>
                    );
                  })}
                </ul>
              )}
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
              <button className="modal_close" onClick={this.closeModal}>
                <CloseIcon />
              </button>

              <Zoom>
                <div className="modal">
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
                            this.props.addToCart(product);
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
        />
        <CheckoutForm
          closeUp={this.props.closeUp}
          onClickCheckoutFormHandle={this.props.onClickCheckoutFormHandle}
          checkoutFormOpen={this.props.checkoutFormIsOpen}
          checkoutFormIsOpen={this.props.checkoutFormIsOpen}
        />
      </>
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
    fetchProducts,
    addToCart,
    createOrder,
    clearOrder,
  }
)(Products);
