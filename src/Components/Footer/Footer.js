// Footer.js
import React from "react";

function Footer() {
  return (
    <footer className="w3l-footer-29-main" id="contact">
      <div className="footer-29 py-5">
        <div className="container">
          <div className="row footer-top-29-grids">
            <div className="col-lg-6 col-12 footer-grid">
              <div className="footer-grid-innv">
                <h2>
                  <a className="logo-icon" href="/">
                    <img
                      src="assets/images/logo.png"
                      alt="logo"
                      className="img-fluid"
                    />
                    <span>Write.link</span>
                  </a>
                </h2>
                <p className="footer-p">
                  Write blogs that live forever on the decentralized web. Giving
                  power back to the Writers.
                </p>
                <div className="main-social-footer-29 mt-4">
                  <a
                    href="https://www.instagram.com/onew3com/"
                    className="instagram"
                  >
                    <span className="fab fa-instagram"></span>
                  </a>
                  <a
                    href="https://www.facebook.com/1W3io/"
                    className="facebook"
                  >
                    <span className="fab fa-facebook-f"></span>
                  </a>
                  <a href="https://twitter.com/1w3io" className="twitter">
                    <span className="fab fa-twitter"></span>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-6 footer-grid mt-lg-0 mt-4">
              <h4 className="footer-title-29">Storage</h4>
              <div className="footer-listw3-grids">
                <ul className="footer-listw3">
                  <li>
                    <a href="#arweave" target="_blank">
                      Arweave
                    </a>
                  </li>
                  <li>
                    <a href="#ipfs" target="_blank">
                      IPFS
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-2 col-6 footer-grid mt-lg-0 mt-4">
              <h4 className="footer-title-29">Domains</h4>
              <div className="footer-listw3-grids">
                <ul className="footer-listw3">
                  <li>
                    <a href="#ens" target="_blank">
                      ENS
                    </a>
                  </li>
                  <li>
                    <a href="#space" target="_blank">
                      Space ID
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-2 col-6 footer-grid mt-lg-0 mt-4">
              <h4 className="footer-title-29">Other</h4>
              <div className="footer-listw3-grids">
                <ul className="footer-listw3">
                  <li>
                    <a href="#terms" target="_blank">
                      Terms & Conditions
                    </a>
                  </li>
                  <li>
                    <a href="#support" target="_blank">
                      Support
                    </a>
                  </li>
                  <li>
                    <a href="#blog" target="_blank">
                      Blog
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
