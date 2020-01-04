import React from "react"
import Layout from "./layout"
import { graphql } from "gatsby"

//Static Query
// Can be used anywhere, but doesn't accept variables
const PostLayout = props => {
  const { markdownRemark } = props.data
  const { location } = props
  return (
    <Layout location={location}>
      <h1>{markdownRemark.frontmatter.title}</h1>
      <div
        dangerouslySetInnerHTML={{
          __html: markdownRemark.html,
        }}
      ></div>
    </Layout>
  )
}

export const query = graphql`
  query PostQuery($slug: String) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date
        slug
      }
    }
  }
`

export default PostLayout
