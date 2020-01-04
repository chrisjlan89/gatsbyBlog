import React from "react"
import { Link } from "gatsby"
import { useAllBlogArchive } from "../utils/hooks/fetch-blog-archive"
import styled from "styled-components"

const ArchiveList = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;

  a {
    font-family: "Montserrat", sans-serif;
    font-size: 0.8rem;
    text-decoration: underline;
    color: rgb(0, 174, 239);
  }
`
const Archive = () => {
  const { edges } = useAllBlogArchive()

  return (
    <>
      <aside>
        <h3>Archive</h3>
        <ArchiveList>
          {edges.map(edge => (
            <li key={edge.node.frontmatter.slug}>
              <Link to={`/posts${edge.node.frontmatter.slug}`}>
                {edge.node.frontmatter.title}
              </Link>
            </li>
          ))}
        </ArchiveList>
      </aside>
    </>
  )
}

export default Archive
