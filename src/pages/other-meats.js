import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"
import { Container, Row, Col } from 'react-bootstrap';
// import tukeyIndex from "../images/turkey-index.jpg"
// import orgImage from "../images/org-placeholder.jpg"


const otherMeatsPage = () => (
  <Layout>
    <SEO title="Duck, Capon, and Pork" />
    <Container>
      <h1>Other Meats</h1>
      <Row>
        <Col lg={6}>
        <h2>Duck</h2>
      <ul>
        <li>Genuine Young Duckling 4-6# (6Hd/Box)</li>
      </ul>
      <h2>Chicken</h2>
      <ul>
        <li>Genuine Capon 7-9# (6Hd/Box)</li>
        <li>Raw Products: Call For Availability</li>
      </ul>
      <h2>Smoked Pork</h2>
      <ul>
        <li>30-35# Smoked Frozen Pork Ham Hocks</li>
        <li>30-35# Smoked Frozen Pork Picnic Hocks (6-8oz)</li>
        <li>30-35# Smoked Frozen Pork Neck Bones</li>
        <li>30-35# Smoked Frozen Pork Tails</li>
        <li>30-35# Smoked Frozen Pork Jowls Skin-on</li>
        <li>30-35# Smoked Frozen Skinless Ham Shanks</li>
        <li>30-35# Smoked Frozen Ham Shanks Cut-up</li>
        <li>30-35# Smoked Frozen Pork Neck Bones Cut-up</li>
        <li>30-35# Smoked Frozen Pork Spare Ribs</li>
        <li>30-35# Smoked Frozen Pork Loins C-Cut V.P.</li>
        <li>Raw Products: Call For Availability</li>
      </ul>
        </Col>
        <Col lg={6}>
          <h2>For Beef & Lamb</h2>
          <p>Please call for availability.</p>
        </Col>
      </Row>
    </Container>
    
    
  </Layout>
)

export default otherMeatsPage
