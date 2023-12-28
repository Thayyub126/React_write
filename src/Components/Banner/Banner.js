// HomeBanner.js
import React from "react";

function HomeBanner() {
  return (
    <section className="w3lbanner-top position-relative" id="home">
      <div className="container">
        <div className="w3lbanner-info">
          <h1>
            <span>Write Blogs</span>
            <label className="fontitalicw3">Live Forever</label> on the
            decentralized web.
          </h1>
          <p className="banner-parav mb-4">
            Independent writers can now publish stories directly to the
            decentralized web, making the blogs live forever and be free of
            censorship.
          </p>
          <div className="banner-btns text-center">
            <a
              href="https://app.1w3.io/"
              target="_blank"
              className="btn btn-style"
            >
              Start Writing
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeBanner;
