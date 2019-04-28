import PropTypes from "prop-types"
import React from "react"
import { Navbar, Nav } from "react-bootstrap"

const Header = ({ siteTitle }) => (
  <Navbar>
    <Navbar.Brand href="#home">AudioCaps</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto" />
      <Nav>
        <Nav.Link href="#about">About</Nav.Link>
        <Nav.Link href="#example">Examples</Nav.Link>
        <Nav.Link href="#papers">Papers</Nav.Link>
        <Nav.Link href="#downloads">Downloads</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
