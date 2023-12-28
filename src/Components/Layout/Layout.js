import React from "react";
import Navbar from "../Header/Header";
import Footer from "../Footer/Footer";

const Layout = ({ children, showHeader, showFooter }) => {
  // Assuming Navbar and Footer are correctly imported
  return (
    <div>
      {showHeader && <Navbar />}
      <main>{children}</main>
      {showFooter && <Footer />}
    </div>
  );
};
export default Layout;
