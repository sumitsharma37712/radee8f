import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link";
// Style
import "./Header.css";

// Images
import Logo from "../../assets/images/logo2.png";

const Header = () => {
  const [menu, setMenu] = useState(true);
  const [sticky, setSticky] = useState(false);
  const menuHandler = () => {
    setMenu(!menu);
  };
  const change = () => {
    setMenu(!menu);
  };
  const stickyHeader = () => {
    window.addEventListener("scroll", function () {
      window.scrollY > 2 ? setSticky(true) : setSticky(false);
    });
  };
  window.onscroll = function () {
    myFunction();
  };

  function myFunction() {
    var winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    var height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("myBar").style.width = scrolled + "%";
  }

  const [visible, setVisible] = useState(false)
  const scroll_to_Top = () => {
    window.scrollTo({
      top: 0,
      behavior:"auto",
    });
  }
  
  useEffect(() => {
    stickyHeader();
    setVisible()
  }, []);

  return (
    <>
      <div className="progress-container">
        <div className="progress-bar" id="myBar"></div>
      </div>
      <header className={sticky ? "sticky" : ""}>
        <div className="container">
          <nav className="nav" id="nav">
            <div className="nav-inner">
              <NavLink to="/" >
                <img
                  src={Logo}
                  alt="Logo"
                  title="RADEE8"
                  className="logo"
                  onClick={scroll_to_Top}
                ></img>
              </NavLink>
              <ul
                className={
                  menu
                    ? "row align-items-center menus"
                    : "row align-items-center menus activeX"
                }
              >
                <li className="nav-item">
                  <NavLink to="/" onClick={change}>
                    <span onClick={scroll_to_Top}>Home</span>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/about-us" onClick={change}>
                    <span onClick={scroll_to_Top}>About Us</span>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/services" onClick={change}>
                    <span onClick={scroll_to_Top}>Our Services</span>
                  </NavLink>
                  <div className="submenu">
                    <ul>
                      <li>
                        <NavHashLink
                          to="/services#Entity"
                          scroll={(el) => {
                            const yOffset = -200;
                            const y =
                              el.getBoundingClientRect().top +
                              window.pageYOffset +
                              yOffset;
                            window.scrollTo({ top: y, behavior: "smooth" });
                          }}
                        >
                          ENTITY SETUP & MANAGEMENT
                        </NavHashLink>
                      </li>
                      <li>
                        <NavHashLink
                          to="/services#Administration"
                          scroll={(el) => {
                            const yOffset = -200;
                            const y =
                              el.getBoundingClientRect().top +
                              window.pageYOffset +
                              yOffset;
                            window.scrollTo({ top: y, behavior: "smooth" });
                          }}
                        >
                          ADMINISTRATION & FACILITIES MANAGEMENT
                        </NavHashLink>
                      </li>
                      <li>
                        <NavHashLink
                          to="/services#Accounting"
                          scroll={(el) => {
                            const yOffset = -200;
                            const y =
                              el.getBoundingClientRect().top +
                              window.pageYOffset +
                              yOffset;
                            window.scrollTo({ top: y, behavior: "smooth" });
                          }}
                        >
                          ACCOUNTING & TAXATION
                        </NavHashLink>
                      </li>
                      <li>
                        <NavHashLink
                          to="/services#Shared"
                          scroll={(el) => {
                            const yOffset = -200;
                            const y =
                              el.getBoundingClientRect().top +
                              window.pageYOffset +
                              yOffset;
                            window.scrollTo({ top: y, behavior: "smooth" });
                          }}
                        >
                          SHARED HUMAN RESOURCES
                        </NavHashLink>
                      </li>
                      <li>
                        <NavHashLink
                          to="/services#Payroll"
                          scroll={(el) => {
                            const yOffset = -200;
                            const y =
                              el.getBoundingClientRect().top +
                              window.pageYOffset +
                              yOffset;
                            window.scrollTo({ top: y, behavior: "smooth" });
                          }}
                        >
                          PAYROLL SERVICES
                        </NavHashLink>
                      </li>
                      <li>
                        <NavHashLink
                          to="/services#Technical"
                          scroll={(el) => {
                            const yOffset = -200;
                            const y =
                              el.getBoundingClientRect().top +
                              window.pageYOffset +
                              yOffset;
                            window.scrollTo({ top: y, behavior: "smooth" });
                          }}
                        >
                          TECHNICAL & SOFTWARE COMPLIANCE
                        </NavHashLink>
                      </li>
                    </ul>
                  </div>
                </li>
                <li onClick={change} className="nav-item">
                  <NavLink to="/success-story">
                    <span onClick={scroll_to_Top}>Success Stories</span>
                  </NavLink>
                </li>
              </ul>
              <button
                className={menu ? "hamburger" : "hamburger activeX"}
                onClick={menuHandler}
              >
                <span></span>
                <span></span>
                <span></span>
              </button>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
