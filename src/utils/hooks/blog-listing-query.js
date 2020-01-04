import { useStaticQuery, graphql } from "gatsby"
export const useBlogListing = () => {
  const { allMarkdownRemark } = useStaticQuery(
    graphql`
      query BlogPostArchiveE {
        allMarkdownRemark(
          limit: 10
          sort: { order: DESC, fields: [frontmatter___date] }
        ) {
          edges {
            node {
              excerpt
              frontmatter {
                title
                slug
                date(formatString: "MMMM DD YYYY")
              }
            }
          }
        }
      }
    `
  )
  console.log(allMarkdownRemark)
  return allMarkdownRemark
}
