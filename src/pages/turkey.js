import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"
import { Container, Row, Col } from 'react-bootstrap';
// import tukeyIndex from "../images/turkey-index.jpg"
// import orgImage from "../images/org-placeholder.jpg"


const turkeyPage = () => (
  <Layout>
    <SEO title="Turkey" />
    <Container>
      <h1>Turkey</h1>
      <Row>
        <Col lg={6}>
          <h2>Raw and Frozen Turkey</h2>
          <h3>Conventional Product</h3>
          <ul>
            <li>Tray Packed Turkey Breast Portions</li>
            <li>Tray Packed Turkey Hen Drums</li>
            <li>Tray Packed Turkey Breast Tenders</li>
            <li>Tray Packed Turkey Bone-in, Skin-on Thighs</li>
            <li>Tray Packed Turkey Wings</li>
            <li>Tray Packed Turkey Tails</li>
            <li>Tray Packed Turkey Gizzards</li>
            <li>Tray Packed Turkey Necks</li>
            <li>Bulk, Frozen Ground Turkey 10# Tubes (2-10# Tubes per Master) Coarse Ground</li>
            <li>Bulk, Frozen Ground Turkey 10# Tubes (2-10# Tubes per Master) Fine Grind</li>
            <li>30# Bulk, Frozen Tom Turkey Drums (5# & 10# Available)</li>
            <li>30# Bulk, Frozen Tom Turkey Necks (5# Available)</li>
            <li>30# Bulk, Frozen Tom Turkey Tails</li>
            <li>30# Bulk, Frozen Tom Turkey Wings (Whole) (5# & 10# Available)</li>
            <li>30# Bulk, Frozen Tom Turkey 2-JT Wings</li>
            <li>30# Bulk, Frozen Turkey Gizzards</li>
            <li>30# Bulk, Frozen Turkey Tenders (5# Available)</li>
            <li>40# Bulk, Frozen Turkey Tenders</li>
            <li>40# Frozen Boneless, Skinless Turkey Thighs</li>
            <li>Frozen Turkey Breakfast Sausage 1# Chubs (12 Chubs/Box)</li>
            <li>Frozen Ground Turkey 1# Chub (12 Chubs/Box)</li>
            <li>Basted, Frozen Breast of Young Turkey 4-8# (4Hd/Box)</li>
            <li>Premium Skinless Boneless All-White Turkey Breast Roasts 3.5-5# (8Hd/Box)</li>
            <li>15% Basted Boneless Young Turkey Roasts 3.5-5# (8Hd/Box)</li>
            <li>8-12# Raw Frozen Turkey Roast White & Dark</li>
            <li>8-12# Raw Frozen Turkey Breast Roast White Only</li>
            <li>8-12# Raw Frozen Turkey Roast White & Dark Unseasoned</li>
            <li>7-10# Raw Frozen Turkey Breast Roast</li>
            <li>6-8# Raw Frozen Turkey Breast Roast</li>
            <li>10-16# Basted, Frozen Young Hen Turkey (4Hd/Box)</li>
            <li>16-26# Basted, Frozen Prime Young Tom Turkey (2Hd/Box)</li>
            <li>26# and Up Basted, Frozen Prime Young Tom Turkey (2Hd/Box)</li>
            <li>10-16# Fresh, Prime Young Hen Turkey (4Hd/Box)</li>
            <li>16-26# Fresh, Prime Young Tom Turkey (2Hd/Box)</li>
            <li>26# and Up Fresh, Prime Young Tom Turkey (2Hd/Box)</li>
            <li>10-12# Bone-in Turkey Breasts</li>
            <li>12-14# Bone-in Turkey Breasts</li>
            <li>14-16# Bone-in Turkey Breasts</li>
            <li>16-18# Bone-in Turkey Breasts</li>
            <li>18-20# Bone-in Turkey Breasts</li>
          </ul>
          <h3>ABF Raw Retail Ready Product</h3>
          <ul>
            <li>Frozen Whole Turkey 10-24#, 2-4/case</li>
            <li>Fresh Whole Turkey 10-24#, 2-4/case</li>
            <li>Bone-in Turkey Breast 5-7#, 6/case</li>
            <li>Ground Turkey-Retail 1#, 12/case</li>
            <li>Ground Turkey Breakfast Sausage 1#, 12/case</li>
            <li>Breast Tenderloin Traypack 3-5/pack, 9pk/case</li>
            <li>Thigh Traypack 2/pack, 6pk/case</li>
            <li>Wing Traypack 3-4/pack, 18pk/case</li>
            <li>Leg Traypack 3/pack, 12pk/case</li>
            <li>Sausage-Italian 12 oz, 12/case</li>
            <li>Sausage-Roasted Red Pepper & Garlic 12 oz, 12/case</li>
            <li>Sausage- Spinach & Feta 12 oz, 12/case</li>
            <li>Turkey Burger 4/pack</li>
            <li>Turkey Necks 2/pack</li>
          </ul>
          <h3>ABF Raw Bulk Product</h3>
          <ul>
            <li>Netted Breast Roast 9#, 2/case</li>
            <li>Ground Turkey- Bulk 10#, 2/case</li>
            <li>Burger Patties 4 oz, 40/case</li>
            <li>Breast Tenderloins 10#/case</li>
            <li>Boneless/Skinless Breast 40#/case</li>
            <li>Boneless/Skinless Thigh 40#/case</li>
            <li>Boneless/Skin-on Thigh 40#/case</li>
            <li>Diced Thigh Meat 5#, 6/case</li>
            <li>Drumsticks 30#/case</li>
            <li>Necks 30#/case</li>
            <li>Gizzards 30#/case</li>
            <li>Hearts 30#/case</li>
            <li>Livers 30#/case</li>
          </ul>
        </Col>
        <Col lg={6}>
          <h2>Cooked and Smoked Turkey</h2>
          <ul>
            <li>30# Bulk, Frozen Smoked Tom Turkey Drums</li>
            <li>30# Bulk, Frozen Smoked Tom Turkey Necks</li>
            <li>30# Bulk, Frozen Smoked Tom Turkey Tails</li>
            <li>30# Bulk, Frozen Smoked Tom Turkey Wings</li>
            <li>10-12# Smoked Hen Turkeys (4Hd/Box)</li>
            <li>12-14# Smoked Hen Turkeys (4Hd/Box)</li>
            <li>4-8# Smoked Turkey Breast (6Hd/Box)</li>
          </ul>
          <h2>ABF Cooked Retail Ready Product</h2>
          
          <ul>
            <li>Smoked Whole Turkey 8-10 lbs, 2/case</li>
            <li>Smoked Turkey Breast- Retail 1-1.5 lbs, 6/case</li>
            <li>Smoked Turkey Drumsticks 1-1.5 lbs, 8/case</li>
            <li>Oven Roasted Turkey Breast- Retail 1-1.5 lbs, 6/case</li>
            <li>Turkey Wieners 16 oz, 12pk/case</li>
            <li>Rachael Brat 12 oz, 16pk/case</li>
            <li>Cranberry Turkey Sticks 8 oz, 20pk/case</li>
            <li>Pepperjack Turkey Sticks 8 oz, 20pk/case</li>
            <li>Teriyaki Turkey Sticks 4.5 oz 16pk/case</li>
            <li>Bites 0.5 lbs, 50pk/case</li>
            <li>Smoked Turkey Breast- Bulk 5 lbs, 6/case</li>
            <li>Oven Roasted Breast- Bulk 5 lbs, 6/case</li>
            <li>Weiners 25 pieces, 6pk/case</li>
            <li>Cocktail Wieners 5 lbs, 4/case</li>
            <li>Fully Cooked Turkey Burgers 2.5 oz patty, 10 lbs/case</li>
          </ul>
          
        </Col>
      </Row>
    </Container>
    
    
  </Layout>
)

export default turkeyPage
