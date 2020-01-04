/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require("path")
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const response = await graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              slug
            }
          }
        }
      }
    }
  `)
  console.log(response.data.allMarkdownRemark.edges[0])

  response.data.allMarkdownRemark.edges.map(edge =>
    createPage({
      path: `/posts${edge.node.frontmatter.slug}`,
      component: path.resolve("./src/components/postLayout.js"),
      context: {
        slug: edge.node.frontmatter.slug,
      },
    })
  )
}
