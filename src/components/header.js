import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import logo from "../images/hi-pro-logo-no-white.png"

import { Container, Nav, Navbar } from 'react-bootstrap';

const Header = ({ siteTitle }) => (
  <header>
    <Container>
        <Navbar className="navbar  navbar-expand-md" id="mainNav" expand="xl"
                collapseOnSelect={true}>
          
            <Link className="navbar-brand">
              <img src={logo} alt={'The Wick'} className="imgFullCol" width="200" />
            </Link>
            <Navbar.Toggle aria-controls="navbarResponsive"/>
            <Navbar.Collapse id="navbarResponsive">
              <Nav className="navbar-nav" >
              <ul className="navbar-nav  text-center">
                <li><Link to="/amenities/" className="nav-link" activeClassName="active">Amenities</Link></li>
            
                <li><Link to="/neighborhood" className="nav-link" activeClassName="active">Neighborhood</Link></li>
                <li><Link to="/schedule-a-tour/" className="nav-link" activeClassName="active">Schedule a Tour</Link></li>
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
