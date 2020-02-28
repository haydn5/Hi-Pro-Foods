/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import 'bootstrap/dist/css/bootstrap.min.css';
import "../css/custom.css"
import { Container } from 'react-bootstrap';

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <main>{children}</main>
      <footer>
        <Container className="text-center">
          <h2>Call toll free today</h2>
          <p>(866) 735-8692</p>
          <p>© {new Date().getFullYear()} - Hi Pro Foods of Iowa, Corp | All Rights Reserved<br />
          Site designed by <a href="https://www.nautilusdesigns.com">Nautilus Designs</a></p>
        </Container>
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
