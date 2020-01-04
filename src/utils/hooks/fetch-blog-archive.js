import { useStaticQuery, graphql } from "gatsby"
export const useAllBlogArchive = () => {
  const { allMarkdownRemark } = useStaticQuery(
    graphql`
      query BlogPostArchive2 {
        allMarkdownRemark(
          limit: 5
          sort: { order: DESC, fields: [frontmatter___date] }
        ) {
          edges {
            node {
              frontmatter {
                title
                slug
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
