import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"
import { Container, Row, Col, Image } from 'react-bootstrap';
import mapImage from "../images/map-long-horizontal.jpg"


const connectThankYouPage = () => (
  <Layout>
    <SEO title="Connect With Us" />
    <Container>
      <Row>
        <Col lg={6}>
          <h1>Connect With Us</h1>
          <h2>Hi Pro Foods of Iowa, Corp.</h2>
          <p>
            <strong>Mailing Address:</strong><br />
            P.O. Box 277<br />
            Decorah, IA 52101
          </p>
          <p>
            <strong>Phone:</strong><br />
            Toll Free: (866) 735-8692<br />
            Local: (563) 382-9677
          </p>
          <p>
            <strong>Fax:</strong><br />
            (563) 382-9679
          </p>
          <p>
            <strong>Email:</strong><br />
            <a href="mailto:jjenkins@hiprofoods.com">jjenkins@hiprofoods.com</a>
          </p>
        </Col>
        <Col lg={6}>
          <p>Thanks! We'll get back with you shortly.</p>
        </Col>
      </Row>
      
      <Image src={mapImage} alt="Map of Hi Pro Foods" fluid />
    </Container>
    
    
  </Layout>
)

export default connectThankYouPage
