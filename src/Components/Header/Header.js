import React, { Component } from "react";
import "./HeaderStyle.scss";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import MenuIcon from "@material-ui/icons/Menu";
import MenuOpenIcon from "@material-ui/icons/MenuOpen";

export class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      menuIconDisplayStyle: { display: "block" },
      menuOpenIconDisplayStyle: { display: "none" },
      headerHeightStyle: { transition: "1s ease-in-out" },
    };
  }

  onClickHandle(e) {
    const target = e.target;
    console.log(target);
    this.setState({
      menuIconDisplayStyle: { display: "none" },
      menuOpenIconDisplayStyle: { display: "block" },
      headerHeightStyle: { ...this.state.headerHeightStyle, height: "300px" },
    });
  }

  onClickHandleSecond(e) {
    const target = e.target;
    console.log(target);
    this.setState({
      menuIconDisplayStyle: { display: "block" },
      menuOpenIconDisplayStyle: { display: "none" },
      headerHeightStyle: { ...this.state.headerHeightStyle, height: "" },
    });
  }

  render() {
    const menuShow = this.state.menuIconDisplayStyle;
    const menuOpenShow = this.state.menuOpenIconDisplayStyle;
    const headerShow = this.state.headerHeightStyle;

    return (
      <>
        <div style={headerShow} className="header">
          <div className="header_wrapper">
            <div className="header_left">
              <h2>MyShoes</h2>
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

export default Header;
