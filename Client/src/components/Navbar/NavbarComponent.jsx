import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Dropdown from "react-bootstrap/Dropdown";
import Logo from "../../assets/logos/logoHorizontal.png";
import styles from "./Navbar.module.css";
import "../../index.css";

const NavbarComponent = () => {
  // State to manage user type
  const [userType, setUserType] = useState("donor"); // Change this to 'beneficiary' for testing

  return (
    <>
      <div className="body">
        <Navbar className={styles.navbar}>
          <Container fluid className={styles.container}>
            {/* Logo & Search */}
            <div className="row align-items-center w-100">
              <div className="col d-flex align-items-center">
                <Dropdown>
                  <Dropdown.Toggle as="a" className={styles.navbarBrand}>
                    <img src={Logo} alt="logo" style={{ width: "150px" }} />
                  </Dropdown.Toggle>
                  <Dropdown.Menu className="bg-dark">
                    <Dropdown.Item href="/" className="text-white">
                      Homepage
                    </Dropdown.Item>
                    <Dropdown.Item
                      href={
                        userType === "donor"
                          ? "/dashboardDonatur"
                          : "/dashboardBenefisari"
                      }
                      className="text-white"
                    >
                      Dashboard
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
              <div className="col">
                <input
                  type="text"
                  placeholder="Search"
                  className="form-control"
                  style={{ width: "400px" }}
                />
              </div>
            </div>
            {/* End Logo & Search */}
            <div className="row align-items-center w-100">
              {/* Navbar */}
              <div className="col d-flex justify-content-end">
                <Nav className="ms-auto d-flex align-items-center">
                  <Nav.Link
                    href="/donasi"
                    className={`${styles.navLink} text-white me-4`}
                  >
                    Donasi
                  </Nav.Link>
                  <Nav.Link
                    href="/event"
                    className={`${styles.navLink} text-white me-4`}
                  >
                    Event
                  </Nav.Link>
                  <Nav.Link
                    href="/blog"
                    className={`${styles.navLink} text-white me-4`}
                  >
                    Blog
                  </Nav.Link>
                </Nav>
              </div>
              {/* End Navbar */}
              {/* Login Button */}
              <div className="col-auto">
                <div className={styles.btnLogin}>
                  <a href="/login" className="btn btn-warning">
                    Login
                  </a>
                </div>
              </div>
              {/* End Login Button */}
            </div>
          </Container>
        </Navbar>
      </div>
    </>
  );
};

export default NavbarComponent;
