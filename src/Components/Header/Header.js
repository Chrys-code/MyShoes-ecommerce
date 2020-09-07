import React, { Component } from "react";
import "./HeaderStyle.scss";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import MenuIcon from "@material-ui/icons/Menu";
import MenuOpenIcon from "@material-ui/icons/MenuOpen";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { openCart } from "../../actions/cartActions";

export class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      menuIconDisplayStyle: { display: "block" },
      menuOpenIconDisplayStyle: { display: "none" },
      headerHeightStyle: {},
      isOpen: false,
      about: "",
      contact: "",
      home: "header-link--active",
      admin: "",
    };
  }

  onClickHandle(e) {
    this.setState({
      menuIconDisplayStyle: { display: "none" },
      menuOpenIconDisplayStyle: { display: "block" },
      isOpen: true,
    });
  }

  onClickHandleSecond(e) {
    this.setState({
      menuIconDisplayStyle: { display: "block" },
      menuOpenIconDisplayStyle: { display: "none" },
      isOpen: false,
    });
  }

  render() {
    const menuShow = this.state.menuIconDisplayStyle;
    const menuOpenShow = this.state.menuOpenIconDisplayStyle;

    return (
      <>
        <div
          className={"header" + (this.state.isOpen ? " header--active" : "")}
        >
          <div className="header_wrapper">
            <div className="header_left">
              <h2>MyShoes</h2>
            </div>
            <div className="header_right">
              <ul className="header_links">
                <Link
                  to="/"
                  onClick={() =>
                    this.setState({
                      home: "header-link--active",
                      about: "",
                      contact: "",
                      admin: "",
                      isOpen: false,
                    })
                  }
                >
                  <li className={"header-link " + this.state.home}>Home</li>
                </Link>

                <Link
                  to="/About"
                  onClick={() =>
                    this.setState({
                      home: "",
                      about: "header-link--active",
                      contact: "",
                      admin: "",

                      isOpen: false,
                    })
                  }
                >
                  <li className={"header-link " + this.state.about}>About</li>
                </Link>
                <Link
                  to="/Admin"
                  onClick={() =>
                    this.setState({
                      home: "",
                      about: "",
                      contact: "",
                      admin: "header-link--active",
                      isOpen: false,
                    })
                  }
                >
                  <li className={"header-link " + this.state.admin}>Admin</li>
                </Link>

                <li
                  className={
                    "header-link" +
                    (this.props.cartIsOpen ? " header-link--active" : "")
                  }
                  onClick={this.props.openCart}
                >
                  <ShoppingCartIcon />
                </li>
              </ul>
            </div>
            <div className="burger_cont">
              <div
                className="menu"
                style={menuShow}
                onClick={(e) => this.onClickHandle(e)}
              >
                <MenuIcon className="icon" />
              </div>
              <div
                className="menuOpen"
                style={menuOpenShow}
                onClick={(e) => this.onClickHandleSecond(e)}
              >
                <MenuOpenIcon className="icon" />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default connect(
  (state) => ({
    isOpen: state.cart.isOpen,
  }),
  {
    openCart,
  }
)(Header);
