import React from "react";
import "./FooterStyle.scss";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import PhoneIcon from "@material-ui/icons/Phone";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import EmailIcon from "@material-ui/icons/Email";
import TwitterIcon from "@material-ui/icons/Twitter";

function Footer() {
  return (
    <footer className="footer_card">
      <div className="footer_container container_static">
        <div className="row">
          <div className="footer_left col-xlg-4 col-xlg-4 col-lg-12 col-md-12 col-sm-12 col-xsm-12">
            <h4>LET US HELP YOU</h4>
            <p>Delivery & collection</p>
            <p>Returns & refunds</p>
            <p>Privacy</p>
            <p>Environmental Policy</p>
          </div>

          <div className="footer_middle col-xlg-4 col-xlg-4 col-lg-12 col-md-12 col-sm-12 col-xsm-12">
            <div className="icons">
              <div className="icon">
                <InstagramIcon />
              </div>
              <div className="icon">
                <FacebookIcon />
              </div>
              <div className="icon">
                <TwitterIcon />
              </div>
            </div>
            <a target="_blank" href="https://chrys-code.github.io/portfolio/#/">
              <h3>2020@ Krisztian Nagy</h3>
            </a>
          </div>

          <div className="footer_right  col-xlg-4 col-xlg-4 col-lg-12 col-md-12 col-sm-12 col-xsm-12">
            <div className="contact">
              <PhoneIcon />
              <p>(+44) 77 00000 000</p>
            </div>
            <div className="email">
              <EmailIcon />
              <p>customerservices@MyShoes.com</p>
            </div>
            <div className="location">
              <LocationOnIcon />
              <p>Southampton</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
