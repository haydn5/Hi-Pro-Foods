import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"
import { Container, Row, Col, Image } from 'react-bootstrap';
import tukeyIndex from "../images/turkey-index.jpg"
import orgImage from "../images/org-placeholder.jpg"

const Organization = (props) => (
  <Col lg={3} sm={4}>
      <p><Image src={props.image} alt={props.alt} fluid /></p>
  </Col>
)

const IndexPage = () => (
  <Layout>
    <SEO title="Let's Talk Turkey!" />
    <Container>
      <Row>
        <Col lg={4}>
          <Image src={tukeyIndex} alt="Tukey" fluid />
        </Col>
        <Col lg={8}>
          <h1>Let's Talk Turkey!</h1>
          <p>
            Hi Pro Foods supplies and trades turkey and poultry products for domestic customers and for export around the world. We work with end users, retailers, further processors, distributors and export partners.
          </p>
          <p>
            We strive to supply you, the customer, with what you need, where you need it, and when you need it. We do this through years of building relationships with suppliers and processors to bring value and quality to your purchase.
          </p>
          <p>
            We also quote specialty items such as Antibiotic Free product, organic product, pork specialties and beef specialties.
          </p>
          <p>
            Please contact us for quotes.
          </p>
        </Col>
      </Row>
    </Container>
    <div className="lightBG">
      <Container className="text-center">
        <h2>We're members of the following organizations</h2>
        <Row>
          <Organization image={orgImage} alt="Tukey Time!" />
          <Organization image={orgImage} alt="Tukey Time!" />
          <Organization image={orgImage} alt="Tukey Time!" />
          <Organization image={orgImage} alt="Tukey Time!" />
          <Organization image={orgImage} alt="Tukey Time!" />
          <Organization image={orgImage} alt="Tukey Time!" />
          <Organization image={orgImage} alt="Tukey Time!" />
          <Organization image={orgImage} alt="Tukey Time!" />
        </Row>
      </Container>
    </div>
    
  </Layout>
)

export default IndexPage
