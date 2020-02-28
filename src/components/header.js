import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import logo from "../images/hi-pro-logo-with-text.png"

import { Container, Nav, Navbar, Row, Col, Image } from 'react-bootstrap';

const Header = ({ siteTitle }) => (
  <header>

<Container>
      <Row>
        <Col lg={12} className="text-center">
          <Link to="/">
            <Image src={logo} alt={siteTitle} className="maxLogoWidth" fluid />
          </Link>
        </Col>
        <Col lg={12}>

        
      
      <Nav className="justify-content-center" activeKey="/">
        <Navbar fluid
          className="navbar justify-content-center navbar-light" 
          id="mainNav"
          expand="lg"
          collapseOnSelect={true}
        >
          <Navbar.Toggle aria-controls="navbarResponsive"/>
            <Navbar.Collapse id="navbarResponsive">
              <Nav className="navbar-nav text-center">
                <ul className="navbar-nav justify-content-center text-center">
                  
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
      </Nav>

      </Col>
      </Row>
  
          
            
            
            
              
              

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
