// import React, { useState } from "react";
// import { Link, useLocation } from "react-router-dom";
// import { useAccount } from "wagmi";
// function Navbar() {
//   const location = useLocation();
//   const [menuOpen, setMenuOpen] = useState(false);
//   const toggleMenu = () => {
//     setMenuOpen(!menuOpen);
//   };

//   const { address, isConnected } = useAccount();

//   // Determine if the current route is the "Newstorie" page
//   const isNewstoriePage = location.pathname === "/newstorie";

//   return (
//     <header id="site-header" className="fixed-top">
//       <div className="container">
//         <nav className="navbar navbar-expand-lg navbar-light">
//           <Link to="/" className="navbar-brand">
//             <img
//               src="assets/images/logo.png"
//               alt="brand logo"
//               className="img-fluid"
//               style={{ width: "36px", height: "36px" }}
//             />
//             Write.link
//           </Link>
//           <button
//             className={`navbar-toggler ${menuOpen ? "" : "collapsed"}`}
//             type="button"
//             onClick={toggleMenu}
//             aria-controls="navbarScroll"
//             aria-expanded={menuOpen}
//             aria-label="Toggle navigation"
//           >
//             <span
//               className={`navbar-toggler-icon ${
//                 menuOpen ? "fa icon-close fa-times" : "fa icon-expand fa-bars"
//               }`}
//             ></span>
//           </button>
//           <div
//             className={`collapse navbar-collapse ${menuOpen ? "show" : ""}`}
//             id="navbarScroll"
//           >
//             <ul className="navbar-nav mx-lg-auto my-2 my-lg-0 navbar-nav-scroll">
//               {/* <li className="nav-item">
//                 <Link className="nav-link" to="/">
//                   Home
//                 </Link>
//               </li>
//               <li className="nav-item">
//                 <Link className="nav-link" to="/storie">
//                   Stories
//                 </Link>
//               </li>
//               <li className="nav-item">
//                 <Link className="nav-link" to="/pricing">
//                   Pricing
//                 </Link>
//               </li>
//               <li className="nav-item">
//                 <Link className="nav-link" to="/blog">
//                   Blog
//                 </Link>
//               </li>
//               <li className="nav-item">
//                 <Link className="nav-link" to="/contact">
//                   Contact
//                 </Link>
//               </li> */}
//             </ul>
//             <div className="login-btn">
//               <ul class="lastright-content">
//                 {isNewstoriePage && (
//                   <li className="nav-item">
//                     <button className="btn btn-style publish1w3">
//                       Publish
//                     </button>
//                   </li>
//                 )}
//                 {isConnected && address ? (
//                   <li className="nav-item">
//                     <div className="btn btn-style">
//                       {address.slice(0, 6)}...{address.slice(-4)}
//                     </div>
//                   </li>
//                 ) : (
//                   <li className="nav-item">
//                     <Link to="/wallet" className="btn btn-style">
//                       Get Started
//                     </Link>
//                   </li>
//                 )}
//               </ul>
//             </div>
//           </div>
//         </nav>
//       </div>
//     </header>
//   );
// }

// // export default Navbar;
import React, { useState } from "react";
import { useAccount } from "wagmi";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const { address, isConnected } = useAccount();
  const location = useLocation(); // Define the location object here

  const handleToggle = () => {
    setIsNavOpen(!isNavOpen);
  };

  // Determine if the current route is the "Newstorie" page
  const isNewstoriePage = location.pathname === "/newstorie";

  return (
    <header id="site-header" className="fixed-top">
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light">
          <Link className="navbar-brand" to="/">
            <img
              src="assets/images/logo.png"
              alt="Write.link Logo"
              style={{ width: "36px", height: "36px" }}
            />
            Write.link
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            onClick={handleToggle}
            aria-controls="navbarResponsive"
            aria-expanded={isNavOpen}
            aria-label="Toggle navigation"
          >
            {isNavOpen ? (
              <FontAwesomeIcon icon={faTimes} />
            ) : (
              <FontAwesomeIcon icon={faBars} />
            )}
          </button>
          <div
            className={`${isNavOpen ? "show" : "collapse"} navbar-collapse`}
            id="navbarResponsive"
          >
            <ul className="navbar-nav magicnv-v mx-auto">
              {/* <li className="nav-item">
                  <Link className="nav-link" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/stories">
                    Stories
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/pricing">
                    Pricing
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/blog">
                    Blog
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/contact">
                    Contact
                  </Link>
                </li> */}
            </ul>

            <div className="login-btn">
              <ul className="lastright-content">
                {isNewstoriePage && (
                  <li className="nav-item">
                    <button className="btn btn-style publish1w3">
                      Publish
                    </button>
                  </li>
                )}
                {isConnected && address ? (
                  <li className="nav-item">
                    <div className="btn btn-style">
                      {`${address.slice(0, 6)}...${address.slice(-4)}`}
                    </div>
                  </li>
                ) : (
                  <li className="nav-item">
                    <Link to="/wallet" className="btn btn-style">
                      Get Started
                    </Link>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
