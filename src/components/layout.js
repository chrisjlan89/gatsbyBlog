/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Archive from "./archive"
import Header from "./header"
import "./layout.css"
import styled from "styled-components"
import Footer from "./footer"
import Img from "gatsby-image"
import { Spring } from "react-spring/renderprops"

const MainLayout = styled.main`
  font-family: "Montserrat", sans-serif;
  max-width: 90%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 3fr 1fr;
  grid-gap: 40px;
`

const Layout = ({ children, location }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          description
        }
      }
      file(relativePath: { regex: "/bg/" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      {/* {location.pathname === "/" && ( */}
      <Spring
        from={{ height: location.pathname === "/" ? 200 : 400 }}
        to={{ height: location.pathname === "/" ? 400 : 200 }}
      >
        {styles => (
          <div style={{ overflow: "hidden", ...styles }}>
            <Img fluid={data.file.childImageSharp.fluid} />
          </div>
        )}
      </Spring>
      {/* )} */}

      <MainLayout>
        <div>{children}</div>
        <Archive />
      </MainLayout>

      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}
Layout.defaultProps = {
  location: {},
}

export default Layout
