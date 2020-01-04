import React from "react"
import SEO from "../components/seo"
import { Link } from "gatsby"
import { useBlogListing } from "../utils/hooks/blog-listing-query"
import styled from "styled-components"

const Post = styled.article`
  box-shadow: 0px 3px 10px rgba(25, 17, 34, 0.05);
  padding: 1rem;
  border-radius: 4px;
  margin-bottom: 1rem;

  a {
    color: #000;
    text-decoration: none;
  }
  h3 {
    font-family: "Montserrat", sans-serif;
  }

  p {
    font-size: 0.8rem;
  }

  .read-more {
    font-family: "Montserrat", sans-serif;
    font-size: 0.8rem;
    text-decoration: underline;
    color: rgb(0, 174, 239);
  }
`
const Listing = () => {
  const { edges } = useBlogListing()
  return (
    <>
      <SEO title="Home" />

      {edges.map(({ node }) => (
        <Post key={node.frontmatter.slug}>
          <Link to={`/posts${node.frontmatter.slug}`}>
            <h3>{node.frontmatter.title}</h3>
          </Link>

          <p>{node.frontmatter.date}</p>
          <p> {node.excerpt}</p>
          <Link to={`/posts${node.frontmatter.slug}`}>
            <p className="read-more">Read more...</p>
          </Link>
        </Post>
      ))}

      <Link to="/page-2/">Go to page 2</Link>
    </>
  )
}

export default Listing
