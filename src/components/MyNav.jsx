import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Search, Bell, CaretDown } from "react-bootstrap-icons";
import netflixLogo from "../assets/netflix_logo.png";
import avatar from "../assets/avatar.png";
import { NavLink } from "react-router-dom";

const MyNav = () => {
  return (
    <Navbar expand="lg" variant="dark" className="dark-background">
      <Navbar.Brand href="#">
        <img src={netflixLogo} alt="Logo Netflix" style={{ maxWidth: "115px" }} />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <NavLink href="#" className="text-white hover-zoom nav-link" to="/">
            Home
          </NavLink>
          <NavLink href="#" className="text-white hover-zoom nav-link" to="/tvshows">
            TV Shows
          </NavLink>
          <Nav.Link href="#" className="text-white hover-zoom">
            Movies
          </Nav.Link>
          <Nav.Link href="#" className="text-white hover-zoom">
            Recently Added
          </Nav.Link>
          <Nav.Link href="#" className="text-white hover-zoom">
            My List
          </Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link href="#" className="hover-zoom">
            <Search color="white" />
          </Nav.Link>
          <Nav.Link href="#" className="hover-zoom">
            KIDS
          </Nav.Link>
          <Nav.Link href="#" className="hover-zoom">
            <Bell color="white" />
          </Nav.Link>
          <NavLink href="#" className="hover-zoom nav-link" to="/profile">
            <img src={avatar} alt="avatar" style={{ maxWidth: "28px" }} />
          </NavLink>
          <NavLink href="#" className="hover-zoom nav-link ps-0" to="/settings">
            <CaretDown color="white" />
          </NavLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default MyNav;
