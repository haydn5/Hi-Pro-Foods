import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import logo from "../images/hi-pro-logo-no-white.png"

import { Container, Nav, Navbar } from 'react-bootstrap';

const Header = ({ siteTitle }) => (
  <header>
    <Container>
        <Navbar className="navbar" id="mainNav" expand="md" collapseOnSelect={true}>
          
            <Link className="navbar-brand">
              <img src={logo} alt={ siteTitle } className="imgFullCol" width="200" />
            </Link>
            <Navbar.Toggle aria-controls="navbarResponsive"/>
            <Navbar.Collapse id="navbarResponsive">
              <Nav className="navbar-nav" >
              <ul className="navbar-nav  text-center">
                <li><Link to="/about" className="nav-link" activeClassName="active">About</Link></li>
                <li><Link to="/turkey" className="nav-link" activeClassName="active">Turkey</Link></li>
                <li><Link to="/chicken" className="nav-link" activeClassName="active">Chicken</Link></li>
                <li><Link to="/other-meats" className="nav-link" activeClassName="active">Other Meats</Link></li>
                <li><Link to="/recipes" className="nav-link" activeClassName="active">Recipes</Link></li>
                <li><Link to="/connect" className="nav-link" activeClassName="active">Connect</Link></li>
              </ul>
              </Nav>
            </Navbar.Collapse>
          
        </Navbar>
        </Container>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
