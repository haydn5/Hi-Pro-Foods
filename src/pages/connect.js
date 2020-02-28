import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"
import { Container, Row, Col, Form, Button, Image } from 'react-bootstrap';
import mapImage from "../images/map-long-horizontal.jpg"


const turkeyPage = () => (
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
        <Form 
                    name="contact v9"
                    method="post"
                    action="/connect-thank-you/"
                    data-netlify="true"
                    data-netlify-honeypot="bot-field"
                    onSubmit="submit"
                    >
                    {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
                    <input type="hidden" name="form-name" value="contact v1" />
                    <p hidden>
                    <label>
                        Don’t fill this out: <input name="bot-field" />
                    </label>
                    </p>
                     


                        <Row>
                            <Col md={6}>
                                <Form.Group>
                                    <Form.Label>First Name</Form.Label>
                                    <Form.Control 
                                        type="text" name="first-name"
                                     />
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                            <Form.Group>
                                    <Form.Label>Last Name</Form.Label>
                                    <Form.Control 
                                       type="text" name="last-name"

                                     />
                            </Form.Group>
                            </Col>
                        </Row>
                        <Form.Group>
                            <Form.Label>Email address</Form.Label>
                            <Form.Control 
                                required
                                type="email" 
                                name="email" 
                            />
                        </Form.Group>                        
                        <Form.Group>
                            <Form.Label>Questions/Comments</Form.Label>
                            <Form.Control 
                                as="textarea" 
                                name="question-comments"
                                rows="3"
                             />
                        </Form.Group>
                        
                        <Button type="submit">Submit</Button>
                        </Form>
                        <hr />
                        

        </Col>
      </Row>
      
      <Image src={mapImage} alt="Map of Hi Pro Foods" fluid />
    </Container>
    
    
  </Layout>
)

export default turkeyPage
