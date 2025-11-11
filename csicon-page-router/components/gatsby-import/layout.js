/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import Header from "./header"
import Footer from "./footer"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
import SchemaMarkup from "./schema"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          siteUrl
          image
          og {
            siteName
            image
          }
        }
      }
    }
  `)

  return (
    <>
      <Helmet>
        <SchemaMarkup />
      </Helmet>
      <Header />
      <div className="container-fluid">{children}</div>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
