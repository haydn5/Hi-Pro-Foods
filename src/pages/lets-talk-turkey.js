import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"
import { Container } from 'react-bootstrap';
// import tukeyIndex from "../images/turkey-index.jpg"
// import orgImage from "../images/org-placeholder.jpg"


const blog = () => (
  <Layout>
    <SEO title="Let's Talk Turkey" />
    <Container className="singleCol">
      <h1>Welcome</h1>
      <p>Posted: August 22, 2018 at 5:11 PM in Turkey</p>
      <p>Welcome to the Hi Pro Foods turkey blog.  It is our intention to promote and discuss turkey and turkey products along with all other protein products.  We plan to cover topics ranging from tariffs to new recipes and everything in between.  Your comments and insights are welcome and we look forward to the discussions.

      </p>
      <p>To kick things off, let’s discuss <a href="https://ustr.gov/trade-agreements/free-trade-agreements/north-american-free-trade-agreement-nafta">NAFTA</a>.  According to <a href="https://www.politico.com/story/2018/08/21/trump-nafta-mexico-746332">Politico</a>, the US has reached a tentative agreement with Mexico. The hopes are that Canada will follow. Few details are available and details are what we as exporters and suppliers have to be wary of. When formal signings, announcements and ratifications are made, maybe we can all breath a sigh of relief. It is our hope that, in the end, a new NAFTA won’t change things much and all three parties can go back to their respective countries and claim victory.</p>
      
    </Container>
    
    
  </Layout>
)

export default blog
