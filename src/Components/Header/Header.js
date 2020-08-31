import React, { Component } from "react";
import "./HeaderStyle.scss";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

export class Header extends Component {
  render() {
    return (
      <>
        <div className="header">
          <div className="header_wrapper">
            <div className="header_left">
              <h2>SHOES</h2>
            </div>
            <div className="header_right">
              <ul className="header_links">
                <li className="header-link header-link--active">Home</li>
                <li className="header-link">About</li>
                <li className="header-link">Contact</li>
                <li className="header-link">Products</li>
                <li className="header-link">
                  <ShoppingCartIcon />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Header;
