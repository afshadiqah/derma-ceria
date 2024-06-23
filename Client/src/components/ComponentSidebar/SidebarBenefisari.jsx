import React from 'react';
import { Nav } from 'react-bootstrap';
import { HouseDoor, VolumeUp, People, GeoAlt, BoxArrowRight, PersonCircle } from 'react-bootstrap-icons';
import { NavLink } from 'react-router-dom';
import styles from './ComponentSidebar.module.css';
import logo from "../../assets/logos/logoHorizontal.png";

const SidebarBenefisari = () => {
  return (
    <div className={`${styles.sidebar} d-flex flex-column p-3 text-white`}>
      <NavLink to="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
        <img src={logo} alt="Dermaceria Logo" className={styles.sidebarLogo} />
      </NavLink>
      <Nav variant="pills" className="flex-column">
        <Nav.Item className={styles.navItem}>
          <Nav.Link as={NavLink} to="/dashboardBenefisari" className={`${styles.navLink} text-white`} activeClassName={styles.activeNavLink}>
            <HouseDoor className="me-2" /> Dashboard
          </Nav.Link>
        </Nav.Item>
        <Nav.Item className={styles.navItem}>
          <Nav.Link as={NavLink} to="/programKampanye" className={`${styles.navLink} text-white`} activeClassName={styles.activeNavLink}>
            <VolumeUp className="me-2" /> Program Kampanye
          </Nav.Link>
        </Nav.Item>
        <Nav.Item className={styles.navItem}>
          <Nav.Link as={NavLink} to="/pelacakanBenefisari" className={`${styles.navLink} text-white`} activeClassName={styles.activeNavLink}>
            <GeoAlt className="me-2" /> Pelacakan Donasi
          </Nav.Link>
        </Nav.Item>
        <Nav.Item className={styles.navItem}>
          <Nav.Link as={NavLink} to="/transparansiBenefisari" className={`${styles.navLink} text-white`} activeClassName={styles.activeNavLink}>
            <People className="me-2" /> Transparansi Donasi
          </Nav.Link>
        </Nav.Item>
        <div className="mt-auto">
          <Nav.Item className={styles.navItem}>
            <Nav.Link as={NavLink} to="/ProfileBenefisari" className={`${styles.navLinkProfile} text-white`} activeClassName={styles.activeNavLink}>
              <PersonCircle className="me-2" /> Profil
            </Nav.Link>
          </Nav.Item>
          <Nav.Item className={styles.navItem}>
            <Nav.Link as={NavLink} to="/donasi" className={`${styles.navLink} text-white`} activeClassName={styles.activeNavLink}>
              <BoxArrowRight className="me-2" /> Keluar
            </Nav.Link>
          </Nav.Item>
        </div>
      </Nav>
    </div>
  );
};

export default SidebarBenefisari;
