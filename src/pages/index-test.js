import React from "react"
// import { Link } from "gatsby"

// import Layout from "../components/layout"
// import Image from "../components/image"
// import SEO from "../components/seo"
import { Container, Col, Image } from 'react-bootstrap';
// import tukeyIndex from "../images/turkey-index.jpg"
// import orgImage from "../images/org-placeholder.jpg"

const User = (props) => (
    <div className={props.user}>
      <img src={props.avatar} className={props.avatar} alt="" />
      <div className={props.description}>
        <h2 className={props.username}>{props.username}</h2>
        <p className={props.excerpt}>{props.excerpt}</p>
      </div>
    </div>
  )

//   const Organization = (props) => (
//     <Col lg={3} sm={4}>
//         <p><Image src={props.image} alt={props.alt} fluid /></p>
//     </Col>
//   )
  const indexPage = () => (
    <Container>
      <h1>About CSS Modules</h1>
      <p>CSS Modules are cool</p>
      <User
        username="Jane Doe"
        avatar="https://s3.amazonaws.com/uifaces/faces/twitter/adellecharles/128.jpg"
        excerpt="I'm Jane Doe. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
      />
      <User
        username="Bob Smith"
        avatar="https://s3.amazonaws.com/uifaces/faces/twitter/vladarbatov/128.jpg"
        excerpt="I'm Bob Smith, a vertically aligned type of guy. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
      />
    </Container>
  )
  export default indexPage