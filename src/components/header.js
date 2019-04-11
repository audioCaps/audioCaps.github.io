import PropTypes from "prop-types"
import React from "react"
import { Navbar, Nav } from "react-bootstrap"

const Header = ({ siteTitle }) => (
  <Navbar>
    <Navbar.Brand href="#home">AudioCaps</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto"></Nav>
      <Nav>
        <Nav.Link href="#about">about</Nav.Link>
        <Nav.Link href="#example">example</Nav.Link>
        <Nav.Link href="#download">download</Nav.Link>
        <Nav.Link href="/supp">explore</Nav.Link>
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
